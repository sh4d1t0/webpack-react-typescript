import { Props } from '@/utilities'
import { Route, Routes } from 'react-router-dom'

function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default RoutesWithNotFound
