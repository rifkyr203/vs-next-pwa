import {useState} from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import Register from 'components/register'
import parentimg from 'public/images/register/parent.svg'
import childrenimg from 'public/images/register/children.svg'
import {Link} from 'route'

const RegisterChildren = () => {
    return (
        <Layout title="Register">
            <Head>
                <link rel='stylesheet' href="/styles/auth.css" />
            </Head>
            <div className="main-container" style={{background: "none"}}>
              <p className="proximanova-20-bold mb-1">Who Are You</p>
              <p className="proximanova-14 text-color-2">Are you parents? or a children?</p>
              <div className="d-flex justify-content-between">
              <Link route="parent">
                <a className="flow-box">
                  <div className=" d-flex flex-column align-items-center pointer">
                    <img src={parentimg} className="flow-img mt-4"/>
                    <p className="proximanova-16-semibold mb-5 mt-3 text-color-4">I'm Parent</p>
                  </div>
                </a>
              </Link>
              <Link route="children">
                <a className="flow-box">
                  <div className=" d-flex flex-column align-items-center pointer">
                    <img src={childrenimg} className="flow-img mt-4"/>
                    <p className="proximanova-16-semibold mb-5 mt-3 text-color-4">I'm Children</p>
                  </div>
                </a>
              </Link>
              </div>
            </div>
        </Layout>
    )
}

export default RegisterChildren
