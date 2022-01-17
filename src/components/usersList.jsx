import { useState } from "react";
import UserCard from "./userCard";
import { groupByUser } from "./utils/groupBy";


const UsersList = ({users, onDragStart, searchValue}) => {
    const [closedLists, setClosedList] = useState([]);
    const usersGroup = {
      '1-10': groupByUser(users, 1, 10),
      '11-20': groupByUser(users, 11, 20),
      '21-30': groupByUser(users, 21, 30),
      '31-40': groupByUser(users, 31, 40),
      '>40': groupByUser(users, 41)
    };
    function closeList(e) {
      const { id } = e['target'];
      if (closedLists.indexOf(id) !== -1) {
        setClosedList((prevState) => prevState.filter((list) => list != id));
      } else {
        setClosedList((prevState) => [...prevState, id]);
      }
    }
  return (
    <>
      {Object.keys(usersGroup).map((ageGroup) => {
            return (
              <div
                className={
                  closedLists.indexOf(ageGroup) !== -1
                    ? 'users-group users-group--close'
                    : 'users-group'
                }
              >
                <div
                  className={
                    usersGroup[ageGroup].length > 0
                      ? 'users-group__title'
                      : 'users-group__title users-group__title--disable'
                  }
                  onClick={closeList}
                  id={ageGroup}
                >
                  <p key={ageGroup}><strong>{ageGroup}</strong></p>
                  <div
                    className={
                      closedLists.indexOf(ageGroup) !== -1
                        ? ' main__arrow main__arrow--close'
                        : 'main__arrow'
                    }
                  ></div>
                </div>

                <ul className="users__list">
                  {usersGroup[ageGroup].map((user) => (
                    <li
                      draggable={true}
                      onDragStart={(e) => onDragStart(e, user)}
                    >
                      {<UserCard user={user}  searchValue={searchValue}/>}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </>
  );
}

export default UsersList;