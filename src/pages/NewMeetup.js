import React from "react";
import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const history = useHistory();
  const addMeetup = (meetUpData) => {
    fetch(
      "https://react-refresher-ee479-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      history.replace("/");
    });
  };
  return (
    <div>
      <h1>Add Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </div>
  );
};

export default NewMeetupPage;
