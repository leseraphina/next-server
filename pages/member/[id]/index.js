import Layout from '@/components/Layout'
import Link from 'next/link'
const castMember = ({ castMember }) => {
  console.log(castMember)
  return (
    <Layout>
      <main className='container'>
        <h1>{castMember.name}</h1>
        <p>{castMember.bio}</p>
        <Link href="/">
          <button>Back to Cast</button>
        </Link>
      </main>
    </Layout>
  )


}
export const getServerSideProps = async (context) => {
  const res = await fetch('https://aestas-site.s3.ap-northeast-2.amazonaws.com/data1.json');
  const data = await res.json();
  const castMember = data.filter(item => item.id == context.params.id)

  return {
    props: {
      castMember: castMember[0]
    }
  }
}

export default castMember