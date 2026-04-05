import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Shams Ul Rehman | Digital Marketing Manager',
  description: 'Professional portfolio of Shams Ul Rehman, Digital Marketing Manager specializing in SEO and Content Writing.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body suppressHydrationWarning className="font-sans">{children}</body>
    </html>
  );
}
