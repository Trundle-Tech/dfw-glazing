'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'hotel', label: 'Hotels' },
  { id: 'school', label: 'Schools' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'commercial', label: 'Commercial' },
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-gray-300">
                Explore our portfolio of completed commercial glass installations throughout
                the Dallas-Fort Worth area and beyond
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-3 md:py-6 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                className={
                  selectedCategory === category.id
                    ? 'bg-[#339900] hover:bg-[#2d8500] text-xs md:text-sm'
                    : 'text-xs md:text-sm'
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
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.02} direction="up">
                <Card className="overflow-hidden h-full border-2 border-gray-200">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative h-64 bg-gray-300 flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
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
              </FadeIn>
            ))}

            {/* Add Your Project CTA Card */}
            <FadeIn delay={filteredProjects.length * 0.02} direction="up">
              <Link href="/contact">
                <Card className="overflow-hidden h-full cursor-pointer border-2 border-[#339900] bg-gradient-to-br from-[#339900] to-[#2d8500] hover:from-[#2d8500] hover:to-[#339900] transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                      <div className="text-6xl mb-4">+</div>
                      <h3 className="text-2xl font-bold mb-3">Add Your Project</h3>
                      <p className="text-white/90 px-6 text-center mb-6">
                        Ready to work with us? Let's discuss your next glass installation project.
                      </p>
                      <Button className="bg-white hover:bg-gray-100 text-[#339900] font-semibold">
                        Contact Us Today
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Project Excellence</h2>
              <p className="text-lg text-gray-700">
                From small retail storefronts to large-scale commercial curtainwall projects, we've
                successfully completed hundreds of installations across Texas and Oklahoma. Our portfolio
                includes hospitals, schools, hotels, office buildings, and more.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#339900] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let us bring our experience and expertise to your next commercial glass project
            </p>
            <Button asChild size="lg" variant="outline" className="border-white bg-white text-[#339900] hover:bg-gray-100 shadow-lg transition-all">
              <Link href="/contact">Get a Quote Today</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
