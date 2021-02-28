import {  useContext } from 'react';
import { CowntodownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {

    const { 
         resetCountdown,
         minutes,
         seconds,
         isActive,
         hasFinished,
         startCountdown 
        } = useContext(CowntodownContext);
    //se a string so conter um caracter, pega o começo e add o 0 (padStart) depois divide (.split(''))
    const [minuteLeft,minuteRigth] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRigth] = String(seconds).padStart(2,'0').split('');

    





    

    return (
        <div>
            <div className={styles.countdownContainer}>

                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>

            </div>


            { hasFinished ? (
            
                <button 
                disabled
                className={styles.countdownButton}              
                >
                   Ciclo encerrado                    
                  
                </button>
            
            ) : (
          

             isActive ? (
                <button 
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonStop}`}
                onClick={resetCountdown}
                >
                   Abandonar ciclo
                    
                  
                </button>
            ) : (

                <button 
                    type="button"
                    className={styles.countdownButton}
                    onClick={startCountdown}
                >
                    Iniciar um ciclo
                    
                  
                </button>
            )
                        
            )}

        </div>

    );
}