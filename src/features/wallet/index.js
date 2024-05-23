
import { useState } from 'react'
import { useProfileStore } from '@/stores'

import WalletLogin from './components/Login.jsx'
import WalletMain from './components/Main.jsx'

import { Navbar } from '@/ui'

function WalletPage() {
  const profileName = useProfileStore(s => s.name);

  return (
    <div className='flex flex-col items-center'>
      {profileName !== 'bank' &&
        <Navbar>
          {!profileName ?
            'Bienvenido' :
            'Billetera de ' + profileName
          }
        </Navbar>
      }
      {!profileName ?
        (<WalletLogin />) :
        (<WalletMain />)
      }
    </div>
  )
}

export {
  WalletPage,
}