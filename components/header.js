import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full px-6 bg-white">
      <div className="container content-center mx-auto max-w-6xl md:flex justify-between items-center">
        <Link href="/" passHref>
          <a href="#" className="block py-6 w-full text-center md:md:w-auto text-gray-600 no-underline flex justify-center items-center">
            Palmers Taiwan
				  </a>
        </Link>
      </div>
    </header>
  )
}
