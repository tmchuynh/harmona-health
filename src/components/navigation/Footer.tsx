import {
  aboutPages,
  mainPages,
  secondaryPages,
  singlePage,
} from "@/lib/constants/navigation/menu";

export default function Footer() {
  return (
    <footer className="mt-22 mb-12 md:mb-20 border-t">
      <div className="mx-auto px-6 lg:px-8 pt-12 pb-8 max-w-7xl">
        <div className="xl:gap-8 xl:grid xl:grid-cols-3">
          <div className="gap-8 grid grid-cols-2 xl:col-span-2 md:mb-18 lg:mb-0">
            <div className="md:items-end md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h5>Programs</h5>
                <ul role="list" className="space-y-4 mt-6">
                  {mainPages.slice(0, 2).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 hover:">
                        {item.name}
                      </a>
                    </li>
                  ))}
                  {secondaryPages
                    .slice(3, secondaryPages.length)
                    .map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 hover:">
                          {item.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="">
                <ul role="list" className="space-y-4 mt-4">
                  {secondaryPages.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 hover:">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h5>About Harmona Health</h5>
                <ul role="list" className="space-y-4 mt-6">
                  {aboutPages.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 hover:">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h5>Join Us</h5>
                <ul role="list" className="space-y-4 mt-6">
                  {mainPages
                    .slice(mainPages.length - 1, mainPages.length)
                    .map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 hover:">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  {mainPages.slice(2, mainPages.length - 1).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 hover:">
                        {item.name}
                      </a>
                    </li>
                  ))}
                  {singlePage.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 hover:">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h5>Subscribe to our newsletter</h5>
            <p className="mt-2 text-sm/6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="sm:flex mt-6 sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                disabled
                placeholder="Enter your email"
                autoComplete="email"
                className="px-3 py-1.5 rounded-md w-full sm:w-64 xl:w-full min-w-0 text-base sm:text-sm/6 placeholder: outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                <button
                  type="submit"
                  className="flex justify-center items-center shadow-xs px-3 py-2 rounded-md w-full font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
