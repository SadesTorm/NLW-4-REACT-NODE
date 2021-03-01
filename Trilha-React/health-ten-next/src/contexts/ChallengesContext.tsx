import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';


interface Challenge {
    type: 'body' | 'yey';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengeCompleted: number;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completedChallenge: () => void;
    SetLevelUpModalOpen: ()=> void ;
}

interface ChallengesProviderProps {
    children: ReactNode
    level: number,
    currentExperience: number,
    challengeCompleted: number

}

export const ChallengesContext = createContext({} as ChallengesContextData);

/*
rest = (rest operator ) 
objetivo=> pegar todo o resto da propriedade e utilizar em rest (como se fosse um objeto)
*/
export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);


    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen,setIsLevelUpModalOpen] = useState(false); 

    // calculo de level baseado no calculo de rpg
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    // array vazio a function e executada apaenas uma vez quando componete for exibido em tela
    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {

        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengeCompleted', String(challengeCompleted));

    }, [level, currentExperience, challengeCompleted])



    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }
    function SetLevelUpModalOpen(){
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge() {
        console.log('new challeng');
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        new Audio('/notification.mp3').play();
        if (Notification.permission === 'granted') {
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }

        setActiveChallenge(challenge);



    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completedChallenge() {
        if (!activeChallenge) {

            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);
        

    }




    return (
        <ChallengesContext.Provider
            value={{
                level,
                levelUp,
                currentExperience,
                challengeCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completedChallenge,
                SetLevelUpModalOpen,
            }}

        >
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}