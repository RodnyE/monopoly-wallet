
import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import { useProfileStore } from '@/stores'
import { transactionCategories } from '@/utils/transaction'

import { SiCashapp } from 'react-icons/si'
import { Navbar, Button, QRScanner } from '@/ui'

function ReceivePage() {
  const [location, navigate] = useLocation();
  const [transaction, setTransaction] = useState(null);
  const addMoney = useProfileStore(s => s.addMoney);
  const addLog = useProfileStore(s => s.addLog);
  
  const category = transactionCategories.receive;
  
  useEffect(() => {
    if (!transaction) return;
    addMoney(transaction.amount);
    addLog({
      type: 'receive',
      message: category.actionText + ' $' + transaction.amount + ' de ' + transaction.targetName,
    });
  }, [transaction]);
  
  /**
   * 
   */
  const handleScanner = ([{ rawValue }]) => {
    let [type, targetName, amount, _limit] = rawValue.split(',');
    
    if (_limit || !type || !targetName || !amount) return alert('Este QR no es valido');
    setTransaction({
      type,
      targetName,
      amount: parseInt(amount, 10),
    });
  }

  return (
    <div className='flex flex-col'>
      <Navbar bg={category.bg}>
        {category.name}
      </Navbar>

      {!transaction &&
        <div className='pt-4 flex flex-col items-center'>
          <div className='m-2'>
            <Button bg={category.bg} onClick={() => navigate('/wallet')}> Atrás </Button>
          </div>
          
          <QRScanner
            onScan={handleScanner}
          />
        </div>
      }
      {transaction &&
        <div className='pt-4 text-xl flex flex-col items-center'>
          <div className='m-2'>
            <Button bg={category.bg} onClick={() => navigate('/wallet')}> Atrás </Button>
          </div>
          <p className='m-3 font-bold'> Enhorabuena! </p>
          <p> De {transaction.targetName} acabas de recibir: </p>
          <div className='space-x-2 text-green-700 flex items-center text-4xl'> 
            <SiCashapp/>
            <p> {transaction.amount} </p>
          </div> 
          
        </div>
      }
    </div>
  )
}

export {
  ReceivePage,
}