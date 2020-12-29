import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CarouselProductImages({ images }) {
  return (
    <div className="block lg:p-0 lg:flex lg:justify-around">
      <div className="hidden lg:inline-grid lg:gap-2 lg:p-2 lg:grid-col-1">
        <div className="">
          <img className="border" src="https://via.placeholder.com/80x80"></img>
        </div>
        <div className="">
          <img className="border" src="https://via.placeholder.com/80x80"></img>
        </div>
        <div className="">
          <img className="border" src="https://via.placeholder.com/80x80"></img>
        </div>
        <div className="">
          <img className="border" src="https://via.placeholder.com/80x80"></img>
        </div>
        <div className="">
          <img className="border opacity-50" src="https://via.placeholder.com/80/FFFFFF/FFFFFF"></img>
        </div>
      </div>

      <div className="" >
        <img className="p-2 object-cover" src="https://via.placeholder.com/600" alt=""></img>
      </div>

      <div className="mt-2 mb-2 lg:hidden">
        <div className="flex justify-around">
          <div className="p-2">
            <img className="border" src="https://via.placeholder.com/80/FFFFFF/FFFFFF"></img>
          </div>
          <div className="p-2">
            <img className="border" src="https://via.placeholder.com/80/FFFFFF/FFFFFF"></img>
          </div>
          <div className="p-2">
            <img className="border" src="https://via.placeholder.com/80/FFFFFF/FFFFFF"></img>
          </div>
          <div className="p-2">
            <img className="border" src="https://via.placeholder.com/80/FFFFFF/FFFFFF"></img>
          </div>
          <div className="p-2">
            <img className="border" src="https://via.placeholder.com/80/FFFFFF/FFFFFF"></img>
          </div>
        </div>
      </div>
    </div >
  )
}
