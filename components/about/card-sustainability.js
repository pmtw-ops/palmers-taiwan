import Link from 'next/link'


export default function CardSustainability({ product, children }) {
  console.log(product, 'ohhhh')
  return (
    <>
      <div className="h-full border-1 bg-white overflow-hidden">
        <div className="">
          <img className="h-64 w-full object-cover" src="/img/about-block-1.jpg" alt=""></img>
        </div>
        <div className="p-4">
          <div className="mt-4 font-bold truncate">Title</div>
          <div className="">Descriptions</div>
          <div className="">Learn More</div>
        </div>
      </div>
    </>
  )
}
