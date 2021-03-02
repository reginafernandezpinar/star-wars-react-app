import styles from "./card.module.scss";

const CharacterCard = ({ characterDetails }) => {
  return (
    <ul className={styles.card}>
      {characterDetails?.map(({ label, value}) => (
        <li>
          {label}: {value}
        </li>
      ))}
    </ul>
  );
};

export default CharacterCard;
