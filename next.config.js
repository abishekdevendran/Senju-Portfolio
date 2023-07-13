/** @type {import('next').NextConfig} */
// wrap bundle-analyzer require with process.env check
const withBundleAnalyzer = process.env.ANALYZE
	? require('@next/bundle-analyzer')({ enabled: true })
	: (a) => a;

const i18n = require('./next-i18next.config');
console.log('i18n', i18n);

const nextConfig = {
	reactStrictMode: true,
	...i18n
};

module.exports = withBundleAnalyzer(nextConfig);
