import { dateTransform } from "./utils/DateTransform";

const FavoriteUserCard = ({user, onDeleteHandle}) => {
  return (
    <div className="user-card">
      <div className="user-card__raw">
        <div className="user-card photo">
          <img src={user.picture.medium} alt="user-card's photo" draggable={false} />
        </div>
        <div className="user-card__info">
          <p className="user-card__name">
            {user.name.last} {user.name.first}
          </p>
          <p className="user-card__regist">{dateTransform(user.registered.date)}</p>
        </div>
        <button className="favorite__btn" onClick = {() => onDeleteHandle(user.id)}>
          <img src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png" />
        </button>
      </div>
    </div>
  );
}

export default FavoriteUserCard;