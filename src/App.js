import "./App.css";
import { useState } from "react";
import FeedbackBtns from "components/FeedbackBtns/FeedbackBtns";
import Statistics from "components/Statistics/Statistics";
import Section from "./components/Section/Section";
import NotificationMessage from "components/Notification/NotificationMessage";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementValue = (value) => {
    switch (value) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        throw new Error("Something goes wrong");
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  const total = countTotalFeedback();

  function countPositiveFeedbackPercentage(total) {
    if (total === 0) {
      return 0;
    }
    return Math.ceil((good / total) * 100);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackBtns
          incrementGood={incrementValue}
          options={["good", "neutral", "bad"]}
        />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            data={{ good, neutral, bad }}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <NotificationMessage message="No feedback given" />
      )}
    </>
  );
}

export default App;
