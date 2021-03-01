import styles from "./card.module.scss";

const CharacterCard = ({ characterDetails }) => {
  return (
    <ul className={styles.card}>
      {characterDetails.map(detail => (
        <li>
          {detail.label}: {detail.value}
        </li>
      ))}
    </ul>
  );
};

export default CharacterCard;
