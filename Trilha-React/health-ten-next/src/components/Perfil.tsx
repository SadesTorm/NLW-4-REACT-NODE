import styles from '../styles/components/Perfil.module.css';

export function Perfil(){
    return(
        <div className={styles.perfilContainer}>
            <img src="logo-robo.png" alt="Foto de Perfil"/>
            <div>
                <strong>Paulo Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );

}