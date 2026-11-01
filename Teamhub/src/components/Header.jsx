import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
const links = [['Home', '/'], ['About', '/about'], ['Work', '/work']]
export default function Header() {
  const { user, logout } = useAuth()
  const dashboardPath = user?.role === 'employer' ? '/employer' : '/employee'
  return <AppBar position="static" color="inherit" elevation={0}><Toolbar className="site-toolbar">
    <Typography component={RouterLink} to="/" variant="h6" className="brand">Teamhub</Typography>
    <nav className="main-nav" aria-label="Main navigation">{links.map(([label, path]) => <Button key={path} component={RouterLink} to={path} color="inherit">{label}</Button>)}{user && <Button component={RouterLink} to={dashboardPath} color="inherit">Dashboard</Button>}</nav>
    <div className="auth-nav">{user ? <><Typography variant="body2" className="header-user">{user.name}</Typography><Button onClick={logout} color="inherit">Logout</Button></> : <><Button component={RouterLink} to="/login" color="inherit">Login</Button><Button component={RouterLink} to="/register" variant="contained">Register</Button></>}</div>
  </Toolbar></AppBar>
}