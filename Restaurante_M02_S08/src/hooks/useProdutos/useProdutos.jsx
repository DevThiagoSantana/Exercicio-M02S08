import { useEffect, useState } from "react";
import { apiService } from "../../service/api";

export const useProdutos = () =>{
  const[produtos,setProdutos]= useState(null);
  const[isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState(null);

  const fetchData = async() =>{
    setIsLoading(true);

    const{data,error} =await apiService.get('/produtos');

    const entradas = data?.filter((item) => item.secao === 'Entradas');
    const principais = data?.filter((item) => item.secao === 'Principais');
    const sobremesas = data?.filter((item) => item.secao === 'Sobremesas');
    setProdutos({ entradas, principais, sobremesas });

    setProdutos(data);
    setError(error);

    setIsLoading(false);
  };

  useEffect(() =>{
    fetchData();
  },[]);

  return{produtos,isLoading,error};
};