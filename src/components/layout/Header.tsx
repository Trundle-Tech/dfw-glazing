'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@/components/ui/visually-hidden';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Projects', href: '/projects' },
  { name: 'Suppliers', href: '/suppliers' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="DFW Glazing Inc."
              width={200}
              height={80}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0e8c21] hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:8176969500" className="flex items-center text-sm text-gray-600 hover:text-[#0e8c21]">
              <Phone className="w-4 h-4 mr-2" />
              817-696-9500
            </a>
            <Button asChild className="bg-[#0e8c21] hover:bg-[#0c771c] text-white">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-lg font-medium text-gray-700 hover:text-[#0e8c21] hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href="tel:8176969500"
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-[#0e8c21]"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    817-696-9500
                  </a>
                  <Button asChild className="w-full mt-4 bg-[#0e8c21] hover:bg-[#0c771c] text-white">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
