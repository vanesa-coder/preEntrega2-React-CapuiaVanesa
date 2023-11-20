import { Link } from "react-router-dom";
import styles from "../Item/Item.module.css";


export const Item = ({id, name, img, description}) => {
    
  return (
    <div className={styles.itemCard}>
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <img src={img} alt="" />
        <p className="card-text"> {description} </p>
        <Link to={`/item/${id}`}>
          <button className={styles.buttonDetail} >Detalles</button>
        </Link>
      </div>
    </div>
  )
}    
    
