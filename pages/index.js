import Layout from '@/components/Layout'
import Programmer from '@/components/Programmer'
import styles from "@/styles/Index.module.css"
import { useAppContext } from "../context/ContextObject";
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import PaginationBox from '@/components/PaginationBox';
import Box from '@mui/material/Box';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function HomePage() {
  const [t, setT] = useAppContext();
  const { data: rawData, error } = useSWR('/api', fetcher)
  const [page, setPage] = useState(1)
  const [show, setShow] = useState([])
  const [data, setData] = useState([])
  const [maxPage, setMaxPage] = useState(0)

  useEffect(() => { 
    console.log(rawData)
    if(!rawData) return
    setData(shuffle([...rawData]))
  },[rawData])

  useEffect(() => { 
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
              margin: 20
            }}>
          <PaginationBox   setPage={setPage} page={page} maxPage={maxPage} />
        </Box>
        
      </Layout>
  )
}

