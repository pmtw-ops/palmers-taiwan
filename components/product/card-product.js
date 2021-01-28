import Link from 'next/link'
import ReviewStars from '@/components/product/review-stars'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CardProduct({ product }) {
  let images = product?.images[0];
  let imgUrl = images ? CMS_URL + images.formats.small.url : "https://via.placeholder.com/550x550"

  let collection = product?.collections[0].name;
  let name = product?.name;
  let name_en = product?.name_en;
  let sku = product?.sku;

  let c_url = '/collections/' + collection;
  let p_url = '/collections/' + collection + '/' + sku;
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 my-3 px-3">
      <div className="relative shadow-lg bg-white">
        <picture className="block cursor-pointer bg-gray-200">
          <Link href={p_url} passHref>
            <img className="block" src={imgUrl} alt=""></img>
          </Link>
        </picture>
        <div className="p-4 mt-2 text-center">
          <Link href={p_url} passHref>
            <h2 className="text-lg font-bold cursor-pointer text-pmbrown-500 truncate">{name}</h2>
          </Link>
          <Link href={p_url} passHref>
            <div className="text-gray-500 mt-1 text-xs cursor-pointer truncate">{name_en}</div>
          </Link>
          <Link href={c_url} passHref>
            <h3 className="text-pmbrown-400 font-bold mt-2 text-base cursor-pointer truncate">{collection}</h3>
          </Link>
          <Link href={p_url} passHref>
            <button className="bg-pmbrown-200 text-white rounded-md p-1 px-2 mt-4 m-2 hover:bg-pmbrown-100">Learn More</button>
          </Link>

          <div className="mt-4 flex justify-between item-baseline">
            <div className="">
              <span className="text-pmbrown-700 text-xs">NTD$ </span>
              <span className="text-pmbrown-500">{product?.price}</span>
            </div>
            <div className="flex">
              <ReviewStars rating={product?.rating} /><span className="text-sm ml-2"> {product?.review} 評分</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}