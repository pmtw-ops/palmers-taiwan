import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function ProductDescriptions({ product }) {
  return (
    <div className="flex-wrap">
      <div className="text-pmbrown-800 font-bold text-5xl p-2 mt-2">{product.name}</div>
      <div className="text-gray-600 text-2xl px-2">{product.name_en}</div>
      <div className="text-2xl font-bold p-2 mt-4">商品簡介</div>
      <div className="text-pmbrown-700 text-xl p-2">{product.description}</div>
      <div className="text-pmbrown-700 p-2">
        <span className="">產品容量: </span>
        <span className="">{product.measurement}</span>
      </div>
      <div className="p-2">
        <span>售價:</span>
        <span className="p-2">NTD$: {product.price}</span>
      </div>
      <button className="bg-pmbrown-300 text-gray-100 rounded-md p-2 m-2 mt-4 cursor-pointer hover:bg-pmbrown-100 lg:mt-10">哪裡購買</button>
    </div>
  )
}