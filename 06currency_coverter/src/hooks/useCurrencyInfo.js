import { useEffect , useState } from "react";

function useCurrencyInfo(from, to , amount){
    const [data, setData] = useState({});
    useEffect(()=>{
         const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
        fetch(url)
        .then((res)=>res.json)
        .then((result) => {
      setData(result);           // ✅ store full response
      console.log(result);
      
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    },[from, to , amount])
    console.log(data);
    return data;
    
}
export default useCurrencyInfo