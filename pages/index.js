import { useState, useEffect } from "react";

import { fetchCharacterList, fetchMoreCharacters } from "../tools/api";
import Layout from "../components/layout";
import CharaterList from "../components/character/list";

import styles from "./home.module.scss";

export default function Home() {
  const [characterData, setCharacterData] = useState({
    characters: [],
    nextPageUrl: '',
  });

  useEffect(() => {
    fetchCharacterList()
      .then(({ data }) =>
        setCharacterData({ characters: data.results, nextPageUrl: data.next })
      )
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  const { characters, nextPageUrl } = characterData;

  const handleLoadMore = () => {
    fetchMoreCharacters(nextPageUrl)
      .then(({ data }) => {
        setCharacterData({
          characters: [...characters, ...data.results],
          nextPageUrl: data.next,
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Star Wars Characters</h1>

        <p className={styles.description}>
          A long time ago in a galaxy far, far away....
        </p>
        <CharaterList characters={characters} />
        {nextPageUrl && (
          <button className={styles["load-more"]} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </main>
    </Layout>
  );
}
