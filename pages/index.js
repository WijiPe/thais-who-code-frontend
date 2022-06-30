import Layout from '@/components/Layout'
import Programmer from '@/components/Programmer'
import styles from "@/styles/Index.module.css"
import { useAppContext } from "../context/ContextObject";
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import PaginationBox from '@/components/PaginationBox';
import Box from '@mui/material/Box';
import { StickyNote2 } from '@mui/icons-material';

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
    setShow(filterProgrammers.slice((page-1)*7, page*7))
    setMaxPage(Math.ceil(filterProgrammers.length/7))
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
        <Box 
            sx={{
              height: 100, 
              margin: 20,
              
            }}>
          <PaginationBox   setPage ={setPage} page={page} maxPage={maxPage} />
        </Box>
        
      </Layout>
  )
}

