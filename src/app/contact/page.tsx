'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ['.pdf', '.zip'];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ACCEPTED_FILE_TYPES.includes(fileExtension)) {
      setFileError('Only PDF and ZIP files are allowed');
      setSelectedFile(null);
      return;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      setFileError('File size must be less than 10MB');
      setSelectedFile(null);
      return;
    }

    setFileError('');
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError('');
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result as string;
        // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
        const base64Data = base64.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Prepare form data
      const formData: any = {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        projectType: data.projectType,
        message: data.message,
      };

      // Add file data if present
      if (selectedFile) {
        const fileData = await convertFileToBase64(selectedFile);
        formData.fileName = selectedFile.name;
        formData.fileSize = selectedFile.size;
        formData.fileData = fileData;
      }

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Success
      setIsSubmitting(false);
      setSubmitSuccess(true);
      form.reset();
      setSelectedFile(null);
      setTimeout(() => setSubmitSuccess(false), 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit form. Please try again or call us at 817-696-9500.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Contact Information & Form */}
      <section className="py-12 flex-1 flex items-center">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Get in touch to discuss your commercial glass project
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Contact Info Cards */}
            <div className="h-full">
              <FadeIn direction="left" className="h-full">
                <div className="flex flex-col gap-4 h-full justify-between">
              <a
                href="https://www.google.com/maps/search/?api=1&query=4308+Clay+Ave+Haltom+City+TX+76117"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="hover:shadow-lg hover:border-[#339900] transition-all duration-300 cursor-pointer border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#339900] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Office Location</h3>
                        <p className="text-gray-600 text-sm">
                          4308 Clay Ave<br />
                          Haltom City, TX 76117
                        </p>
                        <p className="text-[#339900] text-xs mt-2 font-medium">
                          Click to open in maps
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#339900] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <a href="tel:8176969500" className="text-gray-600 hover:text-[#339900] text-sm">
                        817-696-9500
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        Fax: 817-696-9506
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#339900] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday<br />
                        8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 h-full">
              <FadeIn direction="right" delay={0.2} className="h-full">
              <Card className="h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <h2 className="text-xl font-bold mb-4">Request a Quote</h2>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Thank you! We'll be in touch soon.
                      </p>
                    </div>
                  )}

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 flex flex-col">
                      <div className="grid md:grid-cols-2 gap-6 flex-1">
                        {/* Left Column - Basic Info */}
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                  <Input placeholder="Company name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="(123) 456-7890" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Type *</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Storefront, Curtainwall, etc." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Right Column - Project Details & File Upload */}
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Details *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your project..."
                                    className="min-h-[200px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* File Upload */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">
                              Attach Files (Optional)
                            </label>
                            <p className="text-xs text-gray-500">
                              Upload project plans, specifications, or other relevant documents (PDF or ZIP, max 10MB)
                            </p>

                            {!selectedFile ? (
                              <div className="relative">
                                <input
                                  type="file"
                                  accept=".pdf,.zip"
                                  onChange={handleFileChange}
                                  className="hidden"
                                  id="file-upload"
                                />
                                <label
                                  htmlFor="file-upload"
                                  className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#339900] hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                  <div className="text-center">
                                    <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                                    <p className="text-xs text-gray-600">
                                      Click to upload (PDF or ZIP, max 10MB)
                                    </p>
                                  </div>
                                </label>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-[#339900] rounded-lg flex items-center justify-center">
                                    <Upload className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">
                                      {selectedFile.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={handleRemoveFile}
                                  className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            )}

                            {fileError && (
                              <p className="text-sm text-red-500">{fileError}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button
                          type="submit"
                          className="w-full bg-[#339900] hover:bg-[#2d8500]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
