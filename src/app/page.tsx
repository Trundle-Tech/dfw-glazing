'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Quote, Star, Store, Building2, DoorOpen, ArrowLeftRight, GlassWater, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { projects } from '@/data/projects';
import FadeIn from '@/components/animations/FadeIn';
import CountUp from '@/components/animations/CountUp';
import Image from 'next/image';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Featured projects: Custom selection
  const featuredProjects = [
    projects[0], // Old Parkland
    projects[1], // Nolan Catholic High School
    projects[6], // Drover Hotel (replacing Uptown Marriott)
    projects[3], // Holiday Inn Express
    projects[4], // Courtyard Marriott Grapevine
    projects[21], // Glen Rose ISD Basketball Arena (replacing Kleiman Eye Center)
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
      }, 5000); // Rotate every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovering, featuredProjects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const stats = [
    { value: 2004, label: 'Established', isYear: true },
    { value: 550, label: 'Projects Completed', prefix: 'Over ' },
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden bg-black h-[50vh] md:h-[60vh] max-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/projects/nolanHighschoolHero.jpeg"
            alt="Nolan Catholic High School"
            fill
            className="object-contain object-center md:object-right"
            priority
            sizes="100vw"
            quality={100}
            unoptimized
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Project Name - Bottom Right */}
        <div className="absolute bottom-0 right-0 p-6 md:p-8 lg:p-12 z-10">
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-light tracking-wider mb-1">
              Nolan Catholic High School
            </h2>
            <p className="text-xs md:text-sm lg:text-base font-light tracking-wide">
              Ft. Worth, Texas<br />Linbeck Group
            </p>
          </motion.div>
        </div>

        {/* Logo - Left Side */}
        <div className="container mx-auto px-4 h-full relative z-20">
          <div className="hidden md:flex items-center h-full">
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Spotlight effect - creates the shadow illusion */}
              <motion.div
                className="absolute -inset-8 rounded-full opacity-60 blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 30%, transparent 70%)',
                }}
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Logo container */}
              <div className="relative p-8">
                <Image
                  src="/images/logo.png"
                  alt="DFW Glazing"
                  width={500}
                  height={200}
                  className="w-full h-auto relative z-10"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Stats and CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Commercial Glass Installation Excellence
                <span className="text-[#0e8c21]"> Since 2004</span>
              </h1>

              {/* Stats as Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-gray-50 border-2 border-gray-200 px-6 py-3 rounded-full text-gray-900 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-[#0e8c21]">80+</div>
                  <span className="text-sm md:text-base font-medium">Years Experience</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 border-2 border-gray-200 px-6 py-3 rounded-full text-gray-900 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-[#0e8c21]">550+</div>
                  <span className="text-sm md:text-base font-medium">Projects Completed</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 border-2 border-gray-200 px-6 py-3 rounded-full text-gray-900 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-[#0e8c21]">100%</div>
                  <span className="text-sm md:text-base font-medium">Client Satisfaction</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-[#0e8c21] hover:bg-[#0c771c] text-white shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="border-gray-300 bg-white text-gray-900 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our portfolio of successful commercial glazing installations across the DFW area
              </p>
            </div>
          </FadeIn>

          {/* Carousel */}
          <div
            className="relative max-w-6xl mx-auto mb-12"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[400px] md:h-[600px]"
                >
                  {/* Project Image */}
                  <Image
                    src={featuredProjects[currentSlide].image}
                    alt={featuredProjects[currentSlide].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                  />

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Category Tag - Top Right */}
                  <div className="absolute top-6 right-6 bg-[#0e8c21] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase z-10">
                    {featuredProjects[currentSlide].category}
                  </div>

                  {/* Project Info - Bottom Left */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-12 text-white z-10">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                      {featuredProjects[currentSlide].name}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-200">{featuredProjects[currentSlide].location}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-[#0e8c21] w-8' : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
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
                        <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{value}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-700 mb-6">
                  We involve ourselves with today's leading manufacturers of aluminum and glass
                  to ensure we maintain quality products as well as quality installation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <Phone className="w-8 h-8 text-[#0e8c21] mr-4" />
                    <div>
                      <div className="font-semibold">Call Us Today</div>
                      <a href="tel:8176969500" className="text-[#0e8c21] text-lg font-bold hover:underline">
                        817-696-9500
                      </a>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-[#0e8c21] hover:bg-[#0c771c] shadow-md hover:shadow-lg transition-all">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We offer comprehensive commercial glass installation services for all your project needs
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridAutoRows: '1fr' }}>
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1} direction="up">
                <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-[#0e8c21] flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-[#0e8c21] rounded-lg flex items-center justify-center mb-4 text-white">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
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
                <Card className="h-full bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#0e8c21]">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-10 h-10 text-[#0e8c21] opacity-50" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#0e8c21] text-[#0e8c21]" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="border-t pt-4">
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm font-medium text-[#0e8c21]">{testimonial.company}</p>
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
              <Button asChild size="lg" className="bg-[#0e8c21] hover:bg-[#0c771c] shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0e8c21] text-white relative overflow-hidden">
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
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss your commercial glass project
            </p>
            <Button asChild size="lg" variant="outline" className="border-white bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
