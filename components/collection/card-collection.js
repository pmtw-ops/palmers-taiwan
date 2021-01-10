import Link from 'next/link'
// import { CMS_URL } from '@/lib/constants'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CardCollection({ i, collection }) {
  let image = collection.images ? collection.images[0] : undefined
  let imgUrl = image ? CMS_URL + image.url : "https://via.placeholder.com/1000x550"
  let imgAlt = image ? image.alternativeText : "temp"
  let collectionPath = '/collections/' + collection.name

  return (
    <div className="block m-4 bg-white shadow-md items-center md:flex" key={i}>
      <div className={i % 2 === 0 ? "order-first cursor-pointer" : "order-last cursor-pointer"}>
        <Link href={collectionPath} passHref><img className="h-full w-full object-cover" src={imgUrl} alt={imgAlt}></img></Link>
      </div>
      <div className="block w-full text-center">
        <Link href={collectionPath} passHref><h1 className="text-pmbrown-600 p-4 cursor-pointer text-6xl">{collection.name}</h1></Link>
        <Link href={collectionPath} passHref><button className="bg-pmbrown-300 text-gray-100 rounded-md p-2 m-2 cursor-pointer hover:bg-pmbrown-100 lg:mt-10">了解更多</button></Link>
      </div>
    </div>
  )
}
