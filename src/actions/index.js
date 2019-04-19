const TOOGLE_EDIT = 'TOOGLE_EDIT';
const HANDLE_DELETE = 'HANDLE_DELETE';

export const toogleEdit = (action) => {
    return {
        type: TOOGLE_EDIT,
        action
      }
}

export const handleDelete = (id) => {
  return {
      type: HANDLE_DELETE,
      id
    }
}
