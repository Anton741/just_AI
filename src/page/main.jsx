import {useUser} from '../components/context/useUser'
import { useEffect, useState } from 'react';
import { searchFilter } from '../components/utils/searchFilter';
import UsersList from '../components/usersList';
import Search from '../components/search'
import Favourities from '../components/favourities';


const Main = () => {
  const { users, getUsers } = useUser();
  const [searchValue, setSearchValue] = useState('');
  const [favourities, setFavorities] = useState([]);
  const [dragUser, setDragUser] = useState();
  let [order, setOrder] = useState(1);
  useEffect(() => {
    getUsers();
  }, []);

  function handleSearch(e){
    setSearchValue(e.target.value);
  };
  function dragStartHandle(e, card) {
    setDragUser(card);
  };
  function dropHandle(e, card) {
    e.preventDefault();
    if (!card.order){
        if (order > favourities.length + 1) {
          setOrder(favourities.length);
        } else {
          setOrder((prevState) => (prevState += 1));
        }
        card.order = order
    }
    setFavorities((prevState) => [...new Set([...prevState, card])]);
  };
  function deleteFavourites(id) {
    setFavorities((prevState) => prevState.filter((user) => user.id !== id));
  };

  if (users) {
    const filtretedUser = searchValue.length > 0?searchFilter(users, searchValue):users;
    return (
      <main className="main">
        <Search onHandleSearch={handleSearch} value={searchValue} />
        <div className="main__raw">
          <div className="main__column">
            <UsersList users={filtretedUser} onDragStart={dragStartHandle} searchValue={searchValue}/>
          </div>
          <div className="main__column">
            <Favourities user = {dragUser} onDropHandle ={dropHandle} favourities={favourities} onDeleteHandle = {deleteFavourites}/>
          </div>
        </div>
      </main>
      
    );
  }
  return <div className="loader"></div>;
};

export default Main;
