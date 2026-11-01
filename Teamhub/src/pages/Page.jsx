import { Paper, Typography } from '@mui/material'
export default function Page({ title, description }) { return <Paper className="content-card" elevation={0}><Typography component="h1" variant="h4">{title}</Typography><Typography color="text.secondary">{description}</Typography></Paper> }
