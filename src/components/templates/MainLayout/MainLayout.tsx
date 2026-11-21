import { Outlet } from 'react-router-dom'
import { Header } from '../../organisms/Header/Header'
import { ScrollToHash } from '../../atoms/ScrollToHash/ScrollToHash'
import './MainLayout.scss'

export function MainLayout() {

  return (
    <div className="main-layout">
      <ScrollToHash />
      <Header />
      <main className="main-layout__content">
        <Outlet />
      </main>
    </div>
  )
}