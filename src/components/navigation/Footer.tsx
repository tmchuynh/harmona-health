const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-8 max-w-7xl">
        <div className="xl:gap-8 xl:grid xl:grid-cols-3">
          <div className="gap-8 grid grid-cols-2 xl:col-span-2">
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm/6">Solutions</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 hover:">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-sm/6">Support</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.support.map((item) => (
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
                <h3 className="font-semibold text-sm/6">Company</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 hover:">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-sm/6">Legal</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {navigation.legal.map((item) => (
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
            <h3 className="font-semibold text-sm/6">
              Subscribe to our newsletter
            </h3>
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
                required
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
