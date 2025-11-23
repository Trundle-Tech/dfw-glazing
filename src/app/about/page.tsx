'use client';

import { CheckCircle2, Target, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

export default function AboutPage() {
  const objectives = [
    'Establishing customer friendly systems and procedures',
    'Maintaining close contact with customers',
    'Quickly addressing any customer concerns or problems',
    'Providing superior quality and service',
    'Exceeding the customers expectations',
    'Empowering our work force to rapidly address customer requirements',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About DFW Glazing</h1>
              <p className="text-xl text-gray-300">
                Building excellence in commercial glass installation since 2004
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#339900] rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our History</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                DFW Glazing Inc. began in 2004 as a joint venture by a group of investors. DFW Glazing had
                a modest beginning and has grown into one of the area&apos;s leaders in glass installation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#339900] rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We have made a commitment to provide the highest standards in glass installation and related
                services, demanded in today's marketplace. We seek commercial glass projects of almost any size.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to using top-of-the-line products from today's leading manufacturers of aluminum
                and glass and some of these can be found on our suppliers link. We will always strive to maintain
                great relationships with general contractors, architects, & suppliers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: CheckCircle2, title: 'Quality', desc: 'Build trust and achieve our clients\' goals through excellence in construction services, quality processes and collaboration.' },
              { icon: Users, title: 'Personnel', desc: 'Business partners and executives with over 81 years of combined experience. Our team of dedicated employees will assist you from design to installation.' },
              { icon: Shield, title: 'Safety', desc: 'DFW Glazing seeks to provide a safe workplace for every team member, subcontractor, and visitor to all site locations.' }
            ].map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1} direction="up">
                <Card className="h-full border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[#339900] rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Objectives</h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                To maintain an organization dedicated to quality, DFW Glazing is dedicated to the following objectives:
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <FadeIn key={index} delay={index * 0.05} direction="up">
                  <motion.div
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm h-full"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{objective}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#339900] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-4">Experience the DFW Glazing Difference</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with a team that&apos;s committed to excellence, quality, and your project&apos;s success
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
