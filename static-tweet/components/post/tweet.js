import { useRouter } from 'next/router';
import { useTweet } from '../../lib/tweets';
import Node from '../html/node';
import components from '../twitter-layout/components';
import twitterTheme from '../twitter-layout/twitter.module.css';
import darkTheme from '../dark-layout/dark.module.css';

export default function Tweet({ id, caption }) {
  const tweet = useTweet(id);
  // If you want to use the dark mode, set the value to "true".
  const isDark = false;

  // Happens when `getStaticProps` is traversing the tree to collect the tweet ids
  if (tweet.ignore) return null;

  return (
    <aside className={isDark ? darkTheme.theme : twitterTheme.theme}>
      <Node components={components} node={tweet.ast[0]} />
      {caption != null ? <p>{caption}</p> : null}
      <style jsx>{`
        aside {
          max-width: 560px;
          min-width: 220px;
          margin: 2rem auto;
        }
        p {
          font-size: 0.875rem;
          color: #999;
          text-align: center;
          margin: 0;
          margin-top: 10px;
          padding: 0;
        }
        @media (max-width: 500px) {
          aside {
            max-width: 300px;
          }
        }
        /* for IE11 Hack */
        @media (-ms-high-contrast: none), (-ms-high-contrast: active) {
          aside {
            background-color: #fff;
            border-radius: 4px;
          }
        }
        /* for IE11 Hack */
      `}</style>
    </aside>
  );
}
