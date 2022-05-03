import { useRouter } from "next/router";
import { getEventById } from "../../dummy_data";
import ErrorAlert from "../../components/ui/error-alert";
import { Fragment } from "react/cjs/react.production.min";
import EventContent from "../../components/event-details/event-content";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Events found</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
