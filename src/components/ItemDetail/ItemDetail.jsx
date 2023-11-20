import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";



export const ItemDetail = ({name, img, description, stock, precio}) => {
  
    return (
        <div className="p-5 border border-3 rounded-4">
            <div className="d-flex justify-content-center">
            <img src={img} alt="" />
            </div>
            <div className="d-flex  flex-column">
            <p>Nombre: {name} </p>
            <p>Descripción: {description} </p>
            <p><b>Precio:</b> $ {precio} </p>
            <ItemCount stock={stock} />
            </div>
            <Link to="/">
            <button className="btn btn-dark">Volver</button>
            </Link>
        </div>
  )
}
