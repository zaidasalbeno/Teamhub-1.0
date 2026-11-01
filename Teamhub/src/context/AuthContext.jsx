import { useState } from 'react'
import { useNavigate } from 'react-router'
import AuthContext from './authContext.js'

const USERS_KEY = 'teamhub-users'
const SESSION_KEY = 'teamhub-user'

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(readSession)

  function startSession(account) {
    const sessionUser = { name: account.name, email: account.email, role: account.role }
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser))
    setUser(sessionUser)
    navigate(account.role === 'employer' ? '/employer' : '/employee', { replace: true })
  }

  function login({ email, password }) {
    const account = readUsers().find((item) => item.email === email.trim().toLowerCase() && item.password === password)
    if (!account) return { error: 'Email or password is incorrect.' }
    startSession(account)
    return { error: '' }
  }

  function register({ name, email, password, role }) {
    const normalizedEmail = email.trim().toLowerCase()
    if (!name.trim() || !normalizedEmail || !password) return { error: 'Please complete all fields.' }
    if (!['employer', 'employee'].includes(role)) return { error: 'Choose an account type.' }
    const users = readUsers()
    if (users.some((item) => item.email === normalizedEmail)) return { error: 'An account with this email already exists.' }

    const account = { name: name.trim(), email: normalizedEmail, password, role }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, account]))
    startSession(account)
    return { error: '' }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
    navigate('/login', { replace: true })
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}