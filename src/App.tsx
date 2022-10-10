import { PrivateRoutes, PublicRoutes } from '@/models'
import { store } from '@/redux'
import { LayoutContainer } from '@/styled-components'
import { RoutesWithNotFound } from '@/utilities'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'

const Admin = lazy(() => import('@/pages/Admin/Admin'))
const Home = lazy(() => import('@/pages/Home/Home'))

function App() {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <Provider store={store}>
        <LayoutContainer>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
              <Route path={PublicRoutes.HOME} element={<Home name={'react'} />} />
              <Route path={`${PrivateRoutes.ADMIN}/*`} element={<Admin />} />
            </RoutesWithNotFound>
          </BrowserRouter>
        </LayoutContainer>
      </Provider>
    </Suspense>
  )
}

export default App
