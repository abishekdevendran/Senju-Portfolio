import React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useTranslation } from 'next-i18next';

const FormSchema = z.object({
	username: z.string().email('Please enter a valid email address')
});

const Contact = () => {
	const { t } = useTranslation('common');
	// const form = useForm<z.infer<typeof FormSchema>>({
	// 	resolver: zodResolver(FormSchema)
	// });

	// function onSubmit(data: z.infer<typeof FormSchema>) {
	// 	toast({
	// 		title: 'You submitted the following values:',
	// 		description: (
	// 			<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
	// 				<code className="text-white">{JSON.stringify(data, null, 2)}</code>
	// 			</pre>
	// 		)
	// 	});
	// }
	return (
		<div className="w-full h-full flex items-center justify-center bg-secondary">
			<Card className="w-full mx-16 md:mx-32 lg:w-1/2 p-8 lg:p-16">
				<CardHeader>
					<CardTitle className="font-poppins text-5xl lg:text-7xl leading-snug mb-8">
						{t('contact.title')}
					</CardTitle>
					<CardDescription className="font-openSans text-xl">
						{t('contact.description')}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{/* <Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-6 mb-8 w-full flex items-center justify-center">
							<div className="w-full lg:w-2/3 flex items-center justify-center gap-2">
								<FormField
									control={form.control}
									name="username"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Username</FormLabel>
											<FormControl>
												<Input
													placeholder="abc@efg.com"
													{...field}
													type="email"
												/>
											</FormControl>
											<FormDescription>
												Your email is not collected.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit" className="mt-1">
									Submit
								</Button>
							</div>
						</form>
					</Form> */}
					<p className="font-openSans text-lg">
						{t('contact.p.p1')}
						<Link
							className="font-openSans text-lg underline"
							href="mailto:sanjaynatarajan02@gmail.com"
							rel="noopener noreferrer">{`sanjaynatarajan02@gmail.com`}</Link>
						{t('contact.p.extra')}
					</p>
				</CardContent>
				<CardFooter className="flex gap-8">
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
				</CardFooter>
			</Card>
		</div>
	);
};

export default Contact;
