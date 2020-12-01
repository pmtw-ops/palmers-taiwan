import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function CarouselProductImages({ images }) {
  console.log(images)
  return (
    <>
      <img src="https://placehold.it/500x500" alt=""></img>
    </>
  )
}
