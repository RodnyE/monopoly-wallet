
import { useLocation } from 'wouter'
import { useProfileStore } from '@/stores'
import { transactionCategories } from '@/utils/transaction'
import { cx } from 'classix'

import { SiCashapp } from 'react-icons/si';
import { Wrap } from '@/ui'

/**
 * 
 */
function Main() {
  const [location, navigate] = useLocation();
  const profileType = useProfileStore(s => s.type);
  const currentMoney = useProfileStore(s => s.money);
  const initialMoney = useProfileStore(s => s.initialMoney);

  return (
    <div className='w-screen overflow-hidden flex flex-col '>

      {/* Money view */}
      <div className={cx(
        'self-center my-16 flex items-center space-x-3 text-5xl font-bold',
        'p-6 rounded-3xl text-white',
        currentMoney > Math.ceil(initialMoney * 0.1) || profileType === 'bank' ? 
          'bg-lime-600' : 
          'bg-red-600'
      )}>
        {profileType !== 'bank' ?
          <Wrap>
            <SiCashapp />
            <p> {currentMoney} </p>
          </Wrap>
          :
          <Wrap>
            <transactionCategories.tax.Icon />
            <p> Banco </p>
          </Wrap>
        }
      </div>

      {/* Operations */}
      <div className='flex items-stretch justify-center flex-wrap'>
        {(profileType !== 'bank' ?
          Object.keys(transactionCategories) :
          ['history', 'receive', 'transfer']
        )
          .map(type => {
            const category = transactionCategories[type];
            return (
              <div
                key={type}
                className={cx(
                  'm-2 flex-1',
                  'p-2 rounded-xl flex flex-col text-center items-center justify-center text-white shadow',
                  category.bg,
                )}
                onClick={() => navigate(category.location)}
              >
                <div className='text-2xl'>
                  <category.Icon />
                </div>
                <div className='font-bold'> {category.name} </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Main;