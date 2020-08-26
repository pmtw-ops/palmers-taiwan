import Link from 'next/link'


export default function CardCollection({ i, product, children }) {
  return (
    <div className="block m-4 bg-white shadow-sm md:flex">
      <div className={i % 2 === 0 ? "" : "md:hidden"}>
        <img className="h-full w-full object-cover" src={product.image} alt=""></img>
      </div>

      <div className="block w-full text-center">
        <h1 className="text-pmbrown-600 p-4 text-6xl">{product.title}</h1>
        <button className="bg-pmbrown-300 text-gray-100 rounded-md p-2 m-2 hover:bg-pmbrown-100 lg:mt-10">SOMETHING</button>
      </div>

      <div className={i % 2 === 0 ? "hidden" : "hidden md:block"}>
        <img className="h-full w-full object-cover" src={product.image} alt=""></img>
      </div>
    </div>
  )
}
