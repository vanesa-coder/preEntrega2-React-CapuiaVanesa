import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useState } from "react";
import styles from "../CartWidget/CartWidget.module.css";
import { Link } from "react-router-dom";


export const CardWidget = () => {
    const [count, setCount] = useState(5);

  return (
    <>
    <Link to={"./Cart"}>
    < PiShoppingCartSimpleBold className= {styles.carrito} />
    </Link>
    <button className={styles.boton} type="button"> 
        <span>{count}</span>
    </button>
    </>
  )
}