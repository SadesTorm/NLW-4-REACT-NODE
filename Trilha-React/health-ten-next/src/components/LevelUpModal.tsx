import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
    const {level,SetLevelUpModalOpen} = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
        <div className={styles.container}>

            <header>{level}</header>
            <strong>Parabéns</strong>
            <p>Voce atingiu um novo level.</p>

            <button type='button' onClick={SetLevelUpModalOpen}>
                <img src="/icons/close.svg" alt="Fechar Modal"/>
            </button>
        </div>
        </div>
    );
}