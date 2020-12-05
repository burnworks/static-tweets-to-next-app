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
          <Tweet id="1222713456702287873" />
          <Tweet id="1222714521170481153" />
          <Tweet id="1278157369038405633" />
          <Tweet id="1278156968423641088" />
          <Tweet id="1333671811914018816" caption="media tweet sample" />
        </Tweets.Provider>
      </div>
    </Layout>
  )
}
