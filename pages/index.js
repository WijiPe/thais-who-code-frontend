import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Programmer from '@/components/Programmer'
import styles from "@/styles/Index.module.css"

export default function HomePage({programmers}) {
  return (
    <Layout>
      {programmers.length === 0 && <h3>No programmers to show</h3>}
      <div className={styles.container}>
        {programmers.map((pgrm) => (
          <Programmer key={pgrm.id} pgrm={pgrm}/>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api`)
  const programmers = await res.json()

  return{
    props:{programmers},
    revalidate: 1
  }
}
