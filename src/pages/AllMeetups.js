import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetuos] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-refresher-ee479-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        const meetups = [];
        for (const key in data) {
          meetups.push({ id: data.id, ...data[key] });
        }

        setMeetuos(meetups);
      });
  }, []);
  if (isLoading)
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  return <section>{<MeetupList meetups={meetups} />}</section>;
};

export default AllMeetupsPage;
