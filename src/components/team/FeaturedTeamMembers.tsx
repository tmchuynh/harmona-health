import Image from "next/image";

const people = [
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export default function FeaturedTeamMembers() {
  return (
    <div className="py-24 md:py-32 lg:py-40">
      <div className="gap-20 grid grid-cols-1 xl:grid-cols-3 mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto lg:mx-0 max-w-2xl">
          <h2 className="font-semibold text-4xl text-pretty sm:text-5xl tracking-tight">
            Our team
          </h2>
          <p className="mt-6 text-lg/8">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="gap-x-6 gap-y-20 lg:gap-x-8 grid grid-cols-1 sm:grid-cols-2 xl:col-span-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                alt=""
                src={person.imageUrl}
                className="rounded-2xl w-full aspect-3/2 object-cover"
                width={560}
                height={373}
              />
              <h3 className="mt-6 font-semibold text-lg/8">{person.name}</h3>
              <p className="text-base/7">{person.role}</p>
              <p className="mt-4 text-base/7">{person.bio}</p>
              <ul role="list" className="flex gap-x-6 mt-6">
                <li>
                  <a href={person.xUrl} className="">
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
