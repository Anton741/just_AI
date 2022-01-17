export function searchFilter(users, searchValue){
  const re = new RegExp(searchValue.toLowerCase(), 'gi');
  return users.filter((user) => user.name.first.toLowerCase().match(re) ||
                                            user.name.last.toLowerCase().match(re)
  )
}

