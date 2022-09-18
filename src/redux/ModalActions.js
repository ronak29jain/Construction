import { CLOSE_MODAL, CREATE_NEW_PROJECT, OPEN_MODAL, PROJECT_NAME, PROJECT_ID, SET_TEST, SET_PROJECTS } from "./constants"
import db from '../firebase'
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, query, orderBy } from "firebase/firestore";

export const openModal = () => {
  return {
    type: OPEN_MODAL
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const createProject = (newProjectData) => {
  return {
    type: CREATE_NEW_PROJECT,
    payload: newProjectData
  }
}

export const projectName = (name) => {
  return {
    type: PROJECT_NAME,
    payload: name
  }
}

export const projectId = (id) => {
  return {
    type: PROJECT_ID,
    payload: id
  }
}

export const settest = (data) => {
  return {
    type: SET_TEST,
    payload: data
  }
}

export const setProjects = (data) => {
  return {
    type: SET_PROJECTS,
    payload: data
  }
}

export const getProjects = () => {
  return async(dispatch) => {
    
    const userDoc = doc(db, 'projectId', 'latest')
    await getDoc(userDoc)
      .then(response => {
        // console.log('getDocs response:', response.data().id)
        dispatch(projectId(response.data().id))
      })
    
    const issuesCollection = collection(db, "test")
    const issuesCollectionRef = query(issuesCollection, orderBy("id"));
    await getDocs(issuesCollectionRef)
      .then(response => {
        const data = response.docs.map((doc) => ({...doc.data()}) );
        console.log('this is the data fetched from firebase: ', data)
        dispatch(settest(data))
        dispatch(setProjects(data))
      })
      .catch(err => {
        console.log("Error in the ", err.message)
        // const errrorMsg = err.message
        // dispatch(fetchUsersfailure(errrorMsg))
      })
  }
}

export const addProject = (newProjectData) => {
  return async(dispatch) => {
    console.log('addProject Action is running.')

    const userDoc = doc(db, 'projectId', 'latest')
    const updatedfield = {
      id: newProjectData.id + 1,
    }
    await updateDoc(userDoc, updatedfield)
      // .then(() => {setUpdateIssues(!updateIssues);})

    const issuesConllectionRef = collection(db, "test")
    await addDoc(issuesConllectionRef, newProjectData)
      .then(() => {
        console.log("New Project Data is Added: ", newProjectData);
        dispatch(getProjects())
      })
  }
}