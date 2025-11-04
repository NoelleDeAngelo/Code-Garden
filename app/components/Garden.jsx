import styles from "./garden.module.css";
import Image from 'next/image'

const Garden=({tasks})=>{
  return (
    <div className={styles.card}>
      <div className={styles.garden}>
        <Image
          src={require("../../public/GardenBG.png")}
          alt="Drawing of an empty garden plot"
          className={styles.backgroundImg}
        />
        <div className={styles.dirtSection}>
          {tasks.debt.map((todo) => {
            if (!todo.isCompleted) {
              let y = Math.random() * (55 + 40) - 40;
              y = y + "%";
              let x = Math.random() * (89 + 3) - 3;
              x = x + "%";
              return (
                <Image
                  key={todo.id}
                  src={require("../../public/PurpleWeed.png")}
                  alt="A red poppy"
                  className={styles.plant}
                  style={{ top: y, left: x }}
                />
              );
            }
          })}
          {tasks.learning.map((todo) => {
            if (todo.isCompleted) {
              let y = Math.random() * (55 +40) -40;
              y = y + "%";
              let x = Math.random() * (89 + 3) - 3;
              x = x + "%";
              return (
                <Image
                  key={todo.id}
                  src={require("../../public/RedFlower.png")}
                  alt="A red poppy"
                  className={styles.plant}
                  style={{ top: y, left: x }}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Garden;