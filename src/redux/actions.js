import { SET_RACES } from './actionTypes'

export const getRaces = () => async dispatch => {
  const wbs = await new WebSocket('ws://testapi.marit.expert:3004');
  wbs.onopen = e => {
    wbs.send({cmd: "get_list" })
  }

  wbs.onmessage = e => {
    const data = JSON.parse(e.data)
    const dataArr = Object.values(data)
    dispatch({type: SET_RACES, payload:dataArr})
  }
}