import React, { useEffect, useRef, useState } from 'react';
import FavoriteUserCard from './favouriteUserCard';

const Favourities = ({ user, onDropHandle, favourities, onDeleteHandle }) => {
  const [dragFavorite, setDragUserFavorite] = useState()
  const favorRef = useRef(null);

  
  function dragLeaveHandle() {
    favorRef.current.style.background = 'transparent';
  }
  function handleDrop(e, user) {
    favorRef.current.style.background = 'transparent';
    onDropHandle(e, user);
  }
  function dragOverHandle(e) {
    e.preventDefault();
    favorRef.current.style.background = 'rgba(240, 240, 240, 0.74)';
  }
  // Drop&drag favorities list
  function dragStartInFavorite(e, card) {
    setDragUserFavorite(card);
  }
  function dragOverFavorite(e) {
    e.preventDefault();
    const {target} = e
    target.style.background = 'rgba(189, 188, 188, 0.74)';
  }
  function dropFavorite(e, card) {
    e.preventDefault();
    const { target } = e;
    [dragFavorite.order, card.order] = [card.order, dragFavorite.order]
    favourities = favourities.sort((a, b) => a.order - b.order);
    target.style.background = 'transparent';
  }
  function dragLeaveFavorite(e) {
    const { target } = e;
    target.style.background = 'transparent';
  }
  return (
    <div
      className="favourities"
      ref={favorRef}
      onDragLeave={(e) => dragLeaveHandle(e)}
      onDragOver={(e) => dragOverHandle(e)}
      onDrop={(e) => handleDrop(e, user)}
    >
      <h3>Избраное: </h3>
      <ul
        className="favourities__list"
        onDragOver={(e) => dragOverFavorite(e)}
        onDragLeave={(e) => dragLeaveFavorite(e)}
      >
        {favourities &&
          favourities.map((user, index) => (
            <li
              key={user.id}
              className="favourities__item"
              draggable={true}
              onDragStart={(e) => dragStartInFavorite(e, user)}
              onDrop={(e) => dropFavorite(e, user)}
            >
              {<FavoriteUserCard user={user} onDeleteHandle={onDeleteHandle} />}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Favourities;
