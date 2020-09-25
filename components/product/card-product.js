import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CardProduct({ product }) {
  let images = product?.images[0];
  let imgUrl = images ? CMS_URL + images.formats.medium.url.replace("medium_", "") : "https://placehold.it/550x550"
  console.log(product,'-----------------')
  return (
    <>
      <div className="w-full sm:max-w-sm shadow-lg border-1 bg-white overflow-hidden">
        <img className="h-64 p-2 w-full object-cover" src={imgUrl} alt=""></img>
        <div className="p-4">
          <div className="text-pmbrown-500 text-sm truncate">{product?.shortDesc}</div>
          <div className="mt-4 font-bold truncate">{product?.title}</div>
          <div className="mt-4 flex justify-between item-baseline">
            <div className=""><span className="text-xs">NTD$</span> {product?.price}</div>
            <div className=""><span className="text-pmbrown-100 text-sm">{product?.rating}</span> <span className="text-pmbrown-400 text-xs">/5</span></div>
          </div>
        </div>
      </div>
      <div className="p-4">{' '}</div>
    </>
  )
}
