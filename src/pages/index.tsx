import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<NextSeo
				title="Sanjay Raaman | Engineer"
				description="Portfolio of Sanjay Raaman, an engineer based in Chennai, Tamil Nadu."
			/>
			<Navbar />
		</>
	);
}
