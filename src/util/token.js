import Cookies from 'js-cookie'

const pcTokenName = 'token'

export function setToken (token) {
  Cookies.set(pcTokenName, token)
}

export function getToken () {
  return Cookies.get(pcTokenName)
}

export function removeToken () {
  Cookies.remove(pcTokenName)
}

export { pcTokenName }