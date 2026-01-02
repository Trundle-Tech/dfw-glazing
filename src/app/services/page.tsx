'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import FadeIn from '@/components/animations/FadeIn';
import { CheckCircle2, Store, Building2, DoorOpen, ArrowLeftRight, GlassWater, Sun, ArrowRight } from 'lucide-react';

// Map icon names to actual icon components
const iconMap: { [key: string]: React.ReactNode } = {
  'Store': <Store className="w-8 h-8" />,
  'Building2': <Building2 className="w-8 h-8" />,
  'DoorOpen': <DoorOpen className="w-8 h-8" />,
  'ArrowLeftRight': <ArrowLeftRight className="w-8 h-8" />,
  'GlassWater': <GlassWater className="w-8 h-8" />,
  'Sun': <Sun className="w-8 h-8" />,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300">
                Comprehensive commercial glass installation services for projects of all sizes
                throughout the Dallas-Fort Worth area
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1} direction="up">
                <Card className="h-full flex flex-col border-2 border-gray-200 hover:border-[#0e8c21] hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-16 h-16 bg-[#0e8c21] rounded-lg flex items-center justify-center mb-6 text-white">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>

                    {service.details && (
                      <ul className="space-y-2 flex-grow">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-[#0e8c21] mr-2 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Process</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {[
                  { num: 1, title: 'Consultation', desc: 'We meet to understand your project requirements and vision' },
                  { num: 2, title: 'Design & Estimate', desc: 'Our team provides detailed designs and competitive pricing' },
                  { num: 3, title: 'Fabrication', desc: 'Quality materials fabricated to exact specifications' },
                  { num: 4, title: 'Installation', desc: 'Professional installation by our experienced team' }
                ].map((step, index) => (
                  <FadeIn key={step.num} delay={index * 0.1} direction="up">
                    <div className="flex items-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#0e8c21] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                          {step.num}
                        </div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-300 max-w-[200px]">{step.desc}</p>
                      </div>
                      {index < 3 && (
                        <ArrowRight className="w-8 h-8 text-white mx-4 hidden md:block flex-shrink-0" />
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Design assistance and value engineering</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Budget proposals for design teams</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Project management from start to finish</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Meeting tight installation schedules</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Quality products from leading manufacturers</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Code-compliant installations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Safety-focused work practices</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0e8c21] mr-3 flex-shrink-0 mt-1" />
                  <p>Warranty and service support</p>
                </div>
              </div>
            </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0e8c21] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Discuss Your Project</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss how we can bring your vision to life
            </p>
            <Button asChild size="lg" variant="outline" className="border-white bg-white text-[#0e8c21] hover:bg-gray-100 shadow-lg transition-all">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
