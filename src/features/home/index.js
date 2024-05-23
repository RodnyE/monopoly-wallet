
import { useLocation } from 'wouter'

import { useNavStore } from '@/stores'
import { Button } from '@/ui'

import monopolyLogoImg from '@/assets/monopoly-logo.png'

function HomePage () { 
  const [location, navigate] = useLocation();
  const setNavHistory = useNavStore(s => s.setHistory);
  
  return (
    <div className='h-full flex flex-col items-center md:justify-center'> 
      <img 
        src={monopolyLogoImg}
        className='m-6 w-64'
      />
      
      <main className='pb-16 sm:flex-grow flex flex-col justify-center'> 
        <div className='flex flex-col space-y-2'>
          <Button
            children='Nueva Billetera'
            onClick={() => navigate('/wallet')}
          />
          <Button> Acerca de... </Button>
        </div>
      </main>
    </div>
  )
}

export { 
  HomePage,
}