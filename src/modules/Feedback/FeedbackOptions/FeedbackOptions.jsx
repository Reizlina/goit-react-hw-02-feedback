import PropTypes from 'prop-types';

import style from '../Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.wrap}>
      <button onClick={() => onLeaveFeedback('good')} className={style.btn}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className={style.btn}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className={style.btn}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {};
