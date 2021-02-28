import Head from 'next/head'
import { Perfil } from '../components/Perfil';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletedChallengens } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext';



export default function Home() {
  return (


    <div className={styles.container} >

      <Head>
        <title>Home Health - Ten</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div>
          <Perfil />
          <CompletedChallengens />
          <Countdown />

        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>

    </div>
  )
}
