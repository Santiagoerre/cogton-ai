import type { Dict } from './es';

export const en: Dict = {
  meta: {
    title: 'Cogton AI — AI Packaging Optimization',
    description:
      'Cogton AI helps 3PL operators and e-commerce companies cut packaging costs and waste with AI-powered optimization.'
  },
  welcome: {
    title: 'Welcome to Cogton AI',
    languageLabel: 'Choose your language',
    cookies:
      'We use essential cookies to remember your language and keep the site working. You can accept all or keep only the essential ones.',
    accept: 'Accept all',
    essential: 'Essential only'
  },
  common: {
    demoRequest: 'Request a demo',
    seePricing: 'See pricing',
    results: 'Results',
    howItWorks: 'How it works',
    learnMore: 'Learn more'
  },
  products: [
    {
      name: 'Cogton Cartonization',
      tagline: 'The right box for every order.'
    },
    {
      name: 'Cogton Catalogue Optimiser',
      tagline: 'The right packaging for every product.'
    }
  ],
  header: {
    home: 'Home',
    product: 'Product',
    pricing: 'Pricing',
    contact: 'Contact',
    bookDemo: 'Book a demo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLabel: 'Change language'
  },
  footer: {
    blurb: 'AI-powered packaging optimization for 3PL operators and e-commerce.',
    product: 'Product',
    company: 'Company',
    rights: 'All rights reserved.'
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    back: 'Back to home'
  },
  home: {
    heroTitle: 'The right packaging,',
    heroHighlight: 'automatically',
    heroBody:
      'The right box for every order and the ideal packaging for every product. Less cardboard, filler and freight, connected to your WMS.',
    windowTitle: 'Cogton AI · Packaging recommendation',
    live: 'Live',
    integratesWith: 'Integrates with',
    productsEyebrow: 'Products',
    productsTitle: 'Two ways to optimize your packaging',
    productsSubtitle:
      'Use them separately or together: one decides on every order, the other redesigns your catalogue.',
    productCards: [
      {
        label: 'On every order',
        description:
          'Calculates the best packing configuration in real time and recommends the box or envelope that ships the least air at the lowest cost.',
        points: [
          '3D view for the packer',
          'Respects fragile, this side up and stacking limits',
          'Shipping cost known before dispatch'
        ]
      },
      {
        label: 'In your catalogue',
        description:
          'Redesigns your packaging from scratch: assigns the optimal format to each SKU and defines the ideal set of box sizes.',
        points: [
          'Paper bag, mailer, padded envelope or box per SKU',
          'Fewer box sizes to buy and store',
          'Foundation for PPWR empty-space compliance'
        ]
      }
    ],
    howEyebrow: 'How it works',
    howTitle: 'Better together',
    howSubtitle:
      'The right catalogue, and the right box from that catalogue on every order.',
    steps: [
      {
        title: '1. We redesign your catalogue',
        description:
          'The Catalogue Optimiser assigns the right packaging to each SKU and defines which box sizes to keep in stock.'
      },
      {
        title: '2. We pick the box for each order',
        description:
          'Cartonization calculates in real time the best option from that catalogue for every order.'
      },
      {
        title: '3. You save on every shipment',
        description:
          'Less air, less material, and lower freight and dimensional-weight costs.'
      }
    ],
    whyEyebrow: 'Why Cogton',
    whyTitle: 'Built for 3PL operators and e-commerce',
    reasons: [
      {
        title: 'Based on your real orders',
        description:
          'We work from your order history and product catalogue, not from assumptions or habit.'
      },
      {
        title: 'With or without integration',
        description:
          'Connects to any WMS or ERP via API, or works with CSV files from day one.'
      },
      {
        title: 'PPWR-ready',
        description:
          'Less empty space and less material, laying the groundwork for compliance with European packaging regulation.'
      }
    ],
    ctaTitle: 'Ready to optimize your packaging?',
    ctaSubtitle: 'We show you how much you could save with your real orders.'
  },
  contact: {
    title: "Let's talk",
    subtitle:
      'Tell us about your operation and we will show you how much you could save on packaging with Cogton AI.',
    email: 'Email',
    bookDemo: 'Book a demo',
    bookSlot: 'Reserve a time slot',
    linkedin: 'LinkedIn',
    follow: 'Follow us',
    formTitle: 'Prefer that we reach out to you?'
  },
  quoteForm: {
    title: 'Tell us about your operation',
    firstName: 'First name',
    firstNamePlaceholder: 'John',
    lastName: 'Last name',
    lastNamePlaceholder: 'Smith',
    email: 'Work email',
    emailPlaceholder: 'john@yourcompany.com',
    company: 'Company',
    companyPlaceholder: 'Your company',
    goalsLegend: 'What do you want to optimize?',
    goals: ['Packaging type', 'Box size', 'Freight cost', 'Material and filler'],
    message: 'Anything else you would like to tell us?',
    messagePlaceholder:
      'We ship 20,000 orders per month with 6 box sizes. We use SAP EWM.',
    consent: 'I agree that Cogton AI stores and processes my data to contact me.',
    errorPrefix: 'We could not send your request. Please try again or email us at',
    sending: 'Sending…',
    submit: 'Send request',
    successTitle: 'Done! We received your request',
    successBody:
      'We will email you soon at the address you left to schedule the call.'
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'ROI from the first shipment',
    introBefore: 'You pay cents per order and save up to 18% on freight. From',
    introPrice: '$80 / month',
    introAfter: 'to optimize your packaging with AI.',
    highlights: [
      'No need to replace your WMS',
      'Business case built on your data',
      'Pilot before scaling'
    ],
    factorsTitle: 'How your price is set',
    factorsIntro: 'Four things define your price.',
    factors: [
      {
        title: 'Volume.',
        description:
          'How many shipments go through Cogton AI. More volume, lower cost per shipment.'
      },
      { title: 'Warehouses.', description: 'How many sites you use Cogton AI in.' },
      {
        title: 'Packaging catalogue.',
        description: 'Which boxes, mailer bags and padded envelopes you use today.'
      },
      {
        title: 'Integration.',
        description:
          'How we connect to your systems: API, your WMS / ERP or file upload.'
      }
    ],
    calcTitle: 'How much could you save?',
    calcSubtitle: 'Move the volume slider and enter your average freight cost.',
    processEyebrow: 'Process',
    processTitle: 'How we get started',
    processSubtitle:
      'From the first call to the pilot in your warehouse, in three steps.',
    steps: [
      {
        title: 'Call',
        description:
          'A Cogton AI demo with your products and a review of the data we need to simulate your business case.'
      },
      {
        title: 'Business case',
        description:
          'We simulate the savings on your real orders and come back with the numbers and the price.'
      },
      {
        title: 'Pilot',
        description:
          'We measure the savings in your warehouse, against your current operation, before rolling out to the rest.'
      }
    ],
    faqTitle: 'Questions?',
    faqs: [
      {
        question: "Doesn't my WMS already do this?",
        answer:
          "Most WMS assign packaging with fixed rules or leave it to the operator's judgment. Cogton AI analyzes each product's attributes — fragility, flexibility, weight and dimensions — and picks the right packaging type and size for every order."
      },
      {
        question: 'What changes in my WMS and in the warehouse?',
        answer:
          'Your WMS stays the same: it just receives the packaging recommendation for each order. In the warehouse, the packing team knows which box, mailer bag or envelope to use, without guessing.'
      },
      {
        question: 'What are the integration options?',
        answer:
          'We connect via API, directly to your WMS / ERP, or through file upload. We define it together on the first call based on your systems.'
      },
      {
        question: 'What data do you need to get started?',
        answer:
          'Your product catalogue (dimensions and weight), the packaging you use today and an order history. With that we build the simulation.'
      },
      {
        question: 'How are the savings calculated?',
        answer:
          'We compare the packaging you use today with what Cogton AI recommends for the same orders: material, cubic volume and freight cost.'
      },
      {
        question: 'Can I try it before signing up?',
        answer:
          'Yes. We start with a business case on your data and a pilot in your warehouse, so you see the savings before rolling it out.'
      }
    ],
    ctaTitle: "Let's calculate your real savings",
    ctaSubtitle: 'We build the business case with your orders.',
    ctaLabel: 'Book a call'
  },
  calculator: {
    numberLocale: 'en-US',
    orders: 'Shipments per month',
    avgFreight: 'Average freight cost per shipment',
    estimated: 'Estimated freight savings',
    perMonth: ' / month',
    perYear: 'per year',
    disclaimer:
      'Estimate based on an average {pct}% reduction in freight cost. Actual savings depend on your catalogue and carrier rates; we calculate them with your data in the business case.'
  },
  features: {
    title: 'Everything you need to optimize your packaging',
    subtitle:
      'From product measurement to the final savings report, Cogton AI covers the entire packaging decision process.',
    items: [
      {
        title: 'Product attribute analysis',
        description:
          "Cogton AI goes beyond dimensions: using AI it identifies each SKU's fragility, flexibility and weight (via camera, scanner or integration with your catalogue) to understand what type of packaging it needs."
      },
      {
        title: 'Packaging-type recommendation engine',
        description:
          'The algorithm matches each product with the right type — box, mailer bag or padded envelope — based on its attributes, not just its size, in seconds and for every order.'
      },
      {
        title: 'Configurable packaging catalogue',
        description:
          'Load your own catalogue of boxes, envelopes and filler materials, with costs and availability per warehouse, and let the system choose among your real options.'
      },
      {
        title: 'Freight cost optimization',
        description:
          'By reducing the cubic volume of every shipment, your dimensional freight rates drop automatically — without renegotiating with your carrier.'
      },
      {
        title: 'Savings reports and analytics',
        description:
          'Real-time dashboards showing savings in material, volume and freight by customer, warehouse or period, to justify the ROI to your team.'
      },
      {
        title: 'Packaging footprint reduction',
        description:
          'Less cardboard, less filler and fewer replenishment trips: sustainability metrics ready to report to your end customers.'
      }
    ],
    ctaTitle: 'Want to see Cogton AI with your own data?',
    ctaBody:
      'Book a 20-minute demo and we will show you the projected savings for your current shipping volume.'
  },
  carton: {
    metaTitle: 'Cogton Cartonization — The right box for every order',
    title: 'The right box for every order.',
    intro:
      'Cogton Cartonization calculates the best packing configuration for every order in real time. It recommends the box or envelope that ships the least air at the lowest cost, and shows the packer a clear 3D view of how the products fit.',
    stepsTitle: 'From order data to the ideal box',
    steps: [
      {
        title: 'Your data',
        description:
          'Product dimensions, handling rules and the boxes available at the packing station.'
      },
      {
        title: 'Real-time calculation',
        description:
          'For each order, Cogton calculates the best configuration and recommends the box or envelope that ships the least air at the lowest cost.'
      },
      {
        title: '3D view for the packer',
        description:
          'The packing team sees a clear 3D view of how the products fit, without guessing.'
      }
    ],
    constraintsEyebrow: 'Real constraints',
    constraintsTitle: 'Respects how your products are handled',
    constraintsSubtitle:
      'The engine takes into account the rules your team applies every day.',
    constraints: [
      'This side up',
      'Fragile',
      'Crush and stacking limits',
      'Long items placed diagonally',
      'Flat envelopes for thin products'
    ],
    goalsTitle: 'Choose what to optimize',
    goals: [
      {
        title: 'Lowest shipping cost',
        description:
          'Minimizes freight and dimensional-weight charges on every order.'
      },
      {
        title: 'Fewer boxes',
        description: 'Consolidates the order into the fewest parcels possible.'
      },
      {
        title: 'Higher fill rate',
        description: "Makes the most of every box's volume and reduces filler."
      }
    ],
    integrationEyebrow: 'Integration',
    integrationTitle: 'With or without integration',
    integrationSubtitle:
      'Start however you prefer and add integration whenever you want.',
    apiTitle: 'API with your WMS or ERP',
    apiBody:
      'Connects to any WMS or ERP via API and returns the recommendation for each order in real time.',
    csvTitle: 'CSV files',
    csvBody:
      'Works from CSV files, with no integration at all, so you can start from day one.',
    resultsTitle: 'What you gain on every order',
    results: [
      'Less freight and lower dimensional-weight charges',
      'Less packaging material',
      'Faster packing',
      'Shipping cost known before dispatch'
    ],
    ctaTitle: 'Try it with your orders',
    ctaSubtitle: 'We show you which box Cogton would choose for your real orders.',
    ctaLabel: 'Request a demo'
  },
  catalogue: {
    metaTitle:
      'Cogton Catalogue Optimiser — The right packaging for every product',
    title:
      'The right packaging catalogue, and the right packaging for every product.',
    intro:
      "The Catalogue Optimiser redesigns your company's packaging from scratch, on two levels: which packaging each product uses and which box sizes you should keep in stock.",
    levelsEyebrow: 'Two levels',
    levelsTitle: 'From the product to the full catalogue',
    levels: [
      {
        label: 'Level 1',
        title: 'SKUs',
        description:
          'Each product gets its optimal packaging type based on its dimensions, weight, fragility and value.',
        points: [
          'Paper bag, mailer bag, padded envelope or box',
          'Detects products that ship in a box today but could travel safely in a lighter, cheaper format'
        ]
      },
      {
        label: 'Level 2',
        title: 'Boxes',
        description:
          'We analyze your order history to find the ideal set of box sizes to keep in stock.',
        points: [
          'How many sizes you need and which ones',
          'How much each change saves in material, freight and empty space'
        ]
      }
    ],
    deliverableEyebrow: 'Deliverable',
    deliverableTitle: 'What you receive',
    deliverableBody:
      'A packaging catalogue ready to implement, with the savings calculated on your own orders.',
    deliverables: [
      'Recommended packaging catalogue',
      'Packaging assignment per SKU',
      'Quantified savings case',
      'Foundation for PPWR empty-space compliance'
    ],
    resultsTitle: 'A catalogue that saves on every shipment',
    results: [
      'Fewer box sizes to buy and store',
      'Cheaper packaging per shipment',
      'Less filler',
      'A catalogue based on real orders, not habit'
    ],
    ctaTitle: "Let's redesign your catalogue",
    ctaSubtitle: 'We analyze your orders and show you how much you can save.',
    ctaLabel: 'Request an analysis'
  },
  visuals: {
    order: 'Order #10482',
    items: '4 items',
    cartonAlt: '3D view of four products arranged inside a box',
    boxChip: 'Box M · 30 × 24 × 18 cm',
    fillChip: '86% fill rate',
    thisSideUp: 'This side up',
    catalogueTitle: 'Recommended catalogue',
    catalogueSub: 'Assignment by SKU',
    colProduct: 'Product',
    colToday: 'Today',
    colRecommended: 'Recommended',
    rows: [
      { sku: 'Cotton T-shirt', today: 'Box S', recommended: 'Mailer bag', changed: true },
      { sku: 'Ceramic mug', today: 'Box S', recommended: 'Box S', changed: false },
      { sku: 'Paperback book', today: 'Box M', recommended: 'Padded envelope', changed: true },
      { sku: 'Sock pack', today: 'Box S', recommended: 'Paper bag', changed: true },
      { sku: 'Table lamp', today: 'Box XL', recommended: 'Box L', changed: true }
    ],
    flow: {
      alt: 'Your WMS sends each product to Cogton AI, which analyzes dimensions, weight, fragility and flexibility, recommends the right packaging and returns the savings per shipment.',
      yourOperation: 'YOUR OPERATION',
      yourWms: 'Your WMS',
      analysis: 'AI product analysis',
      attributes: ['Dimensions', 'Weight', 'Fragility', 'Flexibility'],
      recommended: 'RECOMMENDED PACKAGING',
      box: 'Box',
      mailer: 'Mailer bag',
      padded: 'Padded envelope',
      savingsTitle: 'Savings on every shipment',
      volume: 'volume',
      freight: 'freight',
      boxPerOrder: 'box per order'
    }
  }
};
