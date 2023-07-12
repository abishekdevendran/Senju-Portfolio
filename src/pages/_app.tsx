import { ThemeProvider } from '@/components/Theme/ThemeProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import defaultSeo from '@/config/defaultSeo';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...defaultSeo} />
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
