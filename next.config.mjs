/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// This allows your API routes to be properly handled
		serverComponentsExternalPackages: ['@prisma/client'],
	},
}

export default nextConfig
