export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.sessionStorage.getItem("user")
    ? JSON.parse(window.sessionStorage.getItem("user"))
    : {}

const setUser = user =>
  window.localStorage.setItem("user", JSON.stringify(user))

export const handleLogin = (data) => {
    return setUser(data)
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
