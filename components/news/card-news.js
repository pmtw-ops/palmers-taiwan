import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CardNews() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 my-3 px-3">
      <div className="shadow-md bg-white">
        <div className="relative" style={{ paddingBottom: "50%" }}>
          <img className="absolute cursor-pointer object-cover" src={"https://via.placeholder.com/650x325"} alt=""></img>
        </div>
        <div className="p-4">
          <div>
            This is the title of the news post.
          </div>
        </div>
      </div>
    </div>
  )
}