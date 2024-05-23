
import { cx } from 'classix'

function Navbar({ bg, children }) {
  return (
    <nav className={cx(
      'relative self-start w-full p-5 font-bold text-xl text-primary shadow',
      bg || 'bg-primary'
    )}>
      { children }
    </nav>
  )
}

export { Navbar }