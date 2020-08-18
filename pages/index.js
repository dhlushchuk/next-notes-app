import Head from 'next/head'
import Navbar from '../components/Navbar';
import { AlertState } from '../context/alert/AlertState';
import FirebaseState from '../context/firebase/FirebaseState';
import MainContent from '../components/MainContent';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <FirebaseState>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AlertState>
        {/* <BrowserRouter> */}
        <Navbar title={'Home'}/>
          <div className="container pt-4">
            <MainContent />
            {/* <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'} exact component={About}/>
            </Switch> */}
          </div>
        {/* </BrowserRouter> */}
      </AlertState>
    </FirebaseState>
  );
}