/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo, ServiceItem, ProjectItem, VideoProject } from '../types/index.ts';

export const COMPANY_INFO: CompanyInfo = {
  name: 'KONA INTERIOR',
  tagline: 'Your Dream Space, Our Creativity.',
  experienceYears: 25,
  experienceBadge: '25 Years of Combined Experience',
  address: 'Sonadanga, Khulna, Bangladesh',
  phone: '+880 1926-608733',
  phoneDisplay: '+880 1926-608733',
  whatsappLocal: '01926608733',
  whatsappInternational: '8801926608733',
  facebookUrl: 'https://www.facebook.com/konainteriorbd',
  facebookPageName: 'Kona Interior',
  logoUrl: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_4.08.30_PM_fefe40d0.jpeg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-interior',
    number: '01',
    title: 'RESIDENTIAL INTERIOR',
    tagline: 'Create a home that reflects your lifestyle, personality, and everyday needs.',
    description:
      'We focus on developing residential interior concepts that balance comfort, visual appeal, functionality, and efficient use of space.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern residential interior living room with elegant furniture and warm lighting',
    keyPoints: [
      'Tailored residential space planning',
      'Harmonious color palettes & premium textures',
      'Bespoke cabinetry and built-in joinery',
      'Ambient, task & accent lighting layouts',
    ],
  },
  {
    id: 'commercial-interior',
    number: '02',
    title: 'COMMERCIAL INTERIOR',
    tagline: 'Create a business environment that reflects your brand and supports your operational needs.',
    description:
      'Our approach considers the purpose of the space, its layout, visual identity, and the experience you want to create for customers and visitors.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Corporate commercial interior with modern architectural reception and workspace',
    keyPoints: [
      'Corporate brand identity alignment',
      'High-impact customer reception areas',
      'Ergonomic, flexible workstations',
      'Durable, high-traffic commercial finishes',
    ],
  },
  {
    id: 'living-room-interior',
    number: '03',
    title: 'LIVING ROOM INTERIOR',
    tagline: 'The living room is an important part of your home.',
    description:
      'We aim to create welcoming and visually balanced living spaces through thoughtful layouts, coordinated design elements, and practical planning.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Stylish living room interior with contemporary sofa, coffee table, and layered lighting',
    keyPoints: [
      'Comfortable, balanced seating arrangements',
      'Integrated entertainment & media wall units',
      'Curated drapery, rugs, and decor elements',
      'Seamless transition into dining areas',
    ],
  },
  {
    id: 'bedroom-interior',
    number: '04',
    title: 'BEDROOM INTERIOR',
    tagline: 'Create a bedroom that feels comfortable, personal, and thoughtfully organized.',
    description:
      'Our design approach considers the available space, furniture arrangement, lighting, colors, and your personal preferences.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
    alt: 'Elegant master bedroom with cozy ambient lighting, luxury bed, and custom nightstands',
    keyPoints: [
      'Custom wardrobe & concealed storage systems',
      'Warm ambient and bedside reading illumination',
      'Acoustic consideration for restful environments',
      'Custom upholstered headboards & textured wall treatments',
    ],
  },
  {
    id: 'kitchen-interior',
    number: '05',
    title: 'KITCHEN INTERIOR',
    tagline: 'A well-planned kitchen should combine functionality with a cohesive visual design.',
    description:
      'We focus on layout, storage considerations, usability, and the overall appearance of the kitchen.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern kitchen interior with sleek cabinets, polished countertop, and kitchen island',
    keyPoints: [
      'Optimized ergonomic working triangle',
      'Water-resistant and heat-resistant countertops',
      'Smart modular pull-outs & pantry units',
      'Integrated task lighting above prep counters',
    ],
  },
  {
    id: 'office-interior',
    number: '06',
    title: 'OFFICE INTERIOR',
    tagline: 'Create a workspace that reflects professionalism and supports the needs of your team.',
    description:
      'We consider layout, functionality, comfort, and visual consistency when planning office interiors.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    alt: 'Professional executive office with clean minimalist desks and natural daylight',
    keyPoints: [
      'Executive private suites & boardrooms',
      'Open-plan collaborative zones with acoustic balancing',
      'Concealed cable management & power distribution',
      'Ergonomic seating for extended productivity',
    ],
  },
  {
    id: 'interior-design-and-execution',
    number: '07',
    title: 'INTERIOR DESIGN & EXECUTION',
    tagline: 'Transform an interior concept into a practical, finished space.',
    description:
      'Our approach connects design planning with the execution process, helping maintain a consistent direction from the initial concept through project completion. The exact scope of work will depend on the requirements agreed upon for each project.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Turnkey architectural interior execution showing fine joinery and pristine finished surfaces',
    keyPoints: [
      'Comprehensive concept-to-handover management',
      'Precision on-site supervision and craftsmanship',
      'Rigorous material verification and quality standards',
      'Milestone-based progress tracking',
    ],
  },
  {
    id: 'space-planning',
    number: '08',
    title: 'SPACE PLANNING',
    tagline: 'Make better use of the available space.',
    description:
      'Thoughtful space planning considers movement, furniture placement, functionality, and the relationship between different areas.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Open-concept architectural interior demonstrating clear spatial circulation and zoned living',
    keyPoints: [
      'Fluid human circulation & traffic corridors',
      'Zoning for shared and private functions',
      'Maximization of natural daylight & ventilation',
      'Dimensional balance and scale proportioning',
    ],
  },
];

export const ABOUT_IMAGES = [
  {
    id: 'about-img-1',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    title: 'Refined Residential Architecture',
    caption: 'Thoughtfully planned living spaces with balanced tones and bespoke millwork.',
    alt: 'Complete modern living and dining interior showcasing cohesive craftsmanship',
  },
  {
    id: 'about-img-2',
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    title: 'Curated Contemporary Finishes',
    caption: 'Warm ambient lighting paired with rich textures for everyday functionality.',
    alt: 'Curated contemporary interior lounge with warm wood detailing and ambient lighting',
  },
];

export const HERO_IMAGE = {
  url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85',
  alt: 'High-quality modern interior project showcasing spacious architecture, sofa, and lighting',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Modern Residence Interior',
    category: 'completed',
    type: 'Residential Project',
    location: 'Sonadanga, Khulna',
    description:
      'A complete residential interior balancing comfortable living spaces, coordinated lighting elements, and custom cabinetry.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Completed modern residential interior project with custom joinery',
    tags: ['Completed', 'Residential', 'Living & Dining'],
  },
  {
    id: 'proj-2',
    title: 'Executive Commercial Workspace',
    category: 'completed',
    type: 'Commercial Project',
    location: 'Khulna',
    description:
      'A functional and visually engaging commercial interior designed around corporate operations and client hospitality.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
    alt: 'Completed corporate office interior with glass partitions and modern conference tables',
    tags: ['Completed', 'Commercial', 'Office Workspace'],
  },
  {
    id: 'proj-3',
    title: 'Bespoke Penthouse Suite',
    category: 'completed',
    type: 'Residential Project',
    location: 'Khulna',
    description:
      'An elegant living room and master suite featuring custom woodwork, warm indirect lighting, and spatial zoning.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85',
    alt: 'Completed luxury penthouse interior lounge with curated lighting and furniture',
    tags: ['Completed', 'Residential', 'Living Room & Bedroom'],
  },
  {
    id: 'proj-4',
    title: 'Urban Office Transformation',
    category: 'ongoing',
    type: 'Office Interior',
    location: 'Sonadanga, Khulna',
    stage: 'Interior Execution & Fit-out Stage',
    description:
      'Work in progress showing the execution phase as architectural drawings and customized fit-outs take shape.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
    alt: 'Ongoing office interior fit-out project in progress',
    tags: ['Ongoing', 'Office', 'In Progress'],
  },
  {
    id: 'proj-5',
    title: 'Contemporary Villa Interior',
    category: 'ongoing',
    type: 'Residential Project',
    location: 'Khulna',
    stage: 'Space Planning & Material Finishing',
    description:
      'Multi-room interior development in progress, coordinating custom kitchen cabinetry and master bedroom suites.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Ongoing contemporary villa interior under fit-out',
    tags: ['Ongoing', 'Residential', 'Fit-out Stage'],
  },
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'video-1',
    title: 'Official Project Video Walkthrough 1',
    description:
      'Comprehensive walkthrough exploring spatial zoning, custom ceiling designs, and quality-focused execution.',
    category: 'completed',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    duration: 'Playable Video',
    clientPlaceholderNote: 'Official KONA INTERIOR Project Video 1. Editable video URL placeholder provided.',
  },
  {
    id: 'video-2',
    title: 'Official Project Video Walkthrough 2',
    description:
      'Detailed site inspection and interior execution showcase demonstrating finish quality and material integration.',
    category: 'ongoing',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    duration: 'Playable Video',
    clientPlaceholderNote: 'Official KONA INTERIOR Project Video 2. Editable video URL placeholder provided.',
  },
];

export const DESIGN_APPROACH_STEPS = [
  {
    step: '01',
    title: 'Understanding Your Vision',
    description:
      'We begin by understanding your ideas, preferences, requirements, and expectations for the space.',
  },
  {
    step: '02',
    title: 'Thoughtful Planning',
    description:
      'We consider the purpose of the space, its layout, functionality, and the design direction that best suits your needs.',
  },
  {
    step: '03',
    title: 'Creative Design',
    description:
      'We aim to create balanced interior concepts that combine visual appeal, comfort, and practical use of space.',
  },
  {
    step: '04',
    title: 'Attention to Detail',
    description:
      'We believe thoughtful details contribute to a more refined and cohesive interior.',
  },
  {
    step: '05',
    title: 'Design to Execution',
    description:
      'We work toward translating the agreed design direction into a finished interior, with attention to coordination and quality.',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: '25 Years of Combined Experience',
    description:
      'Experience that informs our approach to interior planning and execution. Our team brings industry knowledge and a practical perspective to interior projects.',
  },
  {
    title: 'Creative & Practical Solutions',
    description:
      'Designs that balance aesthetics with the functional needs of a space, ensuring long-term comfort and daily usability.',
  },
  {
    title: 'Personalized Planning',
    description:
      'An approach shaped around the client’s preferences and project requirements, recognizing that every space is unique.',
  },
  {
    title: 'Attention to Detail',
    description:
      'Careful consideration of the elements that contribute to a cohesive interior, from precise joinery to harmonized lighting.',
  },
  {
    title: 'Quality-Focused Execution',
    description:
      'A commitment to carrying the design vision through the project process with dedicated coordination and craftsmanship.',
  },
];
