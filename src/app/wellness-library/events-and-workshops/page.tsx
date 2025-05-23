"use client";

import EventsCard from "@/components/card/EventsCard";
import { FeaturedImageGallery } from "@/components/images/FeaturedImageGallery";
import { events, images, workshops } from "@/lib/constants/about/events";
import {
  filterByDateComparison,
  groupAndSortByProperties,
} from "@/lib/utils/sort";
export default function Page() {
  const date = new Date();
  const dateString = date.toString();
  const sortedEvents = groupAndSortByProperties(
    events,
    "date",
    "title",
    true,
    false
  );

  const pastEvents = filterByDateComparison(
    sortedEvents,
    "date",
    dateString,
    "lessThan"
  );

  const futureEvents = filterByDateComparison(
    sortedEvents,
    "date",
    dateString,
    "greaterThan"
  );

  const sortedWorkshops = groupAndSortByProperties(
    workshops,
    "date",
    "title",
    true,
    false
  );

  const pastWorkshops = filterByDateComparison(
    sortedWorkshops,
    "date",
    dateString,
    "lessThan"
  );

  const futureWorkshops = filterByDateComparison(
    sortedWorkshops,
    "date",
    dateString,
    "greaterThan"
  );

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h1>Events & Workshops for Mental Health</h1>
          <h5>
            Live Workshops & Webinars: Build Resilience and Learn Mental Health
            Strategies from Experts
          </h5>
          <p className="my-8 md:my-4 lg:my-6">
            Take part in live, expert-led events that are carefully designed to
            support and enhance your mental well-being. Our interactive
            webinars, group workshops, and immersive virtual retreats are
            focused on building resilience and promoting emotional health.
            Topics range from mindfulness techniques and nervous system
            regulation to trauma-informed care and community support exercises.
            These events are hosted by mental health professionals and provide
            you with tools you can use to improve your daily life. In addition,
            each event comes with downloadable workbooks and follow-up materials
            to ensure you can continue your personal growth long after the
            session ends.
          </p>
        </div>

        <section className="md:col-span-1 lg:col-span-2">
          <FeaturedImageGallery data={images} />
        </section>
      </section>

      <section className="flex flex-col gap-8">
        <section>
          <div className="flex justify-between items-center">
            <h2>Events</h2>
            <div className="flex flex-grow ml-4 border-secondary md:border-t"></div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3">
              {futureEvents.map((event, index) => (
                <EventsCard event={event} key={index} />
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h3>Past Events</h3>
                <div className="flex-grow ml-4 md:border-t border-dashed"></div>
              </div>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3">
                {pastEvents.map((event, index) => (
                  <EventsCard event={event} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center">
            <h2>Workshops</h2>
            <div className="flex flex-grow ml-4 border-secondary md:border-t"></div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3">
              {futureWorkshops.map((event, index) => (
                <EventsCard event={event} key={index} />
              ))}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h3> Past Workshops</h3>
                <div className="flex-grow ml-4 md:border-t border-dashed"></div>
              </div>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3">
                {pastWorkshops.map((event, index) => (
                  <EventsCard event={event} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
