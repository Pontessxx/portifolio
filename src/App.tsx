import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/templates/MainLayout/MainLayout'
import  {Home}  from './pages/Home'
import  Projetos  from './pages/Projetos'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
      </Route>
    </Routes>
  )
}