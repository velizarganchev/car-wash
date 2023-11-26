import Head, { defaultHead } from "next/head"
import Navigation from "./navigation/navigation"

const Layout = ({ children, title = 'Car Wash' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by V.Ganchev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            {children}
        </>
    )
}

export default Layout