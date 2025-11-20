import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2, Store, Building2, DoorOpen, ArrowLeftRight, GlassWater, Sun } from 'lucide-react';

// Map icon names to actual icon components
const iconMap: { [key: string]: React.ReactNode } = {
  'Store': <Store className="w-8 h-8" />,
  'Building2': <Building2 className="w-8 h-8" />,
  'DoorOpen': <DoorOpen className="w-8 h-8" />,
  'ArrowLeftRight': <ArrowLeftRight className="w-8 h-8" />,
  'GlassWater': <GlassWater className="w-8 h-8" />,
  'Sun': <Sun className="w-8 h-8" />,
};

export const metadata = {
  title: 'Our Services | DFW Glazing Inc.',
  description: 'DFW Glazing offers commercial glass installation services including storefront, curtainwall, aluminum windows & doors, automatic sliding doors, all-glass entrances, and translucent panels.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive commercial glass installation services for projects of all sizes
              throughout the Dallas-Fort Worth area
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-[#339900] rounded-lg flex items-center justify-center mb-6 text-white">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {service.details && (
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-[#339900] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link href={`/services/${service.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="w-16 h-16 bg-[#339900] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-gray-600">
                  We meet to understand your project requirements and vision
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-[#339900] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Design & Estimate</h3>
                <p className="text-sm text-gray-600">
                  Our team provides detailed designs and competitive pricing
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-[#339900] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Fabrication</h3>
                <p className="text-sm text-gray-600">
                  Quality materials fabricated to exact specifications
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-[#339900] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Installation</h3>
                <p className="text-sm text-gray-600">
                  Professional installation by our experienced team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Design assistance and value engineering</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Budget proposals for design teams</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Project management from start to finish</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Meeting tight installation schedules</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Quality products from leading manufacturers</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Code-compliant installations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Safety-focused work practices</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#339900] mr-3 flex-shrink-0 mt-1" />
                  <p>Warranty and service support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#339900] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Discuss Your Project</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and discover how we can bring your vision to life
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#339900]">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
