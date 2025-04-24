import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const primaryFeatures = [
  {
    name: "Server monitoring",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Collaborate",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Task scheduling",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: CalendarDaysIcon,
  },
];
const secondaryFeatures = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];
const stats = [
  { id: 1, name: "Developers on the platform", value: "8,000+" },
  { id: 2, name: "Daily requests", value: "900m+" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Projects deployed", value: "12m" },
];

export default function Example() {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <div className="relative overflow-hidden isolate">
          <svg
            aria-hidden="true"
            className="-z-10 absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="top-10 lg:top-[calc(50%-30rem)] left-[calc(50%-4rem)] sm:left-[calc(50%-18rem)] lg:left-48 xl:left-[calc(50%-24rem)] -z-10 absolute blur-3xl transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
              className="bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20 w-[69.25rem] aspect-1108/632"
            />
          </div>
          <div className="lg:flex mx-auto px-6 lg:px-8 lg:py-40 pt-10 pb-24 sm:pb-32 max-w-7xl">
            <div className="mx-auto lg:mx-0 lg:pt-8 max-w-2xl shrink-0">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-11"
              />
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="bg-indigo-500/10 px-3 py-1 rounded-full ring-1 ring-indigo-500/20 ring-inset font-semibold text-indigo-400 text-sm/6">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-2 font-medium text-gray-300 text-sm/6">
                    <span>Just shipped v1.0</span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="text-gray-500 size-5"
                    />
                  </span>
                </a>
              </div>
              <h1 className="mt-10 font-semibold text-5xl text-pretty text-white sm:text-7xl tracking-tight">
                Deploy to the cloud with confidence
              </h1>
              <p className="mt-8 font-medium text-gray-400 text-lg text-pretty sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="flex items-center gap-x-6 mt-10">
                <a
                  href="#"
                  className="bg-indigo-500 hover:bg-indigo-400 shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a href="#" className="font-semibold text-sm/6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="flex lg:flex-none mx-auto mt-16 sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 xl:ml-32 max-w-2xl lg:max-w-none">
              <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
                <img
                  alt="App screenshot"
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                  width={2432}
                  height={1442}
                  className="bg-white/5 shadow-2xl rounded-md ring-1 ring-white/10 w-[76rem]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-8 sm:mt-16 px-6 lg:px-8 max-w-7xl">
          <h2 className="font-semibold text-center text-lg/8 text-white">
            The world’s most innovative companies use our app
          </h2>
          <div className="items-center gap-x-8 gap-y-10 sm:gap-x-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 mt-10 max-w-lg sm:max-w-xl lg:max-w-none">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 sm:mt-56 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-semibold text-base/7 text-indigo-400">
              Deploy faster
            </h2>
            <p className="mt-2 font-semibold text-4xl text-pretty text-white sm:text-5xl lg:text-balance tracking-tight">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-gray-300 text-lg/8">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
            <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="font-semibold text-base/7 text-white">
                    <div className="flex justify-center items-center bg-indigo-500 mb-6 rounded-lg size-10">
                      <feature.icon
                        aria-hidden="true"
                        className="text-white size-6"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-1 text-base/7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="font-semibold text-indigo-400 text-sm/6"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-semibold text-base/7 text-indigo-400">
                Everything you need
              </h2>
              <p className="mt-2 font-semibold text-4xl text-pretty text-white sm:text-5xl sm:text-balance tracking-tight">
                No server? No problem.
              </p>
              <p className="mt-6 text-gray-300 text-lg/8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
              </p>
            </div>
          </div>
          <div className="relative pt-16 overflow-hidden">
            <div className="mx-auto px-6 lg:px-8 max-w-7xl">
              <img
                alt="App screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="shadow-2xl mb-[-12%] rounded-xl ring-1 ring-white/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="bottom-0 absolute -inset-x-20 bg-linear-to-t from-gray-900 pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 md:mt-24 px-6 lg:px-8 max-w-7xl">
            <dl className="gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 max-w-2xl lg:max-w-none text-base/7 text-gray-300">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon
                      aria-hidden="true"
                      className="top-1 left-1 absolute text-indigo-500 size-5"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 sm:mt-56 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-xl">
            <h2 className="font-semibold text-base/8 text-indigo-400">
              Our track record
            </h2>
            <p className="mt-2 font-semibold text-4xl text-pretty text-white sm:text-5xl tracking-tight">
              Trusted by thousands of creators&nbsp;worldwide
            </p>
            <p className="mt-6 text-gray-300 text-lg/8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
          <dl className="gap-x-8 gap-y-10 sm:gap-y-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto lg:mx-0 mt-16 sm:mt-20 max-w-2xl lg:max-w-none text-white">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 pl-6 border-white/10 border-l"
              >
                <dt className="text-sm/6">{stat.name}</dt>
                <dd className="order-first font-semibold text-3xl tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative mt-32 sm:mt-56 px-6 lg:px-8 py-32 sm:py-40 isolate">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-4xl text-balance text-white sm:text-5xl tracking-tight">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-gray-300 text-lg/8">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="flex justify-center items-center gap-x-6 mt-10">
              <a
                href="#"
                className="bg-white hover:bg-gray-100 shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-gray-900 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="font-semibold text-sm/6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
