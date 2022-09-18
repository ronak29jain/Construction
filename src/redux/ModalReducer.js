import { CLOSE_MODAL, CREATE_NEW_PROJECT, OPEN_MODAL, PROJECT_ID, PROJECT_NAME, SET_PROJECTS, SET_TEST } from "./constants";
import { projectsdata } from '../components/Data'

const initialState = {
  displayModal: false,
  allprojects: projectsdata,
  projects: [],
  // project: {a: 'b'},
  name: '',
  id: 0,
  test: [],
  test1: ''
}

const ModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MODAL: 
      return {
        ...state,
        displayModal: true
      }
    case CLOSE_MODAL: 
      return {
        ...state,
        displayModal: false
      }
    case CREATE_NEW_PROJECT:
      // console.log(state.allprojects)
      // console.log(state.project)
      // console.log([...state.allprojects,  state.project])
      return {
        ...state,
        displayModal: false,
        // allprojects: [...state.allprojects,  state.project],
        allprojects: [...state.allprojects,  action.payload],
        id: state.id + 1,
        name: ''
         // project: state.project
      }
    case PROJECT_NAME:
      return {
        ...state,
        name: action.payload
      }
    case PROJECT_ID:
      return {
        ...state,
        id: action.payload
      }
    case SET_TEST:
      return {
        ...state,
        test: action.payload
      }
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    default: return state
  }
}

export default ModalReducer;