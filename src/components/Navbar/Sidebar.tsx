import React, { useState } from 'react'

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Menu } from 'lucide-react';

import {values} from './index'
import Link from 'next/link';
import { useAtom } from 'jotai';
import { navHrefAtom } from '@/pages';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Sidebar = () => {

	const [hrefValue, setHrefValue] = useAtom(navHrefAtom);
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const router = useRouter();
	const { t } = useTranslation('common');
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
						{values.map(({ value }) => (
							<Link href={`/#${value}`} key={value} scroll={false}>
								<Button
									variant={hrefValue === value ? 'default' : 'outline'}
									className={`w-full ${hrefValue === value && 'scale-105'}`}
									size="sm"
									onClick={(e) => {
										e.preventDefault();
										handleChange(value);
									}}>
									{t(`navbar.${value}`)}
								</Button>
							</Link>
						))}
					</SheetDescription>
					<SheetTitle>Socials</SheetTitle>
					<SheetDescription className="flex gap-4">
						<Link
							href="https://www.instagram.com/raaman.sanjay/"
							aria-label={`Sanjay's Instagram`}>
							<Instagram size={32} />
						</Link>
						<Link
							href="https://www.linkedin.com/in/sanjay-raaman/"
							aria-label={`Sanjay's LinkedIn`}>
							<Linkedin size={32} />
						</Link>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}

export default Sidebar