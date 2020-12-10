import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function ProductDescriptions({ product }) {
  return (
    <div className="flex-wrap">
      <div>{product.name_en}</div>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{product.measurement}</div>
      <div>NTD$: {product.price}</div>
      <div>Where to buy</div>
    </div>
  )
}