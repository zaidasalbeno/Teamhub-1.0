import { Box, Button, Card, CardContent, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
const features = [['Find opportunities', 'Explore work that fits your skills and goals.'], ['Meet great people', 'Connect with teams and people ready to collaborate.'], ['Move forward', 'Keep your next career or project step in one place.']]
export default function Home() {
  return <Stack spacing={6}>
    <Paper className="hero-card" elevation={0}>
      <Typography variant="overline" color="primary">A better way to work together</Typography>
      <Typography component="h1" variant="h3">Build your next opportunity with Teamhub</Typography>
      <Typography color="text.secondary">Connect talented people and teams in one simple place.</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
        <Button component={RouterLink} to="/work" variant="contained" size="large">Explore work</Button>
        <Button component={RouterLink} to="/about" size="large">About Teamhub</Button>
      </Stack>
    </Paper>
    <Box component="section" aria-labelledby="home-about-title" className="home-section">
      <Typography id="home-about-title" component="h2" variant="h4">Work works better together</Typography>
      <Typography color="text.secondary" className="section-copy">Teamhub brings employers and employees together to discover useful opportunities and build stronger teams.</Typography>
      <Button component={RouterLink} to="/about">Learn more about us</Button>
    </Box>
    <Box component="section" aria-labelledby="features-title">
      <Typography id="features-title" component="h2" variant="h4" sx={{ mb: 2 }}>A simple place to get started</Typography>
      <div className="feature-grid">{features.map(([title, description]) => <Card key={title} variant="outlined" className="feature-card"><CardContent><Typography component="h3" variant="h6" gutterBottom>{title}</Typography><Typography color="text.secondary">{description}</Typography></CardContent></Card>)}</div>
      <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
        <Button component={RouterLink} to="/employer">I’m an employer</Button>
        <Button component={RouterLink} to="/employee">I’m looking for work</Button>
      </Stack>
    </Box>
  </Stack>
}