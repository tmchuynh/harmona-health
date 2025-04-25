const people = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  // More people...
];

export default function BasicTeamGrid() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
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
          className="gap-x-8 gap-y-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-auto lg:mx-0 mt-20 max-w-2xl lg:max-w-none text-center"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto rounded-full size-24"
              />
              <h3 className="mt-6 font-semibold text-base/7 tracking-tight">
                {person.name}
              </h3>
              <p className="text-sm/6">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
