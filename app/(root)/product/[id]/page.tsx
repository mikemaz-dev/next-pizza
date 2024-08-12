import { prisma } from '@/prisma/prisma-client'
import { Container, SwitchProductForm } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							items: true,
						},
					},
				},
			},
			items: true,
		},
	})

	if (!product) notFound()

	return (
		<Container className='flex flex-col my-10'>
			<SwitchProductForm product={product} />
		</Container>
	)
}
