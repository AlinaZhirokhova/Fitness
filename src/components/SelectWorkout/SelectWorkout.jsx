import styles from './index.module.css';
import { Workout } from '../Workout/Workout';

// import { Link } from "react-router-dom";




export function SelectWorkout ({setModalActiveWorkout, workout}) {

    const training = [
        {id: 1, title: "Утренняя практика", description: "Йога на каждый день", day: "1 день", path: "/yDay1"},
        {id: 2, title: "Красота и здоровье", description: "Йога на каждый день", day: "2 день", path: "/yDay2"},
        {id: 3, title: "Асаны стоя", description: "Йога на каждый день", day: "3 день", path: "/yDay3"},
        {id: 4, title: "Растягиваем мышцы бедра", description: "Йога на каждый день", day: "4 день", path: "/yDay4"},
        {id: 5, title: "Гибкость спины", description: "Йога на каждый день", day: "5 день", path: "/yDay5"},
        {id: 6, title: "Гибкость спины", description: "Йога на каждый день", day: "5 день", path: "/yDay5"},   
    ]

    const stretching = [
        {id: 1, title: "Основы стретчинга", path: "/sDay5"},
        {id: 2, title: "Разогрев мыщц", path: "/sDay5"},
        {id: 3, title: "Разогрев мыщц 2.0", path: "/sDay5"},

    ]

    const bodyflex = [
        {id: 1, title: "Техника дыхания", path: "/bDay1"},
        {id: 2, title: "Тренировка мыщц бедер", path: "/bDay1"},
        {id: 3, title: "Тренировка мыщц ягодиц", path: "/bDay1"},

    ]


    return(
    <div className={styles.modal} onClick={() => setModalActiveWorkout(false)}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
            <h3 className={styles.header}>Выберите тренировку</h3>
            <div className={styles.list}>
            {
                (workout === 'Yoga') && (
                    training.map((item) => (            
                        <Workout key={item.id} title={item.title} description={item.description} day={item.day} path={item.path} />      
                      
                       ))
                )

            }

            {
                
                (workout === 'Stretching') && (
                    stretching.map((item) => (            
                        <Workout key={item.id} title={item.title} path={item.path}/>      
                      
                       ))
                )
                 
            }
           
           {
                
                (workout === 'Bodyflex') && (
                    bodyflex.map((item) => (            
                        <Workout key={item.id} title={item.title} path={item.path} />      
                      
                       ))
                )
                 
            }
            </div>

        </div>
    </div>
            

    )

}