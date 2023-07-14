import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';

const Navigator = ({
	hrefValue,
	handleChange
}: {
	hrefValue: string;
	handleChange: (value: string) => void;
}) => {
	const { t } = useTranslation('common');
	return (
		<Tabs defaultValue="Home" value={hrefValue} onValueChange={handleChange}>
			<TabsList>
				<TabsTrigger value="Home">{t('navbar.Home')}</TabsTrigger>
				<TabsTrigger value="Academics">{t('navbar.Academics')}</TabsTrigger>
				<TabsTrigger value="Experience">{t('navbar.Experience')}</TabsTrigger>
				<TabsTrigger value="Extracurricular">
					{t('navbar.Extracurricular')}
				</TabsTrigger>
				<TabsTrigger value="Responsibility">
					{t('navbar.Responsibility')}
				</TabsTrigger>
				<TabsTrigger value="Contact">{t('navbar.Contact')}</TabsTrigger>
			</TabsList>
		</Tabs>
	);
};

export default Navigator;
