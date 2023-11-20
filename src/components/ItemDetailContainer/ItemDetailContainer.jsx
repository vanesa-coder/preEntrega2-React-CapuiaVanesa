import { useEffect, useState } from "react";
import { getProductsById } from "../../productsMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
   const { id } = useParams();
   
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => { 
      setIsLoading(true)
      getProductsById(id)
        .then(resp => {
          setItem(resp)
          setIsLoading(false)
        })
        .catch(error => console.log(error));
        
     }, [item])
  
  return (
    <>
    
    <div >
    {isLoading ? <h2>Cargando producto ...</h2> : item && <ItemDetail {...item} />}
    </div>
    </>
    )
}
