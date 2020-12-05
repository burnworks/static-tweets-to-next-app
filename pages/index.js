import Layout from '../components/Layout';
import styles from '../styles/top.module.css';
import getTweets from '../static-tweet/lib/get-tweets';
import Tweet from '../static-tweet/components/post/tweet';
import { Tweets } from '../static-tweet/lib/tweets';

export const getStaticProps = async () => {
  const tweets = await getTweets(Page);
  return { props: { tweets } };
}

const title = "Embedded Tweet"

export default function Page({ tweets }) {
  return (
    <Layout
      title={title}
      tweets={tweets}
    >
      <div className={styles.pageHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.pageContent}>
        <Tweets.Provider value={tweets}>
          <Tweet id="1333199675667619842" />
          <Tweet id="1222713456702287873" caption="Link tweet sample" />
          <Tweet id="1334659999717441536" caption="Retweet as Quote Tweet sample" />
          <Tweet id="1334005094392635398" caption="Link(Twitter Card) tweet sample" />
          <Tweet id="1334704571969536000" caption="Media(image) tweet sample" />
          <Tweet id="1334067138244481027" />
          <Tweet id="1311954192076951554" />
        </Tweets.Provider>
      </div>
    </Layout>
  )
}
