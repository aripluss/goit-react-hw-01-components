import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>

      {/* <span
        className={isOnline ? css['status-online'] : css['status-offline']}
      ></span> */}
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
        loading="lazy"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
