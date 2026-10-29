// ------------------------------------------------------------
// All the editable content for the site lives in this file.
// Change text, phone numbers or image links here, save, and the
// page updates. You should not need to touch index.astro for
// everyday content edits.
// ------------------------------------------------------------

// Base folder for the gallery photos (currently linked from the
// client's existing website). See README "Open items before launch".
const U = 'https://ogdenbuilt.ca/wp-content/uploads/2024/09/Ogden-Contracting_';

export const site = {
  name: 'Ogden Contracting Ltd',
  url: 'https://ogdenbuilt.ca',
  title: 'Ogden Contracting Ltd | Custom homes, renovations & tenant improvements, Langley BC',
  description:
    'Family-owned general contractor in Langley since 1994. Custom homes, renovations, additions, kitchens and commercial tenant improvements across Langley, Surrey and the Fraser Valley.',

  // Contact details
  phone: '236-451-0093',
  phoneHref: 'tel:12364510093',
  address: {
    street: '20480 88a Ave',
    city: 'Langley',
    region: 'BC',
    country: 'CA',
  },
  areaServed: ['Langley', 'Surrey', 'Fraser Valley'],
  foundingDate: '1994',

  // Paste your Formspree form URL here, e.g. 'https://formspree.io/f/abcdwxyz'
  // Leave it empty and the form will only show the thank-you message.
  formEndpoint: '',

  logo: 'https://ogdenbuilt.ca/wp-content/uploads/2023/02/Ogden-logo-horz_300w.png',

  utility: {
    tagline: 'Family owned & operated · Building in BC since 1994',
    callLabel: 'Call now: 236-451-0093',
  },

  nav: [
    { href: '#build', label: 'What we build' },
    { href: '#work', label: 'Our work' },
    { href: '#scotti', label: 'Meet Scotti' },
    { href: '#contact', label: 'Get in touch' },
  ],

  hero: {
    title: 'Quality builds that last a lifetime.',
    text: 'Custom homes, renovations and commercial tenant improvements across Langley, Surrey and the Fraser Valley, from a certified BC builder with 30 years in the trade.',
    img: U + 'Resgallery8.jpg',
    imgAlt: 'Craftsman style new build home in Surrey',
  },

  credsLead: 'Ogden Built = Quality Built',
  creds: [
    'Canadian Home Builders’ Association',
    'BC Construction Association',
    'National Home Warranty',
    '2-5-10 Warranty',
    'Renovation Find: Best in Vancouver',
  ],

  build: {
    title: 'A passion for building excellence into every project.',
    text: 'Residential or commercial, new build or renovation, we bring creative solutions and the highest quality craftsmanship.',
  },

  services: [
    {
      t: 'Custom homes',
      k: 'New builds',
      img: U + 'ResGallery2.jpg',
      d: 'We have the expertise and professional team to turn your vision into a reality, from craftsman homes to accessory buildings.',
    },
    {
      t: 'Renovations',
      k: 'Additions · Kitchens',
      img: U + 'ResGallery4.jpg',
      d: 'Renovating your existing home could be the ideal alternative to moving. Full-home renovations, kitchens, additions and driveways.',
    },
    {
      t: 'Tenant improvements',
      k: 'Commercial',
      img: U + 'ResGallery15.jpg',
      d: 'We work with the building owner or tenant to modify commercial spaces, plus commercial renovations and new builds.',
    },
  ],

  filters: ['All', 'New builds', 'Renovations', 'Kitchens', 'Additions'],

  // Gallery: [photo url, caption, category]. Category must match a filter above.
  gallery: [
    [U + 'ResGallery2.jpg', 'Craftsman home, Surrey', 'New builds'],
    [U + 'ResGallery4.jpg', 'New kitchen, Langley', 'Kitchens'],
    [U + 'ResGallery7.jpg', 'Timber frame arch, Langley', 'Additions'],
    [U + 'ResGalley1.jpg', 'Craftsman home, Surrey', 'New builds'],
    [U + 'ResGallery15.jpg', 'Full home renovation, Langley', 'Renovations'],
    [U + 'ResGallery6.jpg', 'Accessory building, Langley', 'New builds'],
    [U + 'ResGallery9.jpg', 'New kitchen, Langley', 'Kitchens'],
    [U + 'ResGallery14.jpg', 'Timber frame arch, Surrey', 'Additions'],
    [U + 'ResGallery17.jpg', 'Full home renovation, Surrey', 'Renovations'],
    [U + 'ResGallery3.jpg', 'Craftsman home, Surrey', 'New builds'],
    [U + 'ResGallery16.jpg', 'New kitchen, Surrey', 'Kitchens'],
    [U + 'ResGallery18.jpg', 'Timber frame arch, Langley', 'Additions'],
  ].map(([src, t, c]) => ({ src, t, c })),

  scotti: {
    eyebrow: 'Meet the contractor',
    title: 'From a Langley framing crew to full-service builder.',
    stats: [
      { n: '1994', l: 'Founded in Langley' },
      { n: '30+', l: 'Years building' },
    ],
    story: [
      'Scotti Ogden is a general contractor and certified builder in British Columbia. In 1994 he launched a small framing business in Langley, quickly earning a reputation for top-quality workmanship, integrity and exceptional customer service.',
      'That business has grown into a full-service general contractor known for setting high industry standards, still family owned and operated.',
      'Scotti also mentors other builders and business owners, sharing free education for builders and homeowners on the Ogden YouTube channel.',
    ],
    youtubeLabel: 'Watch on YouTube',
  },

  contact: {
    title: 'Ready to move from browsing to building?',
    text: 'It starts with a consultation with one of our experts. Fill out the form and we’ll contact you as soon as possible.',
    chips: ['Custom home', 'Renovation', 'Addition', 'Kitchen', 'Commercial'],
    submitLabel: 'Request a consultation',
    thanks: 'Thanks. We’ll be in touch shortly to book your consultation.',
    error: 'Sorry, something went wrong sending your request. Please call us at 236-451-0093.',
  },

  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/ogdencontracting/' },
    { label: 'Facebook', href: 'https://www.facebook.com/Ogdenbuilt' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/scotti-ogden-a81a2b205/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@ogdencontractingltd' },
  ],
  youtube: 'https://www.youtube.com/@ogdencontractingltd',

  credit: { label: 'Website by Backpack Digital Media', href: 'https://backpackdigitalmedia.com' },
};
