import PropTypes from 'prop-types';

import style from '../Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const item = options.map(el => (
    <li className={style.wrap} key={el}>
      <button onClick={() => onLeaveFeedback(`${el}`)} className={style.btn}>
        Good
      </button>
    </li>
  ));
  return <ul className={style.wrap}>{item}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
