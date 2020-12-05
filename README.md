# Static Tweet to your next app

[lfades/static-tweet](https://github.com/lfades/static-tweet) をベースに、自分の Next.js アプリケーションに導入しやすくするためにカスタマイズしたもの。

必要なものはすべて `/static-tweet` ディレクトリにまとめてあるため、最低限の記述のみで、`<Tweet id="tweet_id" />` という形で埋め込みが可能になります。

なお、ベースとしたソースコードは、`remark-parse@9.0.0` でパーサーが `micromark` に変更されたことで動作しなくなっていましたので、最新の環境に合わせて動作するように改変しています。  
その他、ブラウザの `prefers-color-scheme` に応じて埋め込みツイートにダークモードテーマが適用されるようにしたりといた、細かい部分で少し手を入れています。

## Demo

[https://codesandbox.io/s/static-tweets-to-next-app-j6wc2](https://codesandbox.io/s/static-tweets-to-next-app-j6wc2)

## How to use

To have full access to all Twitter elements, like videos and polls, you'll need a Twitter API Token, once you have it, copy the [`.env.local.example`](.env.local.example) file in the root directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then add your API token to `.env.local`, it should look like this:

```bash
TWITTER_API_TOKEN=...
```

For polls, make sure that you have **Tweets and Users** from **Twitter Labs** enabled for your app. It's required to get access to polls metadata.

## Special thanks

ソースコードは下記の各プロジェクトをもとに、改変して使用させていただきました。

- [lfades/static-tweet](https://github.com/lfades/static-tweet)
- [rauchg/blog](https://github.com/rauchg/blog)
