import { Component } from 'react';
import { Section } from 'components/Section/Section';

class Statistics extends Component {
  countTotalFeedbacks = () => {
    let total = 0;
    return (total += this.props.state.good + this.props.state.neutral + this.props.state.bad);
  };

  countPositiveFeedbackPercent = () => {
    return Math.round((this.props.state.good / this.countTotalFeedbacks()) * 100);
  };

  render() {
    const totalFeedbacks = this.countTotalFeedbacks();
    const { good, neutral, bad } = this.props.state;

      return totalFeedbacks === 0
          ? ( <Section title="Statistics" className="statistics">
              <div>No feedback given</div>
          </Section> )
          : ( <Section title="Statistics" className="statistics">
              <div>Good: {good} </div>
              <div>Neutral: {neutral}</div>
              <div>Bad: {bad}</div>
              <div>Total: {totalFeedbacks}</div>
              <div>Positive feedback: {this.countPositiveFeedbackPercent()} %</div>
          </Section> )
    }
}

export default Statistics;
