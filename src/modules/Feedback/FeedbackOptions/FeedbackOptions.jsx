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
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
