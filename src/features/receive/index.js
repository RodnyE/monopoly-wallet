
import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import { useProfileStore } from '@/stores'
import { transactionCategories } from '@/utils/transaction'

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
  const handleScanner = (text, result) => {
    let [type, targetName, amount, _limit] = text.split(',');
    
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
            onResult={handleScanner}
          />
        </div>
      }
      {transaction &&
        <div className='pt-4 flex flex-col items-center'>
          <p> Enhorabuena! </p>
          <p> De {transaction.targetName} acabas de recibir: </p>
          <div className='flex items-center text-xl'> 
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