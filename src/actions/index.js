const TOOGLE_FROM = 'TOOGLE_FROM';
const HANDLE_ADD = 'HANDLE_ADD';
const HANDLE_DELETE = 'HANDLE_DELETE';
const HANDLE_EDIT = 'HANDLE_EDIT';

export const toogleForm = (action) => {
    return {
        type: TOOGLE_FROM,
        action
      }
}

export const handleAdd = (action) => {
  return {
      type: HANDLE_ADD,
      action
    }
}

export const handleDelete = (id) => {
  return {
      type: HANDLE_DELETE,
      id
    }
}

export const handleEdit = (action) => {
  return {
      type: HANDLE_EDIT,
      action
    }
}