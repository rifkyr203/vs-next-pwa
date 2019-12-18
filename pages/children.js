import Head from 'next/head'
import Layout from 'components/layout'
import ChildrenComponent from 'components/children'

const Children = () => {
    return (
        <Layout white={true} nav={true}>
            <Head>
                <link rel="stylesheet" href="/styles/children.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            </Head>
            <ChildrenComponent />
        </Layout>
    )
}

export default Children