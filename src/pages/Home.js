import styles from './Home.module.css';
import {useState,useEffect} from 'react';

function Title(){
  useEffect(()=>{
    console.log(`hello:)`)
    return () => console.log(`bye bye:(`)
  },[])
  return (
    <div>
      <h1>Welcome!!</h1>
    </div>
  )
}

function Home() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(prev => !prev)
  }
  return (
    <div className={styles.Home}>
      {show?null:<Title/>}
      <button onClick={handleClick}>{show? "show" : "hide"}</button>
    </div>
  );
}

export default Home;