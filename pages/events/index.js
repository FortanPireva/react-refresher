import React from "react";
import EventList from "../../components/events/event-list";
import DUMMY_EVENTS from "../../dummy_data";
const EventsIndexPage = () => {
  return (
    <main>
      <EventList items={DUMMY_EVENTS} />
    </main>
  );
};

export default EventsIndexPage;
