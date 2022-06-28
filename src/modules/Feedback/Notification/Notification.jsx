import style from '../Feedback.module.css';

const Notification = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};

export default Notification;
