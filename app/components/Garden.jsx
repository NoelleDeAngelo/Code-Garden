import styles from "./garden.module.css";
import Image from 'next/image'

const Garden = ({ tasks }) => {

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
              return (
                <Image
                  key={todo.id}
                  src={require(`../../public/${todo.iconName}`)}
                  alt="A drawing of a weed"
                  className={styles.plant}
                  style={{ top: todo.iconYLoc, left: todo.iconXLoc }}
                />
              );
            }
          })}
          {tasks.learning.map((todo) => {
            if (todo.isCompleted) {
              return (
                <Image
                  key={todo.id}
                  src={require(`../../public/${todo.iconName}`)}
                  alt="A drawing of a flower"
                  className={styles.plant}
                  style={{ top: todo.iconYLoc, left: todo.iconXLoc }}
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