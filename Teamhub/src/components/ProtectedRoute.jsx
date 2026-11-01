import { Navigate } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (user.role !== role) return <Navigate to={user.role === 'employer' ? '/employer' : '/employee'} replace />
  return children
}