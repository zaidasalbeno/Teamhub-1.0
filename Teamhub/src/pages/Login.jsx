import { useState } from 'react'
import { Alert, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'

export default function Login() {
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setError(login(form).error)
  }

  return <Paper component="form" className="content-card auth-card" elevation={0} onSubmit={handleSubmit}>
    <Typography component="h1" variant="h4">Welcome back</Typography>
    <Typography color="text.secondary">Login to continue to your Teamhub account.</Typography>
    {error && <Alert severity="error">{error}</Alert>}
    <TextField label="Email" type="email" autoComplete="email" required fullWidth value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
    <TextField label="Password" type="password" autoComplete="current-password" required fullWidth value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
    <Stack direction="row" spacing={1} alignItems="center"><Button type="submit" variant="contained">Login</Button><Typography variant="body2">New to Teamhub? <RouterLink to="/register">Create an account</RouterLink></Typography></Stack>
  </Paper>
}