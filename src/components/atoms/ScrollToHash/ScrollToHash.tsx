import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// O React Router não rola até o #id sozinho. Aqui rolamos até a seção do hash
// (ex.: /#sobre) e, em rotas sem hash, voltamos ao topo.
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    // espera o render da página terminar (a seção pode ainda não existir ao trocar de rota)
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key]) // key muda a cada clique, então clicar no mesmo link de novo também rola

  return null
}
