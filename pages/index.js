import Layout from '@/components/Layout'
import Programmer from '@/components/Programmer'
import styles from "@/styles/Index.module.css"
import useSWR from 'swr'
import {useAppContext} from "../context/ContextObject";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function HomePage() {
  const [t, setT] = useAppContext();
  const { data, error } = useSWR('/api', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>


  return (
      <Layout>
        {data.length === 0 && <h3>No programmers to show</h3>}
        <div className={styles.container}>
          {data.map((pgrm) => (
            t.length === 0 || pgrm.titles.some(r=>t.includes(r)) ?
            <Programmer key={pgrm.id} pgrm={pgrm}/> : <></>
          ))}
        </div>
      </Layout>

  )
}

