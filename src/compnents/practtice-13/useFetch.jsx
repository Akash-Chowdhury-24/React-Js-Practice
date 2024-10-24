import { useEffect, useState } from "react";

export function useFetch(url,option = {}){
  const [data,setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchdata(){
    setLoading(true);
    try{
      const response = await fetch(url,{...option});
      if(!response.ok){
        throw new Error(response.statusText);
      }
      const result = await response.json();
      if(result){
        setData(result);
        setLoading(false);
        setError(null)
      }
    }catch(error){
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }
  useEffect(()=>{
    fetchdata();
  },[url])

  return {
    data,
    error,
    loading
  }
}