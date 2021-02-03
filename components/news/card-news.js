import Link from 'next/link'
import Image from 'next/image'
import { CMS_URL } from '@/lib/constants'

export default function CardNews() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 my-3 px-3">
      <div className="shadow-md bg-white">
        <picture className="block cursor-pointer">
          <Image className="absolute cursor-pointer object-cover -mb-1" src={"https://via.placeholder.com/750x375"} alt="" width={750} height={375} />
        </picture>
        <div className="p-4 -mt-1">
          <div>
            This is the title of the news post.
          </div>
        </div>
      </div>
    </div>
  )
}