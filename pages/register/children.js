import {useState} from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import RegisterChildrenComponent from 'components/register/children'


const register = () => {
    return (
        <Layout title="Children">
            <Head>
                <link rel='stylesheet' href="/styles/auth.css" />
            </Head>
            <RegisterChildrenComponent />
        </Layout>
    )
}

export default register
