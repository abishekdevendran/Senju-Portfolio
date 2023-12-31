import { DefaultSeoProps } from 'next-seo';

const defaultSeo: DefaultSeoProps = {
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://www.url.ie/',
		siteName: `Sanjay Raaman's Portfolio`
	},
	twitter: {
		handle: '@handle',
		site: '@site',
		cardType: 'summary_large_image'
	}
};

export default defaultSeo;
