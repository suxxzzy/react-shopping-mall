import { useState } from 'react';
import './Item.css';

function Item({items}){
	const [display,setDisplay] = useState(true);
    function handleChange(){
        setDisplay(previousImg => !previousImg)
    }		
    return (
        <article>
            <div className="container">
                <img className="image-thumbnail" src={items.src} alt={items.id}/>
                <div className="icons">
                    {display?
                        <i 
                        className="far fa-heart"
                        onClick={handleChange}
                        ></i>
                        :
                        <i 
                        className="fas fa-heart"
                        onClick={handleChange}
                        ></i>
                    }
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div className="item-name">
                {items.itemName}
            </div>
            <div className="item-price" hidden>
                {items.itemPrice}
            </div>
        </article>
    )
}



export default Item;