import axios from "axios";

export async function fetchUsers(){
  const { data } = await axios.get('https://randomuser.me/api/', {
    params: {
      inc: 'id,name,email,registered,picture',
      results: 5000,
    },
  });
  return data;
}



