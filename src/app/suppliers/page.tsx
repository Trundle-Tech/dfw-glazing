import { Card, CardContent } from '@/components/ui/card';
import { suppliers } from '@/data/suppliers';
import { ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Our Suppliers | DFW Glazing Inc.',
  description: 'DFW Glazing partners with leading manufacturers of aluminum and glass including Kawneer, MANKO, Oldcastle, Tristar, and Trulite.',
};

export default function SuppliersPage() {
  const aluminumSuppliers = suppliers.filter((s) => s.category === 'aluminum');
  const glassSuppliers = suppliers.filter((s) => s.category === 'glass');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Suppliers</h1>
            <p className="text-xl text-gray-300">
              We partner with industry-leading manufacturers to ensure quality products and reliable installations
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              DFW Glazing involves ourselves with today's leading manufacturers of aluminum and glass
              to ensure we maintain quality products as well as quality installation. Our partnerships
              with these trusted suppliers enable us to deliver superior results on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Aluminum Suppliers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Aluminum Suppliers</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {aluminumSuppliers.map((supplier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{supplier.name}</h3>
                  <a
                    href={supplier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#339900] hover:text-[#2d8500] font-medium"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Suppliers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Glass Suppliers</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {glassSuppliers.map((supplier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{supplier.name}</h3>
                  <a
                    href={supplier.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#339900] hover:text-[#2d8500] font-medium"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Quality Through Partnership</h2>
            <p className="text-lg text-gray-700">
              Our relationships with these industry leaders allow us to offer the latest products,
              competitive pricing, and technical support to ensure every project meets the highest
              standards of quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#339900] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Products?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us to learn more about the products and systems we use for your project
          </p>
        </div>
      </section>
    </div>
  );
}
