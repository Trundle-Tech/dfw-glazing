import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#339900]">DFW</span>
              <span className="text-white"> GLAZING</span>
            </div>
            <p className="text-sm mb-4">
              Since 2004, DFW Glazing has been a leader in commercial glass installation,
              providing quality services throughout the Dallas-Fort Worth area.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-[#339900]" />
                <span>4308 Clay Ave, Haltom City, TX 76117</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#339900]" />
                <a href="tel:8176969500" className="hover:text-[#339900]">
                  817-696-9500
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#339900]" />
                <span className="text-sm">Fax: 817-696-9506</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#339900] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#339900] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#339900] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#339900] transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/storefront" className="hover:text-[#339900] transition-colors">
                  Storefront Systems
                </Link>
              </li>
              <li>
                <Link href="/services/curtainwall" className="hover:text-[#339900] transition-colors">
                  Curtainwall
                </Link>
              </li>
              <li>
                <Link href="/services/windows-doors" className="hover:text-[#339900] transition-colors">
                  Windows & Doors
                </Link>
              </li>
              <li>
                <Link href="/services/automatic-doors" className="hover:text-[#339900] transition-colors">
                  Automatic Doors
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} DFW Glazing, Inc. All rights reserved. | Established 2004</p>
        </div>
      </div>
    </footer>
  );
}
