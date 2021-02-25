import { useState,useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    
    const [time,setTime] = useState(0.05 * 60);
    const [isActive,setIsActive] = useState(false);
    const [hasFinished, setHasFineshd] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //se a string so conter um caracter, pega o começo e add o 0 (padStart) depois divide (.split(''))
    const [minuteLeft,minuteRigth] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRigth] = String(seconds).padStart(2,'0').split('');

    //pegando valores de outros componets
    const { startNewChallenge } = useContext(ChallengesContext);


    function resetCountdown(){

        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);

    }



    function startCountdown(){
        setIsActive(true)

    }

    useEffect(() => {
        if(isActive && time > 0){
                countdownTimeout = setTimeout(()=>{
                setTime(time - 1);
            }, 1000)
        }else if(isActive && time == 0){
            console.log('finalizou');
            setHasFineshd(true);
            setIsActive(false);
            startNewChallenge();
        }
        
    }, [isActive,time])

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