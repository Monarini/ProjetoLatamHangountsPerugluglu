import store from '../store'

const selector: any = store.getState()

/*
*  Retorna usuários ou lista de usuários;
*/
export function getUsers (users: any) {
  if (users instanceof Array) {
    return selector.users.filter((user: any) => (users.indexOf(user._id) !== -1))
  }
  return selector.users.find((user: any) => user._id === parseInt(users))
}
