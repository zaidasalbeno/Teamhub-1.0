import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
export default function About() {
  return <Paper className="content-card" elevation={0}>
    <Typography variant="overline" color="primary">About us</Typography>
    <Typography component="h1" variant="h4">Good work starts with good connections</Typography>
    <Typography color="text.secondary">Teamhub helps people find meaningful work and helps employers meet the people who can make a difference. We keep the experience clear, useful, and focused on bringing the right people together.</Typography>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
      <Button component={RouterLink} to="/work" variant="contained">Explore work</Button>
      <Button component={RouterLink} to="/">Back to home</Button>
    </Stack>
  </Paper>
}