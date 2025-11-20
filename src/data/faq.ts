export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'process' | 'technical';
}

export const faqItems: FAQItem[] = [
  // General Questions
  {
    id: '1',
    category: 'general',
    question: 'How long has DFW Glazing been in business?',
    answer: 'DFW Glazing was established in 2004 and has been providing quality commercial glass installation services throughout the Dallas-Fort Worth area for over 20 years. Our management team brings 81+ years of combined experience in the glazing industry.',
  },
  {
    id: '2',
    category: 'general',
    question: 'What areas do you serve?',
    answer: 'We primarily serve the Dallas-Fort Worth metropolitan area and surrounding regions in Texas. We have successfully completed projects throughout North Texas and into Oklahoma. Contact us to discuss your specific location.',
  },
  {
    id: '3',
    category: 'general',
    question: 'What types of projects do you handle?',
    answer: 'We specialize in commercial glass projects of almost any size, including hotels, schools, healthcare facilities, office buildings, retail storefronts, and municipal buildings. Our portfolio includes over 150 completed projects ranging from small storefront installations to large-scale curtainwall systems.',
  },
  {
    id: '4',
    category: 'general',
    question: 'Are you licensed and insured?',
    answer: 'Yes, DFW Glazing is fully licensed and insured. We maintain comprehensive liability insurance and workers compensation coverage. We can provide certificates of insurance upon request for your project.',
  },

  // Services Questions
  {
    id: '5',
    category: 'services',
    question: 'What glass installation services do you offer?',
    answer: 'We offer a complete range of commercial glass services including storefront systems, curtainwall installation, aluminum windows and doors, automatic sliding doors, all-glass entrances, and translucent panel systems. We also provide design assistance and value engineering.',
  },
  {
    id: '6',
    category: 'services',
    question: 'Do you work with specific manufacturers?',
    answer: 'Yes, we partner with industry-leading manufacturers including Kawneer, MANKO, Oldcastle BuildingEnvelope, Tristar Glass, and Trulite. These partnerships ensure we provide top-quality materials and maintain manufacturer warranties.',
  },
  {
    id: '7',
    category: 'services',
    question: 'Can you help with design and specifications?',
    answer: 'Absolutely! We offer design assistance and value engineering services. Our experienced team can work with your architects and engineers to provide budget proposals, product recommendations, and technical support during the design phase.',
  },
  {
    id: '8',
    category: 'services',
    question: 'Do you handle both new construction and renovation projects?',
    answer: 'Yes, we handle both new construction and renovation/retrofit projects. Our team has extensive experience working with existing structures and can navigate the unique challenges of renovation work while maintaining building operations.',
  },

  // Process Questions
  {
    id: '9',
    category: 'process',
    question: 'How long does a typical installation take?',
    answer: 'Project timelines vary based on scope and complexity. A typical storefront installation may take 1-2 weeks, while large curtainwall projects can span several months. We work closely with general contractors to meet tight schedules and have a track record of completing projects on time or ahead of schedule.',
  },
  {
    id: '10',
    category: 'process',
    question: 'How do I get a quote for my project?',
    answer: 'Simply contact us through our website, call us at 817-696-9500, or email us with your project details. We\'ll schedule a consultation to review your plans, discuss requirements, and provide a detailed estimate. For design-build projects, we can provide budget pricing during the design phase.',
  },
  {
    id: '11',
    category: 'process',
    question: 'What safety protocols do you follow?',
    answer: 'Safety is our top priority. DFW Glazing follows strict OSHA guidelines and maintains comprehensive safety programs for all team members. We conduct regular safety meetings, provide ongoing training, and ensure all subcontractors meet our safety standards. Our goal is zero incidents on every project.',
  },
  {
    id: '12',
    category: 'process',
    question: 'Will you work with our general contractor and architect?',
    answer: 'Yes, we regularly collaborate with general contractors, construction managers, and architects. We understand the importance of coordination and communication in commercial construction and pride ourselves on being reliable, responsive subcontractor partners.',
  },

  // Technical Questions
  {
    id: '13',
    category: 'technical',
    question: 'What warranty do you provide?',
    answer: 'We provide comprehensive warranties on both materials and workmanship. Manufacturer warranties typically range from 1-20 years depending on the product. Our installation workmanship is backed by our company warranty. Specific warranty details are provided with each project proposal.',
  },
  {
    id: '14',
    category: 'technical',
    question: 'Do your installations meet building codes and energy requirements?',
    answer: 'Yes, all our installations are code-compliant and meet or exceed local building codes, fire safety requirements, and energy efficiency standards. We stay current with building codes and work with products that meet NFRC ratings and LEED certification requirements when needed.',
  },
  {
    id: '15',
    category: 'technical',
    question: 'Can you help us achieve LEED certification?',
    answer: 'Yes, we have experience with LEED-certified projects and can provide products and documentation to support your sustainability goals. Many of our manufacturer partners offer products with excellent thermal performance and recycled content that contribute to LEED points.',
  },
];

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'technical', label: 'Technical' },
] as const;
