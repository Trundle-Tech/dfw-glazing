import { Card, CardContent } from '@/components/ui/card';
import { suppliers } from '@/data/suppliers';
import { ExternalLink } from 'lucide-react';

export default function SuppliersPage() {
  const storefrontSuppliers = suppliers.filter((s) => s.category === 'aluminum' && s.subcategory === 'storefront');
  const windowSuppliers = suppliers.filter((s) => s.category === 'aluminum' && s.subcategory === 'windows');
  const glassSuppliers = suppliers.filter((s) => s.category === 'glass');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Suppliers</h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Aluminum Suppliers</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[...storefrontSuppliers, ...windowSuppliers].map((supplier, index) => (
              <Card key={index} className="bg-white border-2 border-white hover:border-[#0e8c21] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#0e8c21] text-white text-xs font-medium rounded-full">
                      {supplier.subcategory === 'storefront' ? 'Storefront / Curtainwall' : 'Aluminum Window'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{supplier.name}</h3>
                  {supplier.url && (
                    <a
                      href={supplier.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#0e8c21] hover:text-[#0c771c] font-medium"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Suppliers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Glass Suppliers</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {glassSuppliers.map((supplier, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#0e8c21] hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{supplier.name}</h3>
                  {supplier.url && (
                    <a
                      href={supplier.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#0e8c21] hover:text-[#0c771c] font-medium"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Through Partnership</h2>
            <p className="text-lg text-gray-300">
              Our relationships with these industry leaders allow us to offer the latest products,
              competitive pricing, and technical support to ensure every project meets the highest
              standards of quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0e8c21] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Products?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us to learn more about the products and systems we use for your project
          </p>
        </div>
      </section>
    </div>
  );
}
