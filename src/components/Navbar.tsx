import React, { useState } from 'react';
import { DarkModeToggle } from '@/components/Theme/DarkModeToggle';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { navHrefAtom } from '@/pages';
import { useRouter } from 'next/router';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Menu, Scale } from 'lucide-react';

export const values = [
	{ value: 'Home', label: 'Home' },
	{ value: 'Academics', label: 'Academics' },
	{ value: 'Experience', label: 'Experience' },
	{ value: 'Extracurricular', label: 'Extracurricular' },
	{ value: 'Responsibility', label: 'Social Responsibility' },
	{ value: 'Contact', label: 'Contact Me' }
];

const Navbar = () => {
	const [hrefValue, setHrefValue] = useAtom(navHrefAtom);
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const router = useRouter();
	const handleChange = (value: string) => {
		setHrefValue(value);
		router.push(`/#${value}`, undefined, { scroll: false });
		if (isSheetOpen) {
			// set sheet close after 400 ms to support smooth transition
			setTimeout(() => {
				setIsSheetOpen(false);
			}, 400);
		}
	};
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900 w-full fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center justify-start gap-8">
					<Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
						<SheetTrigger asChild className="lg:hidden">
							<Button variant="outline" size="icon">
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent side="left">
							<SheetHeader>
								<SheetTitle>Navigation</SheetTitle>
								<SheetDescription className="flex flex-col gap-2">
									{values.map(({ value, label }) => (
										<Link href={`/#${value}`} key={value} scroll={false}>
											<Button
												variant={hrefValue === value ? 'default' : 'outline'}
												className={`w-full ${
													hrefValue === value && 'scale-105'
												}`}
												size="sm"
												onClick={(e) => {
													e.preventDefault();
													handleChange(value);
												}}>
												{label}
											</Button>
										</Link>
									))}
								</SheetDescription>
								<SheetTitle>Socials</SheetTitle>
								<SheetDescription className="flex gap-4">
									<Link href="https://www.instagram.com/raaman.sanjay/">
										<Instagram size={32} />
									</Link>
									<Link href="https://www.linkedin.com/in/sanjay-raaman/	">
										<Linkedin size={32} />
									</Link>
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>

					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Sanjay Raaman
					</span>
				</div>
				<div className="flex items-center justify-end gap-4">
					<Tabs
						defaultValue="Home"
						value={hrefValue}
						onValueChange={handleChange}
						className="hidden lg:block">
						<TabsList>
							<TabsTrigger value="Home">Home</TabsTrigger>
							<TabsTrigger value="Academics">Academics</TabsTrigger>
							<TabsTrigger value="Experience">Experience</TabsTrigger>
							<TabsTrigger value="Extracurricular">Extracurricular</TabsTrigger>
							<TabsTrigger value="Responsibility">
								Social Responsibility
							</TabsTrigger>
							<TabsTrigger value="Contact">Contact Me</TabsTrigger>
						</TabsList>
					</Tabs>
					<DarkModeToggle />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
