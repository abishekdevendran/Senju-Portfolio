import Image from 'next/image';
import React from 'react';
import { DarkModeToggle } from '@/components/Theme/DarkModeToggle';

const Navbar = () => {
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center">
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Sanjay Raaman
					</span>
				</div>
				<DarkModeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
