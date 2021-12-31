import './Store.css';
import Item from '../components/Item';
import dummyItems from '../data/itemsdata';
import { useState } from 'react';

function Store() {
  
  function getPrice(priceStr){
    return Number(priceStr.slice(-priceStr.length,-4) + priceStr.slice(-3))
  }
  
  function sortByLowPrice(arr){
    const sortedArr = arr.slice();
    for(let i = 0 ; i < sortedArr.length ; i++){
      let swap;
      for(let j = 0; j < sortedArr.length - 1 - i ; j++){
        if(getPrice(sortedArr[j].itemPrice) > getPrice(sortedArr[j + 1].itemPrice)){
          swap = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = swap;
        }
      }
      if(!swap){
        break;
      }
    }
    return sortedArr;
  }
  function sortByHighPrice(arr){
    const sortedArr = arr.slice();
    for(let i = 0 ; i < sortedArr.length ; i++){
      let swap;
      for(let j = 0; j < sortedArr.length - 1 - i ; j++){
        if(getPrice(sortedArr[j].itemPrice) < getPrice(sortedArr[j + 1].itemPrice)){
          swap = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = swap;
        }
      }
      if(!swap){
        break;
      }
    }
    return sortedArr;
  }

  const sortedByLowPrice = sortByLowPrice(dummyItems);
  const sortedByHighPrice = sortByHighPrice(dummyItems);

  const [priceFilter,setPriceFilter] = useState("noPriceFilter")
  function handleChange(event){
    setPriceFilter(event.target.value);
  }
  console.log(dummyItems);
  return (
    <div className="Store">
      <select  onChange={handleChange}>
        <option value="noPriceFilter">--정렬 기준 선택--</option>
        <option value="sortByLowPrice">낮은가격순</option>
        <option value="sortByHighPrice">높은가격순</option>
      </select>
      <div className="itemlist">
      {priceFilter === "noPriceFilter" ? dummyItems.map(items => <Item items={items} key={items.id}/>):null}
      {priceFilter === "sortByLowPrice" ? sortedByLowPrice.map(items => <Item items={items} key={items.id}/>):null}
      {priceFilter === "sortByHighPrice" ? sortedByHighPrice.map(items => <Item items={items} key={items.id}/>):null}
      </div>
    </div>
  );
}

export default Store;