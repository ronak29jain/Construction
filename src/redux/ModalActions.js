import { CLOSE_MODAL, CREATE_NEW_PROJECT, OPEN_MODAL, PROJECT_NAME, PROJECT_ID } from "./constants"

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