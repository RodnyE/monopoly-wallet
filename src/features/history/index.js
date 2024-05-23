
import { cx } from 'classix'
import { useLocation } from 'wouter'
import { useProfileStore } from '@/stores'
import { transactionCategories } from '@/utils/transaction'

import { SiCashapp } from 'react-icons/si';
import { Navbar, Button } from '@/ui'

function HistoryPage () {
  const [location, navigate] = useLocation();
  const profileName = useProfileStore(s => s.name);
  const logs = useProfileStore(s => s.logs);

  // redirect
  if (!profileName) return navigate('/wallet');

  return (
    <div className='flex flex-col'>
      <Navbar> Historial de operaciones </Navbar>

      <div className='m-3 self-center'>
        <Button onClick={() => navigate('/wallet')}>
          Atrás
        </Button>
      </div>

      <div className='p-4 flex flex-col items-stretch text-xl font-bold'>
        {logs.length > 0 ?
          logs.map((log, index) => {
            let category = transactionCategories[log.type];
           
            return (
              <div
                key={index}
                className={cx(
                  'p-1 text-2xl flex items-center space-x-2',
                  logs.length - 1 > index && 'border-b border-gray-400',
                  category.color,
                )}
              >
                <div className='mr-2 text-4xl'>
                  <category.Icon/>
                </div>
                <div> {log.message} </div>
              </div>
            )
          })
          :
          (<p className='font-bold text-lg self-center m-6'> (Sin operaciones aún) </p>)
        }
      </div>
    </div>
  )
}

export {
  HistoryPage
}