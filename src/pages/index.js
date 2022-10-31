import ProductList from "@containers/ProductList";
import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
      <title>React Shop</title>
    </Head>
    <ProductList />
    </>
  )
}

export default Home;