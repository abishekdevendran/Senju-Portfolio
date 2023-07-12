import { navHrefAtom } from '@/pages';
import { useSetAtom } from 'jotai';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

const Section = ({ id, children }: { id: string; children: ReactNode }) => {
	const setNavHref = useSetAtom(navHrefAtom);
	const { ref } = useInView({
		threshold: 0.9,
		delay: 800,
		initialInView: false,
		onChange: (inView, entry) => {
			if (inView) {
				// console.log(`Section ${id} is in view`);
				setNavHref(id);
			}
		}
	});
	return (
		<section
			className="w-full h-[100dvh] flex items-center justify-center snap-center snap-always"
			id={id}
			ref={ref}>
			{children}
		</section>
	);
};

export default Section;
