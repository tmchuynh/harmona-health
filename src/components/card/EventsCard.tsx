import { Events } from "@/lib/interfaces&types/resources";

export default function EventsCard({ event }: { event: Events }) {
  return (
    <article
      key={event.id}
      className="flex flex-col justify-between items-start max-w-xl"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={event.date}>{event.date}</time>
        <a href={event.href}>{event.title}</a>
      </div>
      <div className="group relative">
        <h3>
          <a href={event.href}>{event.title}</a>
        </h3>
        <p className="mt-5">{event.description}</p>
      </div>
    </article>
  );
}
