import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import Programmer from '@/components/Programmer'

export default function HomePage({programmers}) {
  return (
    <Layout>
      {programmers.length === 0 && <h3>No programmers to show</h3>}

        {programmers.map((pgrm) => (
        <Programmer key={pgrm.id} pgrm={pgrm}/>
      ))}

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
