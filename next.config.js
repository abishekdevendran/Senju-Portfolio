/** @type {import('next').NextConfig} */
// wrap bundle-analyzer require with process.env check
const withBundleAnalyzer = process.env.ANALYZE
	? require('@next/bundle-analyzer')({ enabled: true })
	: (a) => a;

const nextConfig = {
	reactStrictMode: true
};

module.exports = withBundleAnalyzer(nextConfig);
