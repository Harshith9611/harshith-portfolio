import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://your-domain.vercel.app'; // TODO: Replace with your production domain after deployment

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: 'Harshith S Portfolio',
  title: {
    default: 'Harshith S | Software Engineer & AI Developer',
    template: '%s | Harshith S',
  },
  description:
    'Software Engineer specializing in full-stack development, backend systems, and AI-powered products. Building scalable applications with Java, Spring Boot, Python, React, and Node.js.',
  keywords: [
    'Harshith S',
    'Software Engineer',
    'Full Stack Developer',
    'AI Developer',
    'Backend Engineer',
    'Java Developer',
    'Spring Boot',
    'React Developer',
    'Python Developer',
    'Next.js',
    'Portfolio',
    'Machine Learning',
    'LangChain',
    'PostgreSQL',
    'REST API',
  ],
  authors: [{ name: 'Harshith S', url: BASE_URL }],
  creator: 'Harshith S',
  publisher: 'Harshith S',
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Harshith S Portfolio',
    title: 'Harshith S | Software Engineer & AI Developer',
    description:
      'Software Engineer specializing in full-stack development, backend systems, and AI-powered products. Building scalable applications with Java, Spring Boot, Python, React, and Node.js.',
    images: [
      {
        url: '/og-image.png', // TODO: Add a 1200x630 OG image to public/og-image.png before deployment
        width: 1200,
        height: 630,
        alt: 'Harshith S — Software Engineer & AI Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshith S | Software Engineer & AI Developer',
    description:
      'Software Engineer specializing in full-stack development, backend systems, and AI-powered products.',
    images: ['/og-image.png'], // TODO: Same OG image — add to public/og-image.png before deployment
    creator: '@harshith', // TODO: Replace with your actual Twitter/X handle if available
  },
  icons: {
    icon: '/favicon.ico',
    // TODO: Add apple-touch-icon.png (180x180) to public/ for iOS home screen support
    // apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: 'Harshith S',
        url: BASE_URL,
        email: 'harshithyadav662@gmail.com',
        jobTitle: 'Software Engineer',
        description:
          'Software Engineer specializing in full-stack development, backend systems, and AI-powered products.',
        knowsAbout: [
          'Java',
          'Spring Boot',
          'Python',
          'React',
          'Node.js',
          'Next.js',
          'PostgreSQL',
          'MySQL',
          'MongoDB',
          'REST APIs',
          'Machine Learning',
          'LangChain',
          'FastAPI',
          'TypeScript',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Software Engineer',
          occupationLocation: {
            '@type': 'Country',
            name: 'India',
          },
          skills: 'Full-Stack Development, Backend Engineering, AI Integration, Database Design',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Cambridge Institute of Technology, North Campus',
          description: 'Bachelor of Engineering — Computer Science & Engineering',
        },
        sameAs: [
          'https://github.com/Harshith9611',
          'https://www.linkedin.com/in/harshith-yadav-dev',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Harshith S Portfolio',
        description:
          'Portfolio of Harshith S — Software Engineer & AI Developer.',
        author: {
          '@id': `${BASE_URL}/#person`,
        },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="w-full bg-black text-white antialiased overflow-x-hidden overflow-y-auto">
        {children}
      </body>
    </html>
  );
}
