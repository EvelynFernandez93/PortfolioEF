import React, { useEffect,useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { pedirItemPorId } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {


    const [item,setItem]= useState (null);
    const id = useParams().id;
    console.log

    useEffect(() => {
        pedirItemPorId(Number(id))
        .then((res) => {
            setItem(res);

        })
    }, [id])
    

  return (
    <div>
        {item && 
        <ItemDetail item={item} />}
    </div>
  )
}
