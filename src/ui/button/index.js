
import { cx } from 'classix'
import './module.css'

function Button ({bg, onClick, children}) {
  return (
    <div 
      className={cx(
        'button shadow-lg',
        bg || 'bg-primary'
      )}
      onClick={onClick}
      children={children}
    />
  )
}

export { Button }