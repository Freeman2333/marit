import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './RaceList.module.css';
import RacePerson from './components/Race';
import { ReactComponent as AddIcon } from './assets/plus-icon.svg';
const RacesList = () => {
  const races = ['Hobbit', 'Human', 'Dworf', 'Elf']
  const persons = useSelector(state => state.persons)
  return (
    <div className={styles.race_container}>
      {races.length > 0 ?
        races.map((race, i) => {
          const theRace = persons.filter(item => item.race === race)
          return (
            <div key={i} className={styles.race_item}>
              <h3 className={styles.raceName}>{race}</h3>
              <button className={styles.add_btn}>
                <AddIcon width="24" height="24"/>
              </button>
              <div className={styles.race_info}>
                {persons && (
                  theRace.map((racePerson,i) => {
                    return <RacePerson key={i} racePerson={racePerson}/>
                  })
                )}
              </div>
            </div>
          )
        }): null
    }
    </div>
  )
}

export default RacesList
