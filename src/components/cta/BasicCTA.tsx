export default function BasicCTA() {
  return (
    <div className="bg-white">
      <div className="px-6 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-4xl text-balance text-gray-900 sm:text-5xl tracking-tight">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-600 text-lg/8 text-pretty">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="flex justify-center items-center gap-x-6 mt-10">
            <a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="font-semibold text-gray-900 text-sm/6">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
