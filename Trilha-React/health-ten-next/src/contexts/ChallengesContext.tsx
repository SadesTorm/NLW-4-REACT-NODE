import { createContext, ReactNode, useEffect, useState }from 'react';
import challenges from '../../challenges.json';

interface Challenge{
    type: 'body' | 'yey';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengeCompleted: number;
    startNewChallenge: () => void; 
    activeChallenge: Challenge;   
    resetChallenge: () => void;  
    experienceToNextLevel: number; 
    completedChallenge: () => void;
}

interface ChallengesProviderProps{
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider( { children } : ChallengesProviderProps ){

    // array vazio a function e executada apaenas uma vez quando componete for exibido em tela
    useEffect(() => {
        Notification.requestPermission();
    }, []);

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);
    

    const [activeChallenge,setActiveChallenge] = useState(null);
    
    // calculo de level baseado no calculo de rpg
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp(){
        setLevel(level + 1 );
    }

    function startNewChallenge(){
        console.log('new challeng');
        const randomChallengeIndex = Math.floor(Math.random()* challenges.length);
        const challenge = challenges[randomChallengeIndex];

        new Audio('/notification.mp3').play();
        if(Notification.permission === 'granted'){
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
        
        setActiveChallenge(challenge);

      
        
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completedChallenge(){
        if(!activeChallenge){

            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);

    }




    return(
        <ChallengesContext.Provider 
        value={ {
                level,
                levelUp,
                currentExperience,
                challengeCompleted,
                startNewChallenge,   
                activeChallenge,   
                resetChallenge,    
                experienceToNextLevel, 
                completedChallenge,
            } }
        
        >
            {children}
        </ChallengesContext.Provider>
    );
}