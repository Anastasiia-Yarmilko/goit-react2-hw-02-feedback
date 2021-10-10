import PropsType from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(key => {
        return (
          <button key={key} type="button" name={key} onClick={onLeaveFeedback}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.PropsType = {
  options: PropsType.arrayOf(PropsType.string),
  onLeaveFeedback: PropsType.func,
};

export default FeedbackOptions;
