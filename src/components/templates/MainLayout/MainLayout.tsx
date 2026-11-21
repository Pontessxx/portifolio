import { Outlet } from 'react-router-dom'
import { Header } from '../../organisms/Header/Header'
import './MainLayout.scss'

export function MainLayout() {

  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content">
        <Outlet />
      </main>
    </div>
  )
}