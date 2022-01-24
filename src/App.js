import { useState, useEffect } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import Stats from './components/Stats';

import Div from './App.styled';
function App() {
  let [positiveFeedback, setPositiveFeedback] = useState(0);
  let [neutralFeedback, setNeutralFeedback] = useState(0);
  let [negativeFeedback, setNegativeFeedback] = useState(0);

  const handleFeedback = e => {
    switch (e.target.value) {
      case 'Good':
        setPositiveFeedback(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'Bad':
        setNegativeFeedback(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return positiveFeedback + neutralFeedback + negativeFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    if (positiveFeedback === 0) {
      return 0;
    } else return (positiveFeedback / countTotalFeedback()) * 100;
  };

  useEffect(() => {}, []);

  return (
    <Div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Stats
            positive={positiveFeedback}
            neutral={neutralFeedback}
            negative={negativeFeedback}
            total={countTotalFeedback()}
            percentOfPositives={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Div>
  );
}

export default App;
