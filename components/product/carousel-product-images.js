import Link from 'next/link'
import { CMS_URL } from '@/lib/constants'

export default function CarouselProductImages({ mainImage }) {
  // var featureImages = [];

  // /* --- Get Images List --- */
  // for (var i = 0; i < (images ? images.length : 0); i++) {
  //   var url = CMS_URL + images[i].url;
  //   var alt = images[i].alternativeText;
  //   var cap = images[i].caption;
  //   var image = {
  //     url: url,
  //     alt: alt,
  //     cap: cap
  //   }
  //   featureImages.push(image);
  // }

  return (
    <div className="block lg:p-0 lg:flex lg:justify-around">
      {/* <div className="hidden lg:inline-grid lg:gap-2 lg:p-2 lg:grid-col-1">
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
      </div> */}
      <div className="md:max-w-sm lg:max-w-xl">
        <img className="p-4 object-cover" src={CMS_URL + mainImage?.url} alt=""></img>
      </div>

      {/* <div className="mt-2 mb-2 lg:hidden">
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
      </div> */}
    </div >
  )
}
