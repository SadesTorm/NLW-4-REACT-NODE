import Head from 'next/head'
import { Perfil } from '../components/Perfil';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletedChallengens } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (


    <div className={styles.container} >

      <Head>
        <title>Home Health - Ten</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Perfil />
          <CompletedChallengens />
          <Countdown />

        </div>
        <div>

        </div>
      </section>

    </div>
  )
}
