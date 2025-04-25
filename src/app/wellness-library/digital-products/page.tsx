import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  // More posts...
];

export default function Page() {
  return (
    <div className="py-10 lg:py-12">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto text-center">
          <h2 className="font-semibold text-4xl text-balance sm:text-5xl tracking-tight">
            Unlock Limitless Growth with Expert Resources at Your Fingertips
          </h2>
          <p className="mx-auto mt-2 max-w-4xl text-lg/8">
            Step into a world of possibility where expert guidance meets
            actionable insights—designed to elevate your business, sharpen your
            strategy, and spark unstoppable momentum. Whether you're scaling up
            or just starting out, everything you need to grow, thrive, and lead
            with confidence is just a click away.
          </p>
        </div>
        <div className="gap-x-8 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 mt-16 lg:max-w-none">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between items-start cursor-pointer"
            >
              <div className="relative mb-5 w-full">
                <Image
                  alt=""
                  src={post.imageUrl}
                  className="rounded-2xl w-full aspect-video object-cover sm:aspect-2/1 lg:aspect-3/2"
                  width={360}
                  height={240}
                />
              </div>
              <div className="relative">
                <h3>
                  <a
                    href={post.href}
                    className="underline-offset-2 group-hover:underline"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
