import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

const Home = () => {
	const { t } = useTranslation('common');
	return (
		<div className="w-full h-full flex items-center justify-center bg-background">
			<div className="flex flex-col gap-4 p-8">
				<div>{t('home.h1')}</div>
				<div className="flex items-end justify-center">
					<div className="font-poppins font-extrabold text-6xl md:text-8xl leading-tight mb-4 text-center">
						{t('home.name')}
					</div>
					<div>{t('home.extra')}</div>
				</div>
				<div className="font-openSans text-2xl text-right">
					{t('home.h2.p1')}
					<Link
						className="font-openSans text-2xl underline"
						href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu"
						rel="noopener noreferrer"
						target="_blank">
						{t('home.h2.p2')}
					</Link>
					{t('home.h2.extra')}
				</div>
			</div>
		</div>
	);
};

export default Home;
