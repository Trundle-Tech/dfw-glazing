'use client';

import { useEffect, useState } from 'react';
import * as THREE from 'three';

interface PLYViewerProps {
  modelPath: string;
}

export default function PLYViewer({ modelPath }: PLYViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!modelPath) return;

    const canvas = document.getElementById('ply-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    // Initialize THREE.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Load PLY file
    const loader = new PLYLoader();

    let mesh: THREE.Points | null = null;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };
    let frameId: number | null = null;

    // Event handler references for cleanup
    let onMouseDown: ((e: MouseEvent) => void) | null = null;
    let onMouseMove: ((e: MouseEvent) => void) | null = null;
    let onMouseUp: (() => void) | null = null;
    let onMouseLeave: (() => void) | null = null;
    let onWheel: ((e: WheelEvent) => void) | null = null;
    let handleResize: (() => void) | null = null;

    const onLoadSuccess = (geometry: THREE.BufferGeometry) => {
      try {
        // Check if geometry has valid positions
        const positionAttribute = geometry.getAttribute('position');
        if (!positionAttribute || positionAttribute.count === 0) {
          setError('PLY file has no vertex data');
          setLoading(false);
          return;
        }

        geometry.computeVertexNormals();
        geometry.center();
        geometry.computeBoundingBox();

        const material = new THREE.PointsMaterial({
          size: 0.3,
          vertexColors: true,
          sizeAttenuation: true,
        });

        mesh = new THREE.Points(geometry, material);
        scene.add(mesh);

        // Auto-fit camera to geometry
        if (geometry.boundingBox) {
          const size = geometry.boundingBox.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            camera.position.z = maxDim * 2;
          }
        }

        setLoading(false);

        // Setup mouse controls
        onMouseDown = (e: MouseEvent) => {
          isDragging = true;
          previousMousePosition = { x: e.clientX, y: e.clientY };
        };

        onMouseMove = (e: MouseEvent) => {
          if (!isDragging || !mesh) return;

          const deltaX = e.clientX - previousMousePosition.x;
          const deltaY = e.clientY - previousMousePosition.y;

          rotation.y += deltaX * 0.005;
          rotation.x += deltaY * 0.005;

          mesh.rotation.y = rotation.y;
          mesh.rotation.x = rotation.x;

          previousMousePosition = { x: e.clientX, y: e.clientY };
        };

        onMouseUp = () => {
          isDragging = false;
        };

        onMouseLeave = () => {
          isDragging = false;
        };

        onWheel = (e: WheelEvent) => {
          e.preventDefault();
          camera.position.z += e.deltaY * 0.1;
          camera.position.z = Math.max(1, Math.min(500, camera.position.z));
        };

        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('mouseleave', onMouseLeave);
        canvas.addEventListener('wheel', onWheel, { passive: false });

        // Animation loop
        const animate = () => {
          frameId = requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        handleResize = () => {
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
      } catch (err) {
        console.error('Error processing geometry:', err);
        setError('Failed to render 3D model');
        setLoading(false);
      }
    };

    const onLoadError = () => {
      console.error('Error loading PLY');
      setError('Failed to load 3D model');
      setLoading(false);
    };

    loader.load(modelPath, onLoadSuccess, undefined, onLoadError);

    // Cleanup function
    return () => {
      // Cancel animation frame
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      // Remove event listeners
      if (onMouseDown) canvas.removeEventListener('mousedown', onMouseDown);
      if (onMouseMove) canvas.removeEventListener('mousemove', onMouseMove);
      if (onMouseUp) canvas.removeEventListener('mouseup', onMouseUp);
      if (onMouseLeave) canvas.removeEventListener('mouseleave', onMouseLeave);
      if (onWheel) canvas.removeEventListener('wheel', onWheel);
      if (handleResize) window.removeEventListener('resize', handleResize);

      // Dispose renderer and geometry
      renderer.dispose();
      if (mesh) {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material instanceof THREE.PointsMaterial) {
          mesh.material.dispose();
        }
      }
    };
  }, [modelPath]);

  return (
    <div className="w-full h-96 bg-black rounded-lg overflow-hidden">
      <canvas
        id="ply-canvas"
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-2"></div>
            <p>Loading 3D Model...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-center">
            <p className="text-red-400">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple PLY Loader
class PLYLoader {
  load(
    url: string,
    onLoad: (geometry: THREE.BufferGeometry) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (error: ErrorEvent) => void
  ) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
      try {
        const geometry = this.parse(xhr.response);
        onLoad(geometry);
      } catch (e) {
        onError?.(new ErrorEvent('parse error'));
      }
    });

    if (onProgress) {
      xhr.addEventListener('progress', onProgress as EventListener);
    }
    if (onError) {
      xhr.addEventListener('error', onError as EventListener);
    }

    xhr.open('GET', url);
    xhr.responseType = 'arraybuffer';
    xhr.send();
  }

  parse(arrayBuffer: ArrayBuffer): THREE.BufferGeometry {
    const view = new DataView(arrayBuffer);
    const uint8View = new Uint8Array(arrayBuffer);
    let offset = 0;

    // Read header
    const headerEndIndex = this.findHeaderEnd(uint8View);
    const headerStr = new TextDecoder().decode(
      uint8View.slice(0, headerEndIndex)
    );
    const lines = headerStr.split('\n');

    let vertexCount = 0;
    let properties: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('element vertex')) {
        vertexCount = parseInt(line.split(' ')[2]);
      }
      if (line.startsWith('property')) {
        properties.push(line);
      }
      if (line === 'end_header') {
        offset = headerEndIndex;
        break;
      }
    }

    // Determine vertex size based on properties
    let vertexSize = 0;
    const hasColor = properties.some(p => p.includes('red') || p.includes('diffuse_red'));

    // Standard: x, y, z (3 floats = 12 bytes)
    vertexSize = 12;

    // Check if there are normals (nx, ny, nz = 3 floats = 12 bytes)
    const hasNormals = properties.filter(p => p.includes('normal')).length === 3;
    if (hasNormals) {
      vertexSize += 12;
    }

    // Check for colors (usually 3 uints = 3 bytes)
    let colorOffset = vertexSize;
    if (hasColor) {
      vertexSize += 3;
    }

    const positions = new Float32Array(vertexCount * 3);
    const colors = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount; i++) {
      // Read x, y, z
      const x = view.getFloat32(offset, true);
      offset += 4;
      const y = view.getFloat32(offset, true);
      offset += 4;
      const z = view.getFloat32(offset, true);
      offset += 4;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Skip normals if present
      if (hasNormals) {
        offset += 12; // nx, ny, nz
      }

      // Read color if available
      let r = 1,
        g = 1,
        b = 1;
      if (hasColor) {
        try {
          const red = uint8View[offset];
          const green = uint8View[offset + 1];
          const blue = uint8View[offset + 2];
          r = red / 255;
          g = green / 255;
          b = blue / 255;
          offset += 3;
        } catch {
          // No color data
        }
      }

      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return geometry;
  }

  private findHeaderEnd(uint8View: Uint8Array): number {
    const searchStr = 'end_header\n';
    const searchBytes = new TextEncoder().encode(searchStr);

    for (let i = 0; i < uint8View.length - searchBytes.length; i++) {
      let match = true;
      for (let j = 0; j < searchBytes.length; j++) {
        if (uint8View[i + j] !== searchBytes[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i + searchBytes.length;
      }
    }
    return 0;
  }
}
