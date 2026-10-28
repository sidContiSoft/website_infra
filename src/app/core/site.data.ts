export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'clock'
  | 'check'
  | 'shield'
  | 'layers'
  | 'building'
  | 'factory'
  | 'warehouse'
  | 'panels'
  | 'snowflake'
  | 'pipe'
  | 'flame'
  | 'tool'
  | 'gauge'
  | 'fire'
  | 'bolt'
  | 'ruler'
  | 'cube'
  | 'gear'
  | 'crane'
  | 'spark'
  | 'target'
  | 'users'
  | 'file'
  | 'upload'
  | 'message'
  | 'menu'
  | 'close'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right';

export interface NavLink {
  label: string;
  path: string;
}

export interface Office {
  id: string;
  label: string;
  name: string;
  lines: string[];
  mapQuery: string;
}

export interface Service {
  id: string;
  title: string;
  short: string;
  summary: string;
  icon: IconName;
  bullets: string[];
  tag: string;
}

export interface FrameType {
  id: string;
  name: string;
  description: string;
  span: string;
  bestFor: string;
}

export interface PanelSystem {
  id: string;
  name: string;
  thickness: string;
  core: string;
  application: string;
  finish: string;
  icon: IconName;
}

export interface Accessory {
  name: string;
  description: string;
  icon: IconName;
  diagram?: string;
}

export interface Project {
  id: string;
  title: string;
  sector: string;
  category: ProjectCategory;
  location: string;
  area: string;
  scope: string[];
  image: string;
  featured: boolean;
}

export type ProjectCategory =
  | 'Manufacturing & Warehousing'
  | 'Commercial & Retail'
  | 'Food & Beverage'
  | 'Chemical & Pharma'
  | 'Agriculture & Feed';

export const COMPANY = {
  name: 'Supreme Electromech Power & Infra',
  shortName: 'Supreme Electromech',
  tagline: 'Precision Tool Engineering Excellence & Infrastructure Projects',
  descriptor: 'Total Solutions Company',
  slogan: 'Delivering Reliable, Innovative & Sustainable Infrastructure Solutions',
  phones: [
    { label: '+91 99991 16118', href: 'tel:+919999116118' },
    { label: '0129-462862', href: 'tel:+91129462862' },
  ],
  emails: [
    { label: 'supremelectropower@gmail.com', href: 'mailto:supremelectropower@gmail.com' },
    { label: 'info@supremeinfraprojact.com', href: 'mailto:info@supremeinfraprojact.com' },
    { label: 'sales@supremeinfraproject.com', href: 'mailto:sales@supremeinfraproject.com' },
  ],
  website: {
    label: 'www.supremeinfraprojects.com',
    href: 'https://www.supremeinfraprojects.com',
  },
  whatsapp: 'https://wa.me/919999116118',
  hours: 'Mon – Sat · 09:30 to 18:30 IST',
};

export const OFFICES: Office[] = [
  {
    id: 'faridabad',
    label: 'Head Office & Works 1',
    name: 'Faridabad, Haryana',
    lines: [
      'Plot No. 2043, Dua Compound, E-Block,',
      'Sanjay Colony, Sector-23,',
      'Faridabad – 121005, Haryana, India',
    ],
    mapQuery: 'Plot No 2043 Dua Compound E Block Sanjay Colony Sector 23 Faridabad 121005',
  },
  {
    id: 'delhi',
    label: 'Works 2',
    name: 'Anand Parbat, New Delhi',
    lines: [
      'M 30/1, Street No. 8,',
      'Anand Parbat Industrial Area,',
      'New Rohtak Road, New Delhi, India',
    ],
    mapQuery: 'M 30/1 Street No 8 Anand Parbat Industrial Area New Rohtak Road New Delhi',
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Technical Capabilities', path: '/technical' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    image: 'assets/img/hero-1.webp',
    kicker: 'Structural steel · PEB',
    title: 'Built on precision. Engineered to perform.',
    caption: 'Primary framing and secondary members erected as one coordinated system.',
    alt: 'Pre-engineered steel building frame under erection',
  },
  {
    image: 'assets/img/hero-2.webp',
    kicker: 'Industrial envelopes',
    title: 'Buildings that work as hard as your operations.',
    caption: 'Warehouse and manufacturing envelopes with insulated roof and wall systems.',
    alt: 'Industrial warehouse clad with metal wall and roof panels',
  },
  {
    image: 'assets/img/hero-3.webp',
    kicker: 'Roofing & cladding',
    title: 'Every panel aligned. Every detail sealed.',
    caption: 'Standing seam, high-rib and insulated panel systems with complete accessories.',
    alt: 'Metal cladding and entrance detail of an industrial building',
  },
];

export const STATS = [
  { value: '60 m', label: 'Clear span capability', detail: 'Tapered-column rigid frames' },
  { value: '30–150 mm', label: 'Insulated panel range', detail: 'Roof, wall & cold-store cores' },
  { value: '05', label: 'Design codes applied', detail: 'AISC · MBMA · AWS · ASCE · IS' },
  { value: '02', label: 'Works locations', detail: 'Faridabad & New Delhi' },
];

export const SERVICES: Service[] = [
  {
    id: 'peb',
    title: 'Pre-Engineered Steel Buildings',
    short: 'PEB & prefabricated structures',
    summary:
      'Design, detailing, fabrication and erection of pre-engineered steel buildings as a single accountable package — from soil data and loads to the last fastener.',
    icon: 'warehouse',
    bullets: [
      'Clear-span, multi-span, multi-gable and lean-to frames',
      'Crane-rated and mezzanine-integrated structural systems',
      'Factory-primed primary and secondary members',
      'Roof, wall and accessory packages delivered together',
    ],
    tag: 'Turnkey PEB',
  },
  {
    id: 'civil',
    title: 'Civil & Prefab Building Solutions',
    short: 'Civil works & prefabricated envelopes',
    summary:
      'Foundations, civil works and prefabricated building envelopes coordinated under one programme so structure, services and finishes do not wait on each other.',
    icon: 'building',
    bullets: [
      'Foundation and anchor-bolt layouts coordinated with steel design',
      'RCC, masonry and site development works',
      'Prefabricated offices, site cabins and utility blocks',
      'Drainage, plinths, flooring and allied civil scope',
    ],
    tag: 'Civil + Prefab',
  },
  {
    id: 'roofing',
    title: 'Metal Roofing & Cladding Systems',
    short: 'Standing seam, high-rib & deck sheets',
    summary:
      'Specialised metal roofing and cladding systems engineered for weather tightness, thermal movement and long service life across industrial envelopes.',
    icon: 'panels',
    bullets: [
      'Standing seam roof sheets for concealed-fix weatherproofing',
      'High-rib wall and roof profiles with deep sections',
      'MS deck sheets for positive concrete slab reinforcement',
      'Ridge, eave, valley and penetration flashings',
    ],
    tag: 'Envelope',
  },
  {
    id: 'insulation',
    title: 'Insulated Panels & Thermal Insulation',
    short: 'PUF, PIR, EPS & rockwool systems',
    summary:
      'Insulated panels and thermal solutions that hold internal temperatures, cut energy demand and give clean, hygienic internal surfaces.',
    icon: 'snowflake',
    bullets: [
      'Insulated roof panels from 30 mm to 100 mm',
      'Insulated wall panels from 40 mm to 150 mm',
      'PUF, PIR, EPS and rockwool core options',
      'Under-deck insulation, liners and vapour barriers',
    ],
    tag: 'Thermal',
  },
  {
    id: 'utilities',
    title: 'Utility Pipe Lines',
    short: 'Process, utility & service lines',
    summary:
      'Fabrication and laying of utility and process pipelines with supports, testing and commissioning aligned to plant shutdown schedules.',
    icon: 'pipe',
    bullets: [
      'Process water, compressed air and utility lines',
      'Fire water mains and hydrant pipework',
      'Pipe supports, hangers and structural brackets',
      'Hydro testing, flushing and commissioning support',
    ],
    tag: 'Utilities',
  },
  {
    id: 'cold-storage',
    title: 'Cold Storages & Refractories',
    short: 'Temperature-controlled rooms & linings',
    summary:
      'Turnkey cold rooms and refractory linings for food, pharma and process plants — designed for thermal performance and hygienic operation.',
    icon: 'flame',
    bullets: [
      'Cold rooms and freezer rooms with PUF panels',
      'Insulated doors, coving and vapour sealing',
      'Refrigeration scope coordinated with OEMs',
      'Refractory brickwork, castables and insulation linings',
    ],
    tag: 'Cold chain',
  },
  {
    id: 'tool-die',
    title: 'Tool, Die, Gauges & Fixtures',
    short: 'Precision tool engineering',
    summary:
      'The precision engineering core of our business: press tools, jigs, fixtures and gauges manufactured and inspected to drawing, tolerance and repeatability.',
    icon: 'gauge',
    bullets: [
      'Press tools, dies and mould bases',
      'Jigs, fixtures and machining aids',
      'Gauges, checking fixtures and inspection equipment',
      'CNC machining with dimensional inspection reports',
    ],
    tag: 'Precision',
  },
  {
    id: 'fire-eht',
    title: 'Fire Protection Systems & EHT',
    short: 'Life safety & high-tension works',
    summary:
      'Fire protection and EHT infrastructure for industrial facilities — engineered, installed and commissioned with documentation for statutory compliance.',
    icon: 'fire',
    bullets: [
      'Hydrant, sprinkler and fire alarm systems',
      'Fire pumps, tanks and dedicated water storage',
      'EHT substation structures, earthing and cabling support',
      'Testing, commissioning and handover documentation',
    ],
    tag: 'Life safety',
  },
];

export const FRAME_TYPES: FrameType[] = [
  {
    id: 'clear-span',
    name: 'Clear Span Tapered Column',
    description:
      'A single clear bay between columns with no internal supports — the default choice for warehouses, hangars and large unobstructed operations.',
    span: 'Up to 60 m',
    bestFor: 'Warehousing, logistics, hangars',
  },
  {
    id: 'multi-span',
    name: 'Multi-Span I · II · III',
    description:
      'Intermediate columns divide wide buildings into efficient bays, reducing steel weight and roof purlin spans for large floor plates.',
    span: 'Any width, modular bays',
    bestFor: 'Large plants, distribution centres',
  },
  {
    id: 'multi-gable',
    name: 'Multi-Gable',
    description:
      'Repeated gable frames create multiple ridge lines for very wide buildings while maintaining controlled roof drainage.',
    span: 'Wide footprints',
    bestFor: 'Manufacturing halls, sheds',
  },
  {
    id: 'mono-slope',
    name: 'Mono Slope',
    description:
      'A single-pitch frame that follows site levels or drainage direction, ideal for lean-to extensions and compact industrial units.',
    span: 'Typically 6–30 m',
    bestFor: 'Extensions, compact units',
  },
  {
    id: 'lean-to',
    name: 'Lean-To',
    description:
      'A secondary frame attached to an existing structure to add covered area without a new independent frame line.',
    span: 'Typically 6–15 m',
    bestFor: 'Canopies, storage extensions',
  },
  {
    id: 'crane-mezzanine',
    name: 'Crane & Mezzanine Integrated',
    description:
      'Frames designed with crane runway beams, brackets and mezzanine joists so material handling and intermediate floors are part of the structure, not an afterthought.',
    span: 'Project specific',
    bestFor: 'EOT cranes, plant platforms',
  },
];

export const PANEL_SYSTEMS: PanelSystem[] = [
  {
    id: 'roof-panel',
    name: 'Insulated Roof Panels',
    thickness: '30 – 100 mm',
    core: 'PUF / PIR / EPS / Rockwool',
    application: 'Roofs of PEBs, cold stores and clean areas',
    finish: 'Pre-painted Galvalume / Galvanised steel',
    icon: 'panels',
  },
  {
    id: 'wall-panel',
    name: 'Insulated Wall Panels',
    thickness: '40 – 150 mm',
    core: 'PUF / PIR / EPS / Rockwool',
    application: 'Walls, partitions and cold-room envelopes',
    finish: 'Pre-painted steel, micro-rib / flat profiles',
    icon: 'layers',
  },
  {
    id: 'standing-seam',
    name: 'Standing Seam Roofing',
    thickness: '0.47 – 0.60 mm base steel',
    core: 'Concealed-fix, no through-fasteners',
    application: 'Low-slope roofs requiring weather integrity',
    finish: 'Colour-coated Galvalume',
    icon: 'spark',
  },
  {
    id: 'high-rib',
    name: 'High Rib Sheets',
    thickness: '0.47 – 0.60 mm base steel',
    core: 'Deep-rib profile for long spans',
    application: 'Roof and wall cladding, fascias',
    finish: 'Colour-coated Galvalume / Galvanised',
    icon: 'ruler',
  },
  {
    id: 'deck-sheet',
    name: 'MS Deck Sheets',
    thickness: '0.90 – 1.20 mm',
    core: 'Positive reinforcement for concrete slabs',
    application: 'Mezzanine and composite floor decks',
    finish: 'Galvanised steel',
    icon: 'cube',
  },
];

export const ACCESSORIES: Accessory[] = [
  {
    name: 'Ridge Vents',
    description: 'Continuous ridge ventilation with bird screens and weather baffles.',
    icon: 'spark',
    diagram: 'assets/img/dw-ridge.webp',
  },
  {
    name: 'Turbo Vents',
    description: 'Wind-driven roof ventilators for hot air extraction without power.',
    icon: 'bolt',
    diagram: 'assets/img/dw-turbo.webp',
  },
  {
    name: 'Skylights',
    description: 'Translucent roof panels for daylighting, aligned with purlin spacing.',
    icon: 'layers',
    diagram: 'assets/img/dw-skylight.webp',
  },
  {
    name: 'Industrial Louvers',
    description: 'Fixed and adjustable louvers for plant rooms and ventilation walls.',
    icon: 'panels',
  },
  {
    name: 'Wall Lights',
    description: 'Profiled wall-light sheets that bring daylight into the envelope.',
    icon: 'spark',
  },
  {
    name: 'Cage Ladders',
    description: 'Safe roof access with cages, rest platforms and landing gates.',
    icon: 'shield',
  },
  {
    name: 'Eave Gutters',
    description: 'Continuous eave collection with matching end caps and outlets.',
    icon: 'pipe',
  },
  {
    name: 'Downspouts',
    description: 'Sized rainwater downpipes with brackets, shoes and connectors.',
    icon: 'pipe',
  },
];

export const ENGINEERING_TOOLS = [
  {
    name: 'MBS',
    role: 'PEB frame design & optimisation',
    description:
      'Member sizing, tapered frame optimisation and bill-of-material generation for pre-engineered building systems.',
  },
  {
    name: 'STAAD.Pro',
    role: 'Structural analysis',
    description:
      'Load combinations, wind and seismic analysis, deflection checks and connection force extraction to the governing code.',
  },
  {
    name: 'TEKLA Structures',
    role: '3D detailing & shop drawings',
    description:
      'Clash-checked 3D models, fabrication drawings, erection drawings and accurate material take-offs before the first cut.',
  },
];

export const DESIGN_CODES = [
  { code: 'AISC', scope: 'Structural steel design & connections' },
  { code: 'MBMA', scope: 'Metal building systems design practice' },
  { code: 'AWS', scope: 'Welding and fabrication quality' },
  { code: 'ASCE', scope: 'Wind and live load provisions' },
  { code: 'IS', scope: 'Indian standards for steel, loads and foundations' },
];

export const QUALITY_STAGES = [
  {
    step: '01',
    title: 'Design review',
    description:
      'Loads, geometry and connection philosophy reviewed before detailing begins — no assumptions carried into fabrication.',
  },
  {
    step: '02',
    title: 'Drawing control',
    description:
      'Shop drawings issued as controlled revisions, with clash checks against civil, services and equipment interfaces.',
  },
  {
    step: '03',
    title: 'Fabrication inspection',
    description:
      'Material traceability, dimensional checks and weld inspection at defined hold points in the works.',
  },
  {
    step: '04',
    title: 'Erection & handover',
    description:
      'Erection sequence, alignment and torque checks, closure of punch points and documented handover.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consult',
    description: 'We understand the operation, site and constraints before proposing a structure.',
  },
  {
    step: '02',
    title: 'Engineer',
    description: 'Loads, framing and detailing are resolved in 3D and signed off with drawings.',
  },
  {
    step: '03',
    title: 'Fabricate',
    description: 'Members, panels and accessories are produced under controlled inspection.',
  },
  {
    step: '04',
    title: 'Erect',
    description: 'Trained erection crews deliver alignment, sealing and finishing on programme.',
  },
  {
    step: '05',
    title: 'Handover',
    description: 'Documentation, punch closure and after-sales support complete the package.',
  },
];

export const DIFFERENTIATORS: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'Engineered, not assembled',
    description:
      'Every building starts with analysis and detailing in MBS, STAAD.Pro and TEKLA — not with a stock shed catalogue.',
    icon: 'gear',
  },
  {
    title: 'One accountable partner',
    description:
      'Structure, roofing, insulation, services and civil interfaces sit inside a single delivery scope and schedule.',
    icon: 'shield',
  },
  {
    title: 'Precision from our toolroom',
    description:
      'Our tool, die and gauge discipline brings dimensional control to every fabricated component we supply.',
    icon: 'gauge',
  },
  {
    title: 'Built for Indian sites',
    description:
      'Designs account for wind, monsoon, dust and site logistics with materials suited to local conditions.',
    icon: 'target',
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Manufacturing & Warehousing',
  'Commercial & Retail',
  'Food & Beverage',
  'Chemical & Pharma',
  'Agriculture & Feed',
];

export const PROJECTS: Project[] = [
  {
    id: 'warehouse-complex',
    title: 'Pre-Engineered Warehouse Complex',
    sector: 'Warehousing',
    category: 'Manufacturing & Warehousing',
    location: 'Faridabad, Haryana',
    area: '42,000 sq. ft.',
    scope: ['Multi-span PEB frames', 'Insulated roof & wall panels', 'Turbo vents & skylights'],
    image: 'assets/img/project-01.webp',
    featured: true,
  },
  {
    id: 'production-plant',
    title: 'Multi-Span Production Plant',
    sector: 'Manufacturing',
    category: 'Manufacturing & Warehousing',
    location: 'NCR, Haryana',
    area: '68,000 sq. ft.',
    scope: ['Clear-span production bays', 'EOT crane runway beams', 'Mezzanine office block'],
    image: 'assets/img/project-07.webp',
    featured: true,
  },
  {
    id: 'retail-showroom',
    title: 'Retail Showroom & Supermarket',
    sector: 'Commercial',
    category: 'Commercial & Retail',
    location: 'New Delhi',
    area: '18,500 sq. ft.',
    scope: ['Architectural fascia & glazing', 'High-rib wall cladding', 'Insulated roof system'],
    image: 'assets/img/project-06.webp',
    featured: true,
  },
  {
    id: 'food-processing',
    title: 'Food Processing & Packing Unit',
    sector: 'Food & beverage',
    category: 'Food & Beverage',
    location: 'Sonipat, Haryana',
    area: '35,000 sq. ft.',
    scope: ['Hygienic insulated panels', 'Cold-room envelope', 'Utility pipe works'],
    image: 'assets/img/project-08.webp',
    featured: true,
  },
  {
    id: 'pharma-block',
    title: 'Pharma Formulation Block',
    sector: 'Pharmaceutical',
    category: 'Chemical & Pharma',
    location: 'Faridabad, Haryana',
    area: '26,000 sq. ft.',
    scope: ['Clean-area wall systems', 'Deck-sheet mezzanine', 'Fire protection network'],
    image: 'assets/img/project-05.webp',
    featured: true,
  },
  {
    id: 'feed-mill',
    title: 'Feed Mill & Storage Structure',
    sector: 'Agriculture',
    category: 'Agriculture & Feed',
    location: 'Haryana',
    area: '22,000 sq. ft.',
    scope: ['Heavy-duty cladding', 'Mono-slope utility sheds', 'Structural platforms'],
    image: 'assets/img/project-03.webp',
    featured: true,
  },
  {
    id: 'cold-storage',
    title: 'Cold Storage & Distribution Hub',
    sector: 'Cold chain',
    category: 'Food & Beverage',
    location: 'Delhi NCR',
    area: '30,000 sq. ft.',
    scope: ['PUF insulated envelope', 'Freezer & chiller rooms', 'Insulated doors'],
    image: 'assets/img/project-02.webp',
    featured: false,
  },
  {
    id: 'industrial-shed',
    title: 'Crane-Rated Industrial Shed',
    sector: 'Heavy engineering',
    category: 'Manufacturing & Warehousing',
    location: 'Faridabad, Haryana',
    area: '24,000 sq. ft.',
    scope: ['Crane brackets & runway beams', 'Heavy purlin framing', 'Standing seam roofing'],
    image: 'assets/img/project-10.webp',
    featured: false,
  },
  {
    id: 'chemical-plant',
    title: 'Chemical Process Plant',
    sector: 'Chemicals',
    category: 'Chemical & Pharma',
    location: 'Gujarat',
    area: '48,000 sq. ft.',
    scope: ['Corrosion-resistant cladding', 'Pipe racks & supports', 'Fire water mains'],
    image: 'assets/img/project-04.webp',
    featured: false,
  },
  {
    id: 'trade-centre',
    title: 'Trade Centre & Display Facility',
    sector: 'Commercial',
    category: 'Commercial & Retail',
    location: 'New Delhi',
    area: '16,000 sq. ft.',
    scope: ['Long-span showroom frame', 'Glazed shopfront interface', 'Architectural louvers'],
    image: 'assets/img/project-09.webp',
    featured: false,
  },
];

export const SECTORS = [
  'Manufacturing plants',
  'Warehouses & logistics',
  'Commercial showrooms',
  'Supermarkets',
  'Food & beverage units',
  'Pharmaceutical plants',
  'Polymer & chemical plants',
  'Feed mills & agriculture',
  'Cold storage facilities',
  'Exhibition halls',
];

export const SERVICE_FORM_OPTIONS = [
  'Pre-Engineered Steel Building (PEB)',
  'Civil & Prefabricated Building',
  'Metal Roofing & Cladding',
  'Insulated Panels & Thermal Insulation',
  'Utility Pipe Lines',
  'Cold Storage / Refractory',
  'Tool, Die, Gauges & Fixtures',
  'Fire Protection / EHT',
  'Other / Multiple scopes',
];

export const FAQS = [
  {
    q: 'What information do you need to quote a PEB?',
    a: 'A site plan or layout with overall dimensions, the intended use, eave height, any crane or mezzanine requirement, and the location. If you have drawings, attach them to the enquiry — we will come back with framing options and a budget.',
  },
  {
    q: 'How long does a typical building take?',
    a: 'Detailing usually runs 2–4 weeks after design freeze, fabrication 4–8 weeks depending on tonnage and panel scope, and erection follows site readiness. We confirm a programme after reviewing drawings and site access.',
  },
  {
    q: 'Do you handle civil, panels and services together?',
    a: 'Yes. Foundations, structure, roofing, insulated panels, utility lines and fire protection can be delivered as coordinated scopes so interfaces are not left between vendors.',
  },
  {
    q: 'Can you work outside Delhi NCR?',
    a: 'We supply and execute across India. For projects away from our works, erection supervision and logistics are planned into the offer.',
  },
];
