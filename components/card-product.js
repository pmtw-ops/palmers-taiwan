export default function CardProduct({ children }) {
  return (
    <>
      <div className="max-w-screen-sm shadow border-1">
        <img className="w-full" src="" alt=""></img>
        <div>Title</div>
        <div>Content</div>
        <div>Price and rating</div>

        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm leading-5 font-medium text-indigo-600">
              <a href="#" className="hover:underline">
                Blog
        </a>
            </p>
            <a href="#" className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                Boost your conversion rate
        </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
        </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm leading-5 font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  Roel Aufderhar
          </a>
              </p>
              <div className="flex text-sm leading-5 text-gray-500">
                <time dateTime="2020-03-16">
                  Mar 16, 2020
          </time>
                <span className="mx-1">
                  &middot;
          </span>
                <span>
                  6 min read
          </span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
      </div>
    </>
  )
}
