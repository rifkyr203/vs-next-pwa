import Head from 'next/head'
import Register from '../components/register'


const register = () => {
    return (
        <>
            <Head>
                <link rel='stylesheet' href="/public/styles/auth.js" />
            </Head>
            <Register />
        </>
    )
}

export default register