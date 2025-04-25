export default function BasicHero() {
  return (
    <div className="relative overflow-hidden isolate">
      <div className="lg:flex mx-auto px-6 lg:px-8 lg:py-40 pt-10 pb-24 sm:pb-32 max-w-7xl">
        <div className="mx-auto lg:mx-0 lg:pt-8 max-w-3xl lg:shrink-0">
          <h1 className="mt-10 font-semibold text-5xl text-pretty sm:text-7xl tracking-tight">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-8 font-medium text-lg text-pretty sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="flex items-center gap-x-6 mt-10">
            <a
              href="#"
              className="shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="font-semibold text-sm/6">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
