import React from 'react';
import { useTranslation } from 'next-i18next';

const Academics = () => {
	const { t } = useTranslation('common');
	
	return (
		<div className="w-full h-full flex items-center justify-center">Academics</div>
	);
};

export default Academics;
