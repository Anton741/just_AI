export function groupByUser(users, a, b=1000){
  return users.filter((user) => user.registered.age  >= a && user.registered.age <= b)
}