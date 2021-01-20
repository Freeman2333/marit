import React,{useState} from 'react'
import { useDispatch} from 'react-redux';
import styles from './Race.module.css'
import Hobbit from '../assets/images/hobbit.jpg';
import Human from '../assets/images/human.jpg';
import Dworf from '../assets/images/dwarf.jpg';
import Elf from '../assets/images/elf.jpg';
import {DELETE_ITEM,CHANGE_PERSON_NAME} from '../redux/actionTypes'
import { ReactComponent as DeleteIcon } from '../assets/delete-icon.svg';
import { ReactComponent as AddIcon } from '../assets/plus-icon.svg';
import { ReactComponent as EditIcon } from '../assets/edit-icon.svg';
const raceImages = {
  Hobbit, Human, Elf, Dworf
}
const RacePerson = ({ racePerson }) => {
  const dispatch = useDispatch();
  const [personName, setPersonName] = useState(racePerson.name);
  const [editName, setEditName] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: CHANGE_PERSON_NAME, payload:{personName, racePerson}})
    setEditName(false)
  }
  const handleDelete = id =>dispatch({type: DELETE_ITEM, payload:id})
  return (
    <div key={racePerson.id}>
      <img className={styles.race_img} src={raceImages[racePerson.race]} alt={racePerson.race} />
      <h3>{racePerson.name}</h3>
      <div className={styles.btn_container}>
        <button>
          <AddIcon width="24" height="24"/>
        </button>
        <button onClick={()=>setEditName(true)}>
          <EditIcon width="24" height="24"/>
        </button>
        <button onClick={()=>{handleDelete(racePerson.id)}}>
          <DeleteIcon width="24" height="24"/>
        </button>
      </div>
      {editName ? (
        <form onSubmit={handleSubmit}>
          <input className={styles.name_input} type="text" value={personName} onChange={e => setPersonName(e.target.value)} />
        </form>
      ) : <div className={styles.form_placeholder}/>}
    </div>
  )
}

export default RacePerson
