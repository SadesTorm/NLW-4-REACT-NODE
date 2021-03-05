import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Perfil.module.css';

export function Perfil(){

    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.perfilContainer} >
            <img src="logo-robo.png" alt="Foto de Perfil"/>
            <div>
                <strong>Paulo Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );

}