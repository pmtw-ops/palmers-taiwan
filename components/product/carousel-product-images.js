import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CarouselProductImages({ images }) {
  console.log(images)
  return (
    <div className="block md:p-0 md:flex md:justify-around">
      <div className="hidden md:inline-grid md:gap-2 md:p-2 md:grid-col-1">
        <div className="">
          <img className="border" src="https://placehold.it/80x80"></img>
        </div>
        <div className="">
          <img className="border" src="https://placehold.it/80x80"></img>
        </div>
        <div className="">
          <img className="border" src="https://placehold.it/80x80"></img>
        </div>
        <div className="">
          <img className="border" src="https://placehold.it/80x80"></img>
        </div>
        <div className="">
          <img className="border" src="https://placehold.it/80/FFFFFF/FFFFFF"></img>
        </div>
      </div>

      <div className="bg-yellow-200" >
        <img className="p-2 object-cover" src="https://placehold.it/600" alt=""></img>
      </div>

      <div className="md:hidden">
        Row image selector
      </div>
    </div >
  )
}
