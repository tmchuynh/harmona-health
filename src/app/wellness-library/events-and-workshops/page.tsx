"use client";

import EventsCard from "@/components/card/EventsCard";
import { events, workshops } from "@/lib/constants/about/events";
import { formatDate } from "@/lib/utils/format";
import {
  filterByDateComparison,
  filterByPropertyComparison,
  groupAndSortByProperties,
  sortByProperty,
} from "@/lib/utils/sort";
import React, { useEffect } from "react";
export default function Page() {
  const date = new Date();
  const formatedDate = formatDate(date);

  const dateString = date.toString();
  useEffect(() => {
    console.log(date);

    console.log(formatedDate);
  }, []);
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

  console.log("pastEvents", pastEvents);
  console.log("futureEvents", futureEvents);

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

  console.log("pastWorkshops", pastWorkshops);
  console.log("futureWorkshops", futureWorkshops);
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Events & Workshops for Mental Health</h1>
      <h5>
        Live Workshops & Webinars: Build Resilience and Learn Mental Health
        Strategies from Experts
      </h5>

      <p className="my-8 md:my-4 lg:my-6">
        Take part in live, expert-led events that are carefully designed to
        support and enhance your mental well-being. Our interactive webinars,
        group workshops, and immersive virtual retreats are focused on building
        resilience and promoting emotional health. Topics range from mindfulness
        techniques and nervous system regulation to trauma-informed care and
        community support exercises. These events are hosted by mental health
        professionals and provide you with tools you can use to improve your
        daily life. In addition, each event comes with downloadable workbooks
        and follow-up materials to ensure you can continue your personal growth
        long after the session ends.
      </p>

      <section className="flex flex-col gap-8">
        <div>
          <h2>Events</h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event, index) => (
              <EventsCard event={event} key={index} />
            ))}
          </div>
        </div>

        <div>
          <h2>Workshops</h2>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedWorkshops.map((event, index) => (
              <EventsCard event={event} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
