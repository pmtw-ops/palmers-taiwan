import Link from 'next/link'
import { CMS_URL } from '@/lib/constants'

export default function NewsItem() {
  return (
    <div className="grid grid-cols-5 border-2 border-red-700 w-full mt-2 px-2">
      <div className="p-4 col-span-1">
        Image
      </div>
      <div className="p-4 col-span-3">
        This is the title of the news post.
      </div>
      <div className="p-4 col-span-1">
        2020-01-20
      </div>
    </div>
  )
}