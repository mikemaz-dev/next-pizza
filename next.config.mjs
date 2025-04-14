/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['@prisma/client'],
	},
	output: 'standalone',
	reactStrictMode: true,
}

export default nextConfig
