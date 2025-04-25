import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Screenshot() {
  return (
    <div className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="lg:pt-4 lg:pr-8">
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
              <dl className="space-y-8 mt-10 max-w-xl lg:max-w-none text-base/7">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon
                        aria-hidden="true"
                        className="top-1 left-1 absolute text-indigo-600 size-5"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="shadow-xl md:-ml-4 lg:-ml-0 rounded-xl ring-1 ring-gray-400/10 w-[48rem] sm:w-[57rem] max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
