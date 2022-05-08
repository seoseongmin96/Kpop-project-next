import Head from 'next/head'

export function Header() {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no,
      initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <title>K-pop App</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        </Head>
    )
}