import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
export default function Work() {
  return <Paper className="content-card" elevation={0}>
    <Typography variant="overline" color="primary">Opportunities</Typography>
    <Typography component="h1" variant="h4">Find your next step</Typography>
    <Typography color="text.secondary">Explore new opportunities, or visit the employer and employee pages to get started from your side of the team.</Typography>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
      <Button component={RouterLink} to="/employee" variant="contained">For employees</Button>
      <Button component={RouterLink} to="/employer">For employers</Button>
      <Button component={RouterLink} to="/about">About Teamhub</Button>
    </Stack>
  </Paper>
}