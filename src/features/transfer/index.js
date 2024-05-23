
import { useState } from 'react'
import { useLocation, useParams, useSearch } from 'wouter'
import { useProfileStore } from '@/stores'
import { cx } from 'classix'
import { transactionCategories } from '@/utils/transaction'

import { SiCashapp } from 'react-icons/si';

import {
  Navbar,
  Button as UIButton,
  TextField,
  QRCode,
} from '@/ui'

function TransferPage() {
  const [location, navigate] = useLocation();
  const { type } = useParams();
  const [qrValue, setQRValue] = useState(null);
  const [amountField, setAmountField] = useState(0);

  const username = useProfileStore(s => s.name);
  const currentMoney = useProfileStore(s => s.money);
  const addMoney = useProfileStore(s => s.addMoney);
  const addLog = useProfileStore(s => s.addLog);

  // redirect
  if (!username) return navigate('/wallet');

  const category = transactionCategories[type || 'transfer'];
  
  /**
   * 
   */
  const handleSubmit = () => {
    if (amountField <= 0) return alert('El monto debe ser mayor que $0');

    addMoney(-amountField);
    addLog({
      type: type || 'transfer',
      message: category.actionText + ' $' + amountField,
      date: Date.now(),
    });

    setQRValue([
      type || 'transfer',
      username,
      amountField,
    ].join(','));
  }

  /**
   * Custom button 
   */
  const Button = (props) => <UIButton bg={category.bg} {...props} />

  // render
  return (
    <div className='flex flex-col items-center'>
      <Navbar bg={category.bg}>
        <div className='flex items-center'>
          <div 
            className={cx(
              'bg-body px-3 py-1 rounded-lg mr-2',
              category.color,
            )}
          >
            <category.Icon/>
          </div>
          <h1> {category.name} </h1>
        </div>
      </Navbar>

      {!qrValue &&
        <div className='flex flex-col items-center'>

          <div className='m-3'>
            <Button onClick={() => navigate('/wallet')}>
              Atrás
            </Button>
          </div>

          <div className='mt-5 flex flex-col'>
            <TextField
              type='number'
              label='Monto'
              value={amountField || ''}
              onInput={e => setAmountField(parseInt(e.target.value || 0, 10))}
            />
            <div className='self-end'>
              <Button onClick={handleSubmit}> Transferir </Button>
            </div>
          </div>
        </div>
      }

      {qrValue &&
        <div className='pt-4 text-xl font-bold flex flex-col items-center'>
          <p> Usted está transfiriendo </p>
          <div className='flex items-center space-x-1'>
            <SiCashapp />
            <p> {amountField} </p>
          </div>
          <div className='m-3'>
            <QRCode value={qrValue} />
          </div>

          <Button 
            onClick={() => {
              setQRValue(null);
              setAmountField('');
              navigate('/wallet');
            }}>
            Listo !
          </Button>
        </div>
      }
    </div>
  )
}

export {
  TransferPage
}