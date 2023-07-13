import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/useDebounce';
import { navHrefAtom } from '@/pages';
import { useSetAtom } from 'jotai';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { values } from '@/components/Navbar';
import { useRouter } from 'next/router';

const Section = ({ id, children }: { id: string; children: ReactNode }) => {
	const setNavHref = useSetAtom(navHrefAtom);
	const isReversed = values.at(-1)?.value === id;
	const router = useRouter();
	const { ref, inView } = useInView({
		threshold: 0.5,
		delay: 800,
		initialInView: false,
		onChange: (inView) => {
			if (inView) {
				setNavHref(id);
				router.replace(`/#${id}`, undefined, { scroll: false });
			}
		}
	});
	const debouncedInView = useDebounce(inView, 1000);
	return (
		<section
			className="w-full h-[100dvh] flex items-center justify-center snap-center relative"
			id={id}
			ref={ref}>
			{children}
			<Button
				className={`absolute z-0 bottom-4 animate-bounce transition-all duration-500 ${
					debouncedInView ? 'opacity-70' : 'opacity-0'
				}`}
				variant={'ghost'}
				onClick={() =>
					router.push(
						`/#${
							isReversed
								? values.at(-2)?.value
								: values[values.findIndex((item) => item.value === id) + 1]
										.value
						}`,
						undefined,
						{ scroll: false }
					)
				}>
				{isReversed ? <ArrowUpIcon size={32} /> : <ArrowDownIcon size={32} />}
			</Button>
		</section>
	);
};

export default Section;
