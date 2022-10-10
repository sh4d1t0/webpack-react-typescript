import { PrivateRoutes } from '@/models'
import { TAdminProps } from '@/pages'
import { RoutesWithNotFound } from '@/utilities'
import { FC, lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/Admin/components/Dashboard'))

const Admin: FC<TAdminProps> = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  )
}

export default Admin
