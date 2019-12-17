import {useState} from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import RegisterParentComponent from 'components/register/parent'


const RegisterParent = () => {

    return (
        <Layout title="Parent">
            <Head>
                <link rel='stylesheet' href="/styles/auth.css" />
            </Head>
            <RegisterParentComponent />
        </Layout>
    )
}

export default RegisterParent
