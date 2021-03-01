import Head from 'next/head'
import { Perfil } from '../components/Perfil';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletedChallengens } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';


import styles from '../styles/pages/Home.module.css'


interface HomeProps {

  level: number,
  currentExperience: number,
  challengeCompleted: number

}



export default function Home(props: HomeProps) {
  console.log(props)
  return (



    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}

    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }

}