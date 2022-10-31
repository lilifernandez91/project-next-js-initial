import Header from '@components/Header'
import Script from 'next/script'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState ()
  return (
    <AppContext.Provider value= {initialState}>
      <Script />
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
