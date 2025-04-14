import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
	const stories = await prisma.story.findMany({
		include: {
			items: true,
		},
	})

	return NextResponse.json(stories)
}
