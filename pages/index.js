import Layout from '@/components/Layout'
import Programmer from '@/components/Programmer'
import styles from "@/styles/Index.module.css"
import { useAppContext } from "../context/ContextObject";
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import PageButton from '@/components/PageButton';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function HomePage() {
  const [t, setT] = useAppContext();
  const { data, error } = useSWR('/api', fetcher)
  const [page, setPage] = useState(1)
  const [show, setShow] = useState([])
  const [maxPage, setMaxPage] = useState(0)

  useEffect(() => { 
    if(!data) return 
    const filterProgrammers = []
    for(let i = 0; i < data.length; i++){
      let pgrm = data[i]
      if(t.length === 0 || pgrm.titles.some(r=>t.includes(r))) {
        filterProgrammers.push(pgrm)
      }
    }
    setShow(filterProgrammers.slice((page-1)*3, page*3))
    setMaxPage(Math.ceil(filterProgrammers.length/3))
    // console.log(filterProgrammers)
  }, [data, t, page])

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  return (
      <Layout>
        {show.length === 0 && <h3>No programmers to show</h3>}
        <div className={styles.container}>
          {show.map((pgrm) => (
            <Programmer key={pgrm.id} pgrm={pgrm}/>
          ))}
        </div>
        <PageButton   setPage ={setPage} page={page} maxPage={maxPage} />
      </Layout>
  )
}

