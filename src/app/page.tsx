'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Quote, Star, Store, Building2, DoorOpen, ArrowLeftRight, GlassWater, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { projects } from '@/data/projects';
import FadeIn from '@/components/animations/FadeIn';
import CountUp from '@/components/animations/CountUp';
import Image from 'next/image';
import type { Project } from '@/types';

// Map icon names to actual icon components
const iconMap: { [key: string]: React.ReactNode } = {
  'Store': <Store className="w-6 h-6" />,
  'Building2': <Building2 className="w-6 h-6" />,
  'DoorOpen': <DoorOpen className="w-6 h-6" />,
  'ArrowLeftRight': <ArrowLeftRight className="w-6 h-6" />,
  'GlassWater': <GlassWater className="w-6 h-6" />,
  'Sun': <Sun className="w-6 h-6" />,
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: 2004, label: 'Established', isYear: true },
    { value: 81, label: 'Years Combined Experience', suffix: '+' },
    { value: 1000, label: 'Projects Completed', suffix: '+' },
    { value: 100, label: 'Client Satisfaction', suffix: '%' },
  ];

  const values = [
    'Build trust through excellence in construction services',
    'Quality processes and collaboration',
    'Top-of-the-line products from leading manufacturers',
    'Safe workplace for every team member and visitor',
    'Maintain close contact with customers',
    'Quickly address customer concerns',
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#339900] rounded-full filter blur-[128px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Commercial Glass Installation Excellence
              <span className="text-[#339900]"> Since 2004</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              DFW Glazing offers a wide array of glass expertise. We are a dedicated subcontractor
              specializing in storefront, curtainwall, aluminum windows, and doors throughout the
              Dallas-Fort Worth area.
            </motion.p>

            {/* Trust Signals */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#339900]" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#339900]" />
                <span>1,000+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-[#339900]" />
                <span>20+ Years Experience</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button asChild size="lg" className="bg-[#339900] hover:bg-[#2d8500] text-white text-lg shadow-xl hover:shadow-2xl transition-all">
                <Link href="/contact">
                  Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-white bg-white text-gray-900 hover:bg-gray-100 text-lg shadow-lg hover:shadow-xl transition-all">
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#339900] mb-2">
                    <CountUp to={stat.value} suffix={stat.suffix || ''} duration={2.5} />
                  </div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive commercial glass installation services for all your project needs
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridAutoRows: '1fr' }}>
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1} direction="up">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#339900] flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-[#339900] rounded-lg flex items-center justify-center mb-4 text-white">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose DFW Glazing?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We have made a commitment to provide the highest standards in glass installation
                  and related services demanded in today's marketplace.
                </p>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <FadeIn key={index} delay={index * 0.1} direction="right">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{value}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-700 mb-6">
                  We involve ourselves with today's leading manufacturers of aluminum and glass
                  to ensure we maintain quality products as well as quality installation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border-2 border-gray-200">
                    <Phone className="w-8 h-8 text-[#339900] mr-4" />
                    <div>
                      <div className="font-semibold">Call Us Today</div>
                      <a href="tel:8176969500" className="text-[#339900] text-lg font-bold hover:underline">
                        817-696-9500
                      </a>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-[#339900] hover:bg-[#2d8500] shadow-md hover:shadow-lg transition-all">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our portfolio of successful commercial glazing installations across the DFW area
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 6).map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1} direction="up">
                <Card
                  className="overflow-hidden h-full bg-gray-50 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#339900] flex flex-col cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-64 bg-gray-200 flex-shrink-0 overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute top-4 right-4 bg-[#339900] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.name}</h3>
                    <p className="text-gray-600">{project.location}</p>
                    {project.description && <p className="text-sm text-gray-500 mt-2">{project.description}</p>}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} direction="up">
            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-white bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what contractors, facility managers, and project leaders say about working with DFW Glazing.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 0.1} direction="up">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#339900]">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-10 h-10 text-[#339900] opacity-50" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#339900] text-[#339900]" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="border-t pt-4">
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm font-medium text-[#339900]">{testimonial.company}</p>
                      {testimonial.project && (
                        <p className="text-xs text-gray-500 mt-2">Project: {testimonial.project}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} direction="up">
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Join over 150+ satisfied clients who trust DFW Glazing</p>
              <Button asChild size="lg" className="bg-[#339900] hover:bg-[#2d8500] shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#339900] text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black opacity-0"
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for a free consultation and quote on your commercial glass project
            </p>
            <Button asChild size="lg" variant="outline" className="border-white bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </FadeIn>
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
              {selectedProject.id === '1' && (
                <div className="relative h-96 bg-gray-200 overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                  />
                </div>
              )}
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
    </div>
  );
}
