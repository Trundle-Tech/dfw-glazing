'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import type { Project } from '@/types';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'hotel', label: 'Hotels' },
  { id: 'school', label: 'Schools' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'commercial', label: 'Commercial' },
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of completed commercial glass installations throughout
              the Dallas-Fort Worth area and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={
                  selectedCategory === category.id
                    ? 'bg-[#339900] hover:bg-[#2d8500]'
                    : ''
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden transition-all hover:shadow-lg cursor-pointer hover:shadow-2xl hover:border-[#339900] border-2 border-transparent"
                onClick={() => handleProjectClick(project)}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gray-300 flex items-center justify-center overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-2">{project.location}</p>
                    {project.description && <p className="text-sm text-gray-500 mb-3">{project.description}</p>}
                    <span className="inline-block px-3 py-1 bg-[#339900] text-white text-sm rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.name}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div className="relative h-96 bg-gray-200 overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                />
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Location:</span> {selectedProject.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Category:</span> <span className="capitalize">{selectedProject.category}</span>
                </p>
                {selectedProject.description && (
                  <p className="text-gray-700">{selectedProject.description}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Project Excellence</h2>
            <p className="text-lg text-gray-700">
              From small retail storefronts to large-scale commercial curtainwall projects, we've
              successfully completed hundreds of installations across Texas and Oklahoma. Our portfolio
              includes hospitals, schools, hotels, office buildings, and more.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#339900] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us bring our experience and expertise to your next commercial glass project
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#339900]">
            <a href="/contact">Get a Quote Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
