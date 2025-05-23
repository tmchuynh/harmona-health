import Image from "next/image";
export default function ImageBelow() {
  return (
    <div className="">
      <div className="relative pt-14 isolate">
        <div
          aria-hidden="true"
          className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 blur-3xl transform-gpu overflow-hidden"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 aspect-1155/678 rotate-[30deg]"
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-semibold text-5xl text-balance sm:text-7xl tracking-tight">
                Data to enrich your online business
              </h1>
              <p className="mt-8 font-medium text-lg text-pretty sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="flex justify-center items-center gap-x-6 mt-10">
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
            <div className="mt-16 sm:mt-24 flow-root">
              <div className="-m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-900/10 ring-inset">
                <Image
                  alt="App screenshot"
                  src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                  width={2432}
                  height={1442}
                  className="shadow-2xl rounded-md ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)] -z-10 absolute inset-x-0 blur-3xl transform-gpu overflow-hidden"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 aspect-1155/678"
          />
        </div>
      </div>
    </div>
  );
}
