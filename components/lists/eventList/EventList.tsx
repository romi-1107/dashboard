import React from "react";
import { EventListItem } from "../eventListItem/EventListItem";

export function EventList({ data }) {
  return (
    <div>
      {data.map(({ id, date, time, title, label }) => (
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
