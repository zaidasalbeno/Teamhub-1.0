import { Button, Paper, Typography } from '@mui/material'
import { useAuth } from '../hooks/useAuth.js'
export default function Employer() {
  const { user, logout } = useAuth()
  return <Paper className="content-card" elevation={0}><Typography variant="overline" color="primary">Employer dashboard</Typography><Typography component="h1" variant="h4">Welcome, {user.name}</Typography><Typography color="text.secondary">You’re signed in as an employer ({user.email}).</Typography><Button onClick={logout} variant="outlined">Logout</Button></Paper>
}