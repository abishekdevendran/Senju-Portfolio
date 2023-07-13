import Navbar from '@/components/Navbar';
import { NextSeo } from 'next-seo';
import { atom } from 'jotai';
import Section from '@/components/Section';
import Home from '@/components/index/sections/Home';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Academics = dynamic(
	() => import('@/components/index/sections/Academics')
);
const Experience = dynamic(
	() => import('@/components/index/sections/Experience')
);
const Extracurricular = dynamic(
	() => import('@/components/index/sections/Extracurricular')
);
const Responsibility = dynamic(
	() => import('@/components/index/sections/Responsibility')
);
const Contact = dynamic(() => import('@/components/index/sections/Contact'));

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common']))
			// Will be passed to the page component as props
		}
	};
}

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
