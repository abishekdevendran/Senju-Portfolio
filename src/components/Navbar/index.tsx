import React from 'react';
import { DarkModeToggle } from '@/components/Theme/DarkModeToggle';
import { useAtom } from 'jotai';
import { navHrefAtom } from '@/pages';

const Navigator = dynamic(() => import('@/components/Navbar/Navigator'), {
	ssr: false
});

const Sidebar = dynamic(() => import('@/components/Navbar/Sidebar'), {
	ssr: false
});

import { LanguageToggle } from '@/components/LanguageToggle';
import useResponsive from '@/hooks/useResponsive';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const values = [
	{ value: 'Home', label: 'Home' },
	{ value: 'Academics', label: 'Academics' },
	{ value: 'Experience', label: 'Experience' },
	{ value: 'Extracurricular', label: 'Extracurricular' },
	{ value: 'Responsibility', label: 'Social Responsibility' },
	{ value: 'Contact', label: 'Contact Me' }
];

const Navbar = () => {
	const router = useRouter();
	const [hrefValue, setHrefValue] = useAtom(navHrefAtom);
	const { t } = useTranslation('common');
	const handleChange = (value: string) => {
		setHrefValue(value);
		router.push(`/#${value}`, undefined, { scroll: false });
	};
	return (
		<nav className="border-gray-200 bg-white/60 dark:bg-gray-900/60 w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] fixed top-0 backdrop-filter backdrop-blur-md bg-opacity-30 z-50">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center justify-start gap-8">
					<Sidebar />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						{t('home.name')}
					</span>
				</div>
				<div className="flex items-center justify-end gap-2">
					{useResponsive('lg') && (
						<Navigator hrefValue={hrefValue} handleChange={handleChange} />
					)}
					<DarkModeToggle />
					<LanguageToggle />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
