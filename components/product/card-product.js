import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CardProduct({ product }) {
  let images = product?.images[0];
  let imgUrl = images ? CMS_URL + images.formats.medium.url.replace("", "") : "https://placehold.it/550x550"

  let collection = product?.collections[0].name;
  let name = product?.name;
  let name_en = product?.name_en;
  let sku = product?.sku;

  let p_url = '/collections/' + collection + '/' + sku;
  return (
    <>
      <div className="m-2 cursor-default shadow-lg border-1 bg-white overflow-hidden">
        <div className="relative" style={{paddingBottom: "100%"}}>
          <img className="absolute p-6 md:p-0 object-cover" src={imgUrl} alt=""></img>
        </div>
        <div className="p-4 mt-4">
          <Link href={p_url} passHref><h2 className="cursor-pointer text-pmbrown-500 text-sm truncate">{name}</h2></Link>
          <div className="text-pmbrown-500 text-sm truncate">{name_en}</div>
          <div className="text-pmbrown-500 text-sm truncate">{collection}</div>
          <button>Learn More</button>

          <div className="mt-4 flex justify-between item-baseline">
            <div className=""><span className="text-xs">NTD$</span> {product?.price}</div>
            <div className=""><span className="text-pmbrown-100 text-sm">{product?.rating}</span> <span className="text-pmbrown-400 text-xs">/5</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
