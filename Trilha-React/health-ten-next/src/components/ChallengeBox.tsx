import { useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CowntodownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'
import { CompletedChallengens } from './CompletedChallenges';
import api from '../services/api';


export function ChallengeBox(){

    const { activeChallenge,resetChallenge, completedChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CowntodownContext);

    useEffect(() => {
        api.get('surveys').then(response => {
            console.log(response);
            
        }).catch( error => {
            console.log(error);            

        } );
    },[]);
   

    function handleChallengeSucceeded(){
        completedChallenge();
        resetCountdown();

    }


    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
        

    }


    return(
        <div className={styles.challengeBoxContainer}>
           
           { activeChallenge ? (
               
               <div className={styles.challengeBoxActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>

                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>


                    <footer>

                        <button
                            type="button"
                            className={styles.challengeBoxFailedButton}
                            onClick={handleChallengeFailed}
                        >                         
                            Falhei                        
                        </button>
                        
                        <button
                         type="button"
                         className={styles.challengeBoxSuccededButton}
                         onClick = { handleChallengeSucceeded }
                        >                        
                            Completei                         
                        </button>

                    </footer>

               </div>

           ) : (

                <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios
                </p>
            </div>
           )}

        </div>
    )
}