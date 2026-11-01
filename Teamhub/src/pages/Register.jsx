import { useState } from 'react'
import { Alert, Button, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
export default function Register() {
  const { register } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'employee' })
  const [error, setError] = useState('')
  function submit(event) { event.preventDefault(); setError(register(form).error) }
  return <Paper component="form" className="content-card auth-card" elevation={0} onSubmit={submit}>
    <Typography component="h1" variant="h4">Create your account</Typography>
    <Typography color="text.secondary">Join Teamhub and get started today.</Typography>
    {error && <Alert severity="error">{error}</Alert>}
    <TextField label="Name" autoComplete="name" required fullWidth value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
    <TextField label="Email" type="email" autoComplete="email" required fullWidth value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
    <TextField label="Password" type="password" autoComplete="new-password" required fullWidth value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
    <TextField select label="Account type" fullWidth value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })}><MenuItem value="employee">Employee</MenuItem><MenuItem value="employer">Employer</MenuItem></TextField>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center"><Button type="submit" variant="contained">Register</Button><Typography variant="body2">Already registered? <RouterLink to="/login">Login</RouterLink></Typography></Stack>
  </Paper>
}