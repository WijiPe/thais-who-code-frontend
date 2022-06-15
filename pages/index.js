import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Programmer from '@/components/Programmer'
import styles from "@/styles/Index.module.css"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function HomePage({}) {
  const { data, error } = useSWR('/api', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      {data.length === 0 && <h3>No programmers to show</h3>}
      <div className={styles.container}>
        {data.map((pgrm) => (
          <Programmer key={pgrm.id} pgrm={pgrm}/>
        ))}
      </div>
    </Layout>
  )
}

// export async function getStaticProps(){
//   const res = await fetch(`${API_URL}/api`)
//   const programmers = await res.json()

//   return{
//     props:{programmers},
//     revalidate: 1
//   }
// }
