import styles from "./films.module.scss";

const characterFilms = ({ films }) => {
  return (
    <div className={styles.films}>
      <h1>{films?.length} Films</h1>
      <ul>
        {films?.map(film => (
          <li key={film?.title}>
            {film?.title}: {film?.yearsSinceRelease} years ago
          </li>
        ))}
      </ul>
    </div>
  );
};

export default characterFilms;
