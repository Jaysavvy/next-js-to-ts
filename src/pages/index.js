import cx from "classnames";

import { Layout } from "../components/Layout";
import { MoviesList } from "../components/MoviesList";
import { Title } from "../components/Title";
import styles from "./index.module.css";

const description =
  "A collection of fantastical films you now get to enjoy because of peer pressure.";
const title = "Jason's Movies!";

export default function Home({ movies }) {
  return (
    <Layout description={description} title={title}>
      <Title>
        <span className={styles.unbroken}>Welcome to</span>{" "}
        <span
          className={cx(styles.me, styles.unbroken)}
          href="https://nextjs.org"
        >
          {title}
        </span>
      </Title>

      <p className={styles.description}>{description}</p>

      <MoviesList movies={movies} />
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      movies: (await import("../data/movies.json")).movies,
    },
  };
}
