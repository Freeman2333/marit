import {SET_RACES} from './actionTypes'
import {DELETE_ITEM,CHANGE_PERSON_NAME} from '../redux/actionTypes'
let initialState = {persons:[]}


export const reducer = (state = initialState, { type, payload })=>{
  if (type === SET_RACES) {
    return {...state, persons: payload}
  }
  if (type === DELETE_ITEM) {
    let newPersons = state.persons.filter(person => person.id !== payload)
    return {...state, persons: newPersons}
  }
  if (type === CHANGE_PERSON_NAME) {
    const persons = state.persons.map(person => {
      if (person.id === payload.racePerson.id) {
        return { ...person, name : payload.personName }
      } else {
        return  {...person}
      }
    })
    return {...state, persons}
  }
  else {
    return state
  }
}

