import Layout from "@/Components/layout"


export default function Home() {
  return (
    <>
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
