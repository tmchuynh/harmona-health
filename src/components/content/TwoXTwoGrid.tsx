import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Spam report",
    description:
      "Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum.",
    icon: TrashIcon,
  },
  {
    name: "Compose in markdown",
    description:
      "Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus.",
    icon: PencilSquareIcon,
  },
  {
    name: "Email commenting",
    description:
      "Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis.",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: "Customer connections",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis.",
    icon: HeartIcon,
  },
];

export default function TwoXTwoGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="gap-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-5 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
          <h2 className="col-span-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl tracking-tight">
            Stay on top of customer support
          </h2>
          <dl className="gap-x-8 gap-y-16 grid grid-cols-1 sm:grid-cols-2 col-span-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="font-semibold text-base/7 text-gray-900">
                  <div className="flex justify-center items-center bg-indigo-600 mb-6 rounded-lg size-10">
                    <feature.icon
                      aria-hidden="true"
                      className="text-white size-6"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
