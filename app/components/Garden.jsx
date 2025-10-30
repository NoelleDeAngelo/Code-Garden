import styles from "./garden.module.css";
import Image from 'next/image'

const ToDoSection=()=>{
  return (
    <div className={styles.card}>
      <Image src= {require('../../public/GardenBG.png')} alt="Drawing of an empty garden plot" className={styles.backgroundImg}/>
    </div>
  );
}

export default ToDoSection;