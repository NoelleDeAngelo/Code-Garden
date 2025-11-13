import styles from "./garden.module.css";
import Image from 'next/image'

const Garden = ({ tasks }) => {

  return (
    <div className={styles.card}>
      <div className={styles.garden}>
        <Image
          src={"/GardenBG.png"}
          alt="Drawing of an empty garden plot"
          width={2000}
          height={2000}
          className={styles.backgroundImg}
        />
        <div className={styles.dirtSection}>
          {tasks.debt.map((todo) => {
            if (!todo.isCompleted) {
              return (
                <Image
                  key={todo.id}
                  src={`/${todo.iconName}`}
                  alt="A drawing of a weed"
                  className={styles.plant}
                  width={200}
                  height={200}
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
                  src={`/${todo.iconName}`}
                  alt="A drawing of a flower"
                  className={styles.plant}
                  width={200}
                  height={200}
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