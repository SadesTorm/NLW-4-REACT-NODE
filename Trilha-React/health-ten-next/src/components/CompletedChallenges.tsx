import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallengens(){

    const {challengeCompleted} = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>


    );
}