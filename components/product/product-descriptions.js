import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function ProductDescriptions({ product }) {
  return (
    <div className="flex-wrap">
      <div className="text-pmbrown-800 text-5xl p-2 mt-2">{product.name}</div>
      <div className="text-gray-600 text-xl px-2">{product.name_en}</div>
      <div className="text-pmbrown-700 p-2">{product.description}</div>
      <div>{product.measurement}</div>
      <div>NTD$: {product.price}</div>
      <div>Where to buy</div>
    </div>
  )
}