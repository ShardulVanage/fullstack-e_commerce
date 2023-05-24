import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Stripe from 'stripe'
import Product from './components/Product'
import { features } from 'process'
import { metadata } from './layout'

const getProduct = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  })
  const product = await stripe.products.list()

  const productWithPrices = await Promise.all(
    product.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      const features = product.metadata.features || ""
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
        metadata: { features },
      }
    })

  )
  return productWithPrices;
}


export default async function Home() {
  const product = await getProduct()
  console.log(product)
  return (
    <main>
      <div className='grid grid-cols-fluid gap-12'>
        {product.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </main>
  )
}
