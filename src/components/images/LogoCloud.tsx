import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="mx-auto mt-8 sm:mt-16 px-6 lg:px-8 max-w-7xl">
      <h2 className="font-semibold text-center text-lg/8">
        The world’s most innovative companies use our app
      </h2>
      <div className="items-center gap-x-8 gap-y-10 sm:gap-x-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 mt-10 max-w-lg sm:max-w-xl lg:max-w-none">
        <Image
          alt="Transistor"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
          width={158}
          height={48}
          className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
        />
        <Image
          alt="Reform"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
          width={158}
          height={48}
          className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
        />
        <Image
          alt="Tuple"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
          width={158}
          height={48}
          className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
        />
        <Image
          alt="SavvyCal"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
          width={158}
          height={48}
          className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain"
        />
        <Image
          alt="Statamic"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
          width={158}
          height={48}
          className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain"
        />
      </div>
    </div>
  );
}
