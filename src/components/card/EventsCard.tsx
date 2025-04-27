import { Events } from "@/lib/interfaces&types/resources";

export default function EventsCard({ event }: { event: Events }) {
  return (
    <article
      key={event.id}
      className="group flex flex-col items-start max-w-xl"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={event.date}>{event.date}</time>
        <a href={event.href}>{event.category}</a>
      </div>
      <div className="relative">
        <h4 className="underline-offset-4 group-hover:underline no-underline decoration-1">
          <a href={event.href}>{event.title}</a>
        </h4>
        <p>{event.description}</p>
      </div>
    </article>
  );
}
