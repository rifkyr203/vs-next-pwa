import {useState} from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import PricingFirstComponent from 'components/register/parent/pricing/first'
import PricingSecondComponent from 'components/register/parent/pricing/second'


const RegisterParentPricing = () => {
    const [tab, setTab] = useState(1)
    return (
        <Layout title="Select Pricing">
            <Head>
                <link rel='stylesheet' href="/styles/auth.css" />
            </Head>
            <div className="main-container">
              <div className="pricing-tab-container d-flex align-items-center">
                <button className={`pricing-tab-item proximanova-14-semibold ${tab === 1 && 'active'}`} onClick={() => setTab(1)}>Full Access</button>
                <button className={`pricing-tab-item proximanova-14-semibold ${tab === 2 && 'active'}`} onClick={() => setTab(2)}>Ala Carte</button>
              </div>
              {tab === 1 && <PricingFirstComponent />}
              {tab === 2 && <PricingSecondComponent />}
            </div>
        </Layout>
    )
}

export default RegisterParentPricing
