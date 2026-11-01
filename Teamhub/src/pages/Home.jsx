import { Button, Paper, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
export default function Home() { return <Paper className="hero-card" elevation={0}><Typography variant="overline" color="primary">A better way to work together</Typography><Typography component="h1" variant="h3">Build your next opportunity with Teamhub</Typography><Typography color="text.secondary">Connect talented people and teams in one simple place.</Typography><Button component={RouterLink} to="/work" variant="contained" size="large">Explore work</Button></Paper> }
