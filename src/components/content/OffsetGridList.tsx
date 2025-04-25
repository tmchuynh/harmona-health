import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Invite team members",
    description:
      "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
  },
  {
    name: "List view",
    description:
      "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
  },
  {
    name: "Calendars",
    description:
      "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.",
  },
  {
    name: "Notifications",
    description:
      "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
  },
  {
    name: "Boards",
    description:
      "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
  },
  {
    name: "Reporting",
    description: "Eos laudantium repellat sed architecto earum unde incidunt.",
  },
  {
    name: "Mobile app",
    description: "Nulla est saepe accusamus nostrum est est fugit omnis.",
  },
];

export default function OffsetGridList() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-5 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <div className="col-span-2">
            <h2 className="font-semibold text-base/7 text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 font-semibold text-4xl text-pretty sm:text-5xl tracking-tight">
              All-in-one platform
            </p>
            <p className="mt-6 text-base/7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <dl className="gap-x-8 gap-y-10 lg:gap-y-16 grid grid-cols-1 sm:grid-cols-2 col-span-3 text-base/7">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold">
                  <CheckIcon
                    aria-hidden="true"
                    className="top-1 left-0 absolute text-indigo-500 size-5"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
