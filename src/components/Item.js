import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item({items}){
	const [display,setDisplay] = useState(true);
    const [isShowPopUp,setIsShowPopUp] = useState(false);
    function handleChange(){
        setDisplay(previousImg => !previousImg)
    }
    function PopUp(){
        setIsShowPopUp(prev => !prev)
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
                    <i 
                    className="fas fa-shopping-cart"
                    onClick={PopUp}></i>
                </div>
            </div>
            <div className="item-name">
                {items.itemName}
            </div>
            <div className="item-price" hidden>
                {items.itemPrice}
            </div>
            {isShowPopUp?(
                    <div className='popUpBackground'>
                        <div className="popUpWrapper">
                        <div className="confirmMsg">{items.itemName}상품이 장바구니에 담겼습니다.<br/> 확인하시겠습니까?</div>
                        <div className="buttons">
                            <button 
                            className=" btn continueShopping"
                            onClick={PopUp}>쇼핑 계속하기</button>
                            <Link to="/cart"><button className=" btn goCart">장바구니 가기</button></Link>
                        </div>
                    </div>
                    </div>
                )
                :null}
        </article>
    )
}



export default Item;