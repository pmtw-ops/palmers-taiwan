import Link from 'next/link'

const NEXT_PUBLIC_STRAPI_API_URL = 'http://localhost:1337'

export default function CardCollection({ i, collection, children }) {
  let image = collection.images ? collection.images[0] : undefined
  let imgUrl = image ? NEXT_PUBLIC_STRAPI_API_URL + image.formats.large.url : "https://placehold.it/1000x550"
  let imgAlt = image ? image.alternativeText : "temp"

  return (
    <div className="block m-4 bg-white shadow-sm md:flex">
      <div className={i % 2 === 0 ? "" : "md:hidden"}>
        <img className="h-full w-full object-cover" src={imgUrl} alt=""></img>
      </div>

      <div className="block w-full text-center">
        <h1 className="text-pmbrown-600 p-4 text-6xl">{collection.name}</h1>
        <button className="bg-pmbrown-300 text-gray-100 rounded-md p-2 m-2 hover:bg-pmbrown-100 lg:mt-10">了解更多</button>
      </div>

      <div className={i % 2 === 0 ? "hidden" : "hidden md:block"}>
        <img className="h-full w-full object-cover" src={imgUrl} alt=""></img>
      </div>
    </div>
  )
}
