import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function HomePage({programmers}) {
  return (
    <Layout>
      <h1>Upcoming Data</h1>
    </Layout>
  )
}

export async function getServerSideProps(){
  const res = await fetch(`${API_URL}/api`)
  const programmers = await res.json()

  return{
    props:{programmers},
    revalidate: 1
  }
}
