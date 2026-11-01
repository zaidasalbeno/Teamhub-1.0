import { Button, Paper, Stack, Typography } from '@mui/material'
import { useAuth } from '../hooks/useAuth.js'
export default function Employee() {
  const { user, logout } = useAuth()
  return <Paper className="content-card" elevation={0}>
    <Typography variant="overline" color="primary">Employee dashboard</Typography>
    <Typography component="h1" variant="h4">Welcome, {user.name}</Typography>
    <Typography color="text.secondary">You’re signed in as an employee ({user.email}).</Typography>
    <Stack direction="row" spacing={1}><Button onClick={logout} variant="outlined">Logout</Button></Stack>
  </Paper>
}