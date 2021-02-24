import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>                
                <div style={{width: '33%'}} >

                <span className={styles.currentExperience} style={{ left: '33%'}}>
                    300xp
                </span>
                
                </div>

            </div>
            <span>600 xp</span>





        </header>



    );

}