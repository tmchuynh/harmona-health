export default function ScreenshotTestimonial() {
  return (
    <div className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="lg:items-start gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="lg:pt-4 lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="font-semibold text-base/7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 font-semibold text-4xl text-pretty sm:text-5xl tracking-tight">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
              <figure className="mt-16 pl-8 border-gray-200 border-l">
                <blockquote className="text-base/7">
                  <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec
                    lacus purus. Lectus nibh ullamcorper ac dictum justo in
                    euismod. Risus aenean ut elit massa. In amet aliquet eget
                    cras. Sem volutpat enim tristique.”
                  </p>
                </blockquote>
                <figcaption className="flex gap-x-4 mt-6 text-sm/6">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    className="flex-none rounded-full size-6"
                  />
                  <div>
                    <span className="font-semibold">Maria Hill</span> –
                    Marketing Manager
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="shadow-xl md:-ml-4 lg:ml-0 rounded-xl ring-1 ring-gray-400/10 w-[48rem] sm:w-[57rem] max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
