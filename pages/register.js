import Head from 'next/head'
import Register from '../components/register'


const register = () => {
    return (
        <>
            <Head>
                <link rel='stylesheet' href="/styles/auth.css" />
            </Head>
            <Register />
        </>
    )
}

export default register
