import Link from 'next/link'

export default function CardProduct({ product }) {
  let image = product?.image;
  let imgUrl = image ? CMS_URL + image.formats.medium.url.replace("medium_", "") : "https://placehold.it/550x550"
  console.log(product)
  return (
    <>
      <div className="w-full sm:max-w-sm shadow-lg border-1 bg-white overflow-hidden">
        <img className="h-64 w-full object-cover" src={imgUrl} alt=""></img>
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
