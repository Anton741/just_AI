import { useCallback } from "react";
import { dateTransform } from "./utils/DateTransform";

function Highlight({str, searchValue}){
  const re = new RegExp(searchValue.toLowerCase(), 'gi');
  const matchValue = str.toLowerCase().match(re)
  if(matchValue){
    return str.split(re).map((s,index, array) => {
      if (index < array.length - 1){
        const martkStr = matchValue.shift()
        return <>{s}<mark>{martkStr}</mark></>
      }
      return s
    })
  }
  return str
}
const UserCard = ({user, searchValue}) => {
  const highlightText = useCallback((string) => <Highlight str = {string} searchValue = {searchValue}/>, [searchValue])
  return (
    <div className="user-card">
      <div className="user-card__raw">
        <div className="user-card photo">
          <img src={user.picture.medium} alt="user's photo" draggable={false} />
        </div>
        <div className="user-card__info">
          <p className="user-card__name">
            {highlightText(user.name.last)} {highlightText(user.name.first)}
          </p>
          <p className="user-card__regist">
            {dateTransform(user.registered.date)}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default UserCard;