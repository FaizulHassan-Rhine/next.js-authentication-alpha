import Layout from "@/Components/layout"


export default function Home() {

  return (
    <>
      <h1 className="text-center text-amber-700 text-2xl mt-20">Home, Where every dream begins..........</h1>

    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
