import * as React from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/router';

export function LanguageToggle() {
	const router = useRouter();
	const toggleHandler = (locale: string) => {
		router.push(router.asPath, router.asPath, { locale });
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Languages />
					<span className="sr-only">Toggle Language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => toggleHandler('en')}>
					English
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => toggleHandler('hi')}>
					Hindi
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
