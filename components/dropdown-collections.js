import Link from 'next/link'

export default function DropdownCollections({ categories, collections }) {
  return (
    <>
      <div className="group flow-root relative">
        <button>
            <Link href="/collections" passHref>
              <a className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400">產品系列</a>
            </Link>
        </button>
        
      </div>
    </>
  )
}
