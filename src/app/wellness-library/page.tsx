import Link from "next/link";

const featuredPost = {
  id: 1,
  title: "We’re incredibly proud to announce we have secured $75m in Series B",
  href: "#",
  description:
    "Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  author: {
    name: "Michael Foster",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};
const posts = [
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "/contact",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Example() {
  return (
    <div className="mx-auto py-12 md:py-24 w-11/12">
      <div className="gap-x-8 gap-y-12 sm:gap-y-16 grid grid-cols-1 lg:grid-cols-2 mx-auto px-6 lg:px-8 max-w-7xl">
        <Link href={featuredPost.href}>
          <article className="mx-auto lg:mx-0 w-full max-w-2xl lg:max-w-lg">
            <h6>{featuredPost.date}</h6>
            <h2 id="featured-post">{featuredPost.title}</h2>
            <p className="text-lg lg:text-xl">{featuredPost.description}</p>
          </article>
        </Link>
        <div className="mx-auto lg:mx-0 pt-12 sm:pt-16 lg:pt-0 lg:border-t-0 w-full max-w-2xl lg:max-w-none">
          <div className="-my-12">
            {posts.map((post, index) => (
              <Link href={post.href} key={index}>
                <article className="py-12">
                  <div className="group relative max-w-xl">
                    <h6>{post.date}</h6>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                </article>
                {index < posts.length - 1 && <div className="border-t" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
