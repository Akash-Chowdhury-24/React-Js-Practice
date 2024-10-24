import { useEffect, useState } from "react";

export function Practice10(){
  const [user,setUser]=useState([]);
  const [flag,setFlag] = useState(true);

  async function fetching(){
    try{
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      if(data.users){
        setUser(data.users);
        setFlag(false);
      }else{
        setUser([]);
        setFlag(false);
      }
    }catch(error){
      console.log(error);
    }
  }

  // on page load 
  // useEffect(()=>{
  //   fetching();
  // },[]);

  if(flag){
    return (
      <h1>Fetching the users</h1>
    )
  }

  return (
    <div>
      <button onClick={fetching}>fetch</button>
      {
        user && user.length>0 ? user.map((each)=>{
          <li key={each.id}>
            <p>{each.firstName}</p>
          </li>
        }):<p>No user found</p> 
      }
    </div>
  )
}