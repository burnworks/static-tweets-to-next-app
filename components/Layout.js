import Head from 'next/head';
import styles from '../styles/layout.module.css';

const Layout = (props) => {

    const { title, children } = props
    const siteTitle = 'Static-Tweets to your next app'

    return (
        <div className={styles.container}>
            <Head>
                <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
            </Head>

            <header className={styles.stickyHeader}>
                <div className={styles.header}>
                    <h1>{siteTitle}</h1>
                </div>
            </header>

            <main>
                <div className={styles.main}>
                    {children}
                </div>
            </main>

            <footer>
                <div className={styles.footer}>
                    <div className={styles.copyright}>
                        <small>@burnworks</small>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout