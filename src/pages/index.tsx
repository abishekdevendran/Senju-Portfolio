import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import { atom } from 'jotai';
import Section from '@/components/Section';
import Home from '@/components/index/sections/Home';
import Academics from '@/components/index/sections/Academics';
import Experience from '@/components/index/sections/Experience';
import Extracurricular from '@/components/index/sections/Extracurricular';
import Responsibility from '@/components/index/sections/Responsibility';
import Contact from '@/components/index/sections/Contact';

export const navHrefAtom = atom<string>('Home');
export default function Index() {
	return (
		<>
			<NextSeo
				title="Sanjay Raaman | Engineer"
				description="Portfolio of Sanjay Raaman, an engineer based in Chennai, Tamil Nadu."
			/>
			<Navbar />
			<Section id="Home">
				<Home />
			</Section>
			<Section id="Academics">
				<Academics />
			</Section>
			<Section id="Experience">
				<Experience />
			</Section>
			<Section id="Extracurricular">
				<Extracurricular />
			</Section>
			<Section id="Responsibility">
				<Responsibility />
			</Section>
			<Section id="Contact">
				<Contact />
			</Section>
		</>
	);
}
