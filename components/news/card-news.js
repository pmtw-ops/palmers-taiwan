import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CardNews() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 my-3 px-3">
      <div className="relative shadow-lg bg-white">
        <picture className="block cursor-pointer bg-gray-200">
          <img className="block" src="https://via.placeholder.com/550x250" alt=""></img>
        </picture>
        <div className="p-4 mt-2 text-center">
          This is the title of the news post.
        </div>
      </div>
    </div>
  )
}