import Link from "next/link";

import styles from "./list.module.scss";

const CharaterList = ({ characters }) => {
  return (
    <div className={styles.grid}>
      {characters?.map((character, i) => (
        <Link key={`${character.name}-card`} href={`/character/${i + 1}`}>
          <a className={styles.card}>
            <h3>{character.name}</h3>
            <div className={styles['card-bottom']}>
              <p>{`${character.films.length} films`}</p>
              <p>{`birth year: ${character.birth_year}`}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CharaterList;
