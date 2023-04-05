import React from "react";
import { EventListItem } from "../eventListItem/EventListItem";

const eventsData = [
  {
    id: 1,
    date: "May 5, 2022",
    time: "5:00 PM",
    title: "Shahin event",
    label: "cut-sew",
  },
  {
    id: 2,
    date: "May 5, 2022",
    time: "5:00 PM",
    title: "Shahin event",
    label: "cut-sew",
  },
  {
    id: 3,
    date: "May 5, 2022",
    time: "5:00 PM",
    title: "Shahin event",
    label: "cut-sew",
  },
  {
    id: 4,
    date: "May 5, 2022",
    time: "5:00 PM",
    title: "Shahin event",
    label: "cut-sew",
  },
  {
    id: 5,
    date: "May 5, 2022",
    time: "5:00 PM",
    title: "Shahin event",
    label: "cut-sew",
  },
];

export function EventList() {
  return (
    <div>
      {eventsData.map(({ id, date, time, title, label }) => (
        <EventListItem
          key={id}
          date={date}
          time={time}
          title={title}
          label={label}
        />
      ))}
    </div>
  );
}
