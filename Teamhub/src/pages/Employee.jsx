import { useEffect, useState } from 'react'
import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import { useAuth } from '../hooks/useAuth.js'

const starterTasks = [
  { id: 'profile', title: 'Complete your profile', description: 'Add the details that help teams get to know you.', status: 'Not started' },
  { id: 'skills', title: 'Review your skills', description: 'Make sure your experience and skills are up to date.', status: 'Not started' },
  { id: 'opportunities', title: 'Explore opportunities', description: 'Browse work that matches your goals.', status: 'Not started' },
]
const statuses = ['Not started', 'In progress', 'Completed']

export default function Employee() {
  const { user, logout } = useAuth()
  const taskKey = `teamhub-tasks-${user.email}`
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem(taskKey)) || starterTasks } catch { return starterTasks }
  })

  useEffect(() => { localStorage.setItem(taskKey, JSON.stringify(tasks)) }, [taskKey, tasks])

  function updateStatus(taskId, status) {
    setTasks((current) => current.map((task) => task.id === taskId ? { ...task, status } : task))
  }

  return <Stack spacing={3}>
    <Paper className="content-card dashboard-heading" elevation={0}>
      <Typography variant="overline" color="primary">Employee dashboard</Typography>
      <Typography component="h1" variant="h4">Welcome, {user.name}</Typography>
      <Typography color="text.secondary">Here are your assigned starter tasks. Update each status as you make progress.</Typography>
      <Button onClick={logout} variant="outlined">Logout</Button>
    </Paper>
    <section aria-labelledby="tasks-heading">
      <Typography id="tasks-heading" component="h2" variant="h5" sx={{ mb: 2 }}>Your tasks</Typography>
      <div className="task-list">
        {tasks.map((task) => <Card key={task.id} variant="outlined" className="task-card"><CardContent className="task-content">
          <div><Typography component="h3" variant="h6">{task.title}</Typography><Typography color="text.secondary">{task.description}</Typography></div>
          <FormControl size="small" className="task-status"><InputLabel id={`${task.id}-status-label`}>Status</InputLabel><Select labelId={`${task.id}-status-label`} label="Status" value={task.status} onChange={(event) => updateStatus(task.id, event.target.value)}>{statuses.map((status) => <MenuItem key={status} value={status}>{status}</MenuItem>)}</Select></FormControl>
        </CardContent></Card>)}
      </div>
    </section>
  </Stack>
}