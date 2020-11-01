import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSomeArrayData, getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({allPostsData, someOtherData}){
  return(
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      {/* <section className={utilStyles.headingMd}>
        <p>[Hotel In]</p>
        <p>
          (Welcome to Hotel In website {''}
          <a href="https://www.google.hr"> nice rooms </a>
          )
        </p>
      </section> */}
      
      
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>

          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>

            <Link href={`/posts/${id}`}>
              <a>{title}</a>
             </Link>
             <br />
             <small className={utilStyles.lightText}>
             {date} 
             </small>
            </li>
          ))}
        </ul>


        {/* <h1 className={utilStyles.headingLg}> Sportovi </h1>
        <ul className={utilStyles.list}>
        {someOtherData.map(({id, sport}) => (
            <li className={utilStyles.listItem} key={id}>
                {sport}
            </li>
          ))}
        </ul> */}


      </section>

      
    </Layout>
  )
}

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  const someOtherData = getSomeArrayData()
  return {
    props:{
      allPostsData,
      someOtherData
    }
  }
}