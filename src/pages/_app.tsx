import { ThemeProvider } from '@/components/Theme/ThemeProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import defaultSeo from '@/config/defaultSeo';
import { Provider } from 'jotai';
import { Poppins, Roboto, Open_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { appWithTranslation } from 'next-i18next';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '400', '800'],
	variable: '--font-poppins'
});

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
	variable: '--font-roboto'
});

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '800'],
	variable: '--font-open-sans'
});

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...defaultSeo} />
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<Provider>
					<main
						className={`${poppins.variable} ${roboto.variable} ${openSans.variable}`}>
						<Component {...pageProps} />
						<Toaster />
					</main>
				</Provider>
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(App);
