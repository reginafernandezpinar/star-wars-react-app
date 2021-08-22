import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { fetchCharacterDetail, fetchCharacterFilms } from "../../tools/api";
import Layout from "../../components/layout";
import CharacterFilms from "../../components/character/films";
import CharacterCard from "../../components/character/card";

import styles from "./character.module.scss";

const Character = () => {
  const [characterData, setCharacterData] = useState(null);
  const [characterFilms, setCharacterFilms] = useState([]);
  const { query: { id } } = useRouter();

  const getYearsFromNow = value => {
    const date = new Date(value);
    const now = new Date();
    const result = now.getFullYear() - date.getFullYear();
    return result;
  };

  useEffect(() => {
    fetchCharacterDetail(id)
      .then(({ data }) => {
        setCharacterData(data);
        // Create array of promises with requests for each film
        const promiseArray = data.films?.map(filmUrl =>
          fetchCharacterFilms(filmUrl)
        );

        // Execute all promises and handle resulting array
        Promise.all(promiseArray).then(films => {
          setCharacterFilms(
            films.map(({ data: { title, release_date } }) => ({
              title,
              yearsSinceRelease: getYearsFromNow(release_date),
            }))
          );
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }, [id]);

  const characterDetails = [
    {
      label: "Height",
      value: characterData?.height,
    },
    {
      label: "Mass",
      value: characterData?.mass,
    },
    {
      label: "Hair color",
      value: characterData?.hair_color,
    },
    {
      label: "Skin color",
      value: characterData?.skin_color,
    },
    {
      label: "Eye color",
      value: characterData?.eye_color,
    },
    {
      label: "Gender",
      value: characterData?.gender,
    },
    {
      label: "Birth year",
      value: characterData?.birth_year,
    },
  ];

  return (
    <Layout>
      <h2>
        <Link href="/">
          <a>
            <h3>&larr; Back to main list</h3>
          </a>
        </Link>
      </h2>
      <div className={styles.container}>
        <h1>{characterData?.name}</h1>
        <div>
          <CharacterCard characterDetails={characterDetails} />
          <CharacterFilms films={characterFilms} />
        </div>
      </div>
    </Layout>
  );
};

export default Character;
