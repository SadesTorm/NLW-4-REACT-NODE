import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CowntodownContextData{

    resetCountdown: () => void,
    startCountdown: () => void,
    useEffect,
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean

}


interface CowntodownProviderProps{
    children: ReactNode
}

export const CowntodownContext = createContext({} as CowntodownContextData);

export function CountdownProvider( { children } : CowntodownProviderProps ){

    //pegando valores de outros componets
    const { startNewChallenge } = useContext(ChallengesContext);
    
    const [time,setTime] = useState(0.05 * 60);
    const [isActive,setIsActive] = useState(false);
    const [hasFinished, setHasFineshd] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    let countdownTimeout: NodeJS.Timeout;
 

    function resetCountdown(){

        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
        setHasFineshd(false);

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

    return(
        <CowntodownContext.Provider 
        value={{
            resetCountdown,
            startCountdown,
            useEffect,
            minutes,
            seconds,
            hasFinished,
            isActive,

        }}
        >
            {children}
        </CowntodownContext.Provider>
    );
}