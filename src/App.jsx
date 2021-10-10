import './App.css';
import { Component } from 'react';
import { Section } from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const { name } = event.currentTarget;

    this.setState(prevState => {
      return {
        prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Section title="Please, leave feedback" className="feedback" />
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback} />
        <Statistics state={this.state} />
      </div>
    );
  }
}
