
import { useState } from 'react'
import { useProfileStore } from '@/stores'
import { transactionCategories } from '@/utils/transaction'
import { Wrap, Button, TextField } from '@/ui'

export default function WalletForm({ onSubmit }) {
  const profileType = useProfileStore(s => s.type);
  const setProfileType = useProfileStore(s => s.setType);
  const setProfileName = useProfileStore(s => s.setName);
  const setProfileMoney = useProfileStore(s => s.setInitialMoney);

  const [nameField, setNameField] = useState('');
  const [moneyField, setMoneyField] = useState(1500);

  const handleSubmit = () => {
    if (!nameField || moneyField < 50) return;

    setProfileName(nameField);
    setProfileType('user');
    setProfileMoney(moneyField);

    onSubmit && onSubmit();
  }

  return (
    <main className='p-4 flex flex-col items-center'>
      <h1 className='m-3 text-lg font-bold'> Nueva Billetera </h1>

      {!profileType &&
        <div className='m-3 flex space-x-2'>
          <Button onClick={() => setProfileType('user')}>
            <div className='text-2xl space-y-2 flex flex-col items-center'>
              <transactionCategories.rental.Icon />
              <div> Billetera </div>
            </div>
          </Button>

          <Button
            onClick={() => {
              setProfileType('bank');
              setProfileName('bank');
              setProfileMoney(Infinity);
            }}
          >
            <div className='text-2xl space-y-2 flex flex-col items-center'>
              <transactionCategories.tax.Icon />
              <div> Banco </div>
            </div>
          </Button>

        </div>
      }
      {profileType === 'user' &&

        <Wrap>
          <div className='m-3 space-y-3'>
            <TextField
              label='Propietario'
              value={nameField}
              onInput={e => setNameField(e.target.value)}
            />

            <TextField
              label='Cantidad de dinero inicial'
              type='number'
              value={moneyField}
              onInput={e => setMoneyField(parseInt(e.target.value))}
            />
          </div>

          <div className='m-3'>
            <Button onClick={handleSubmit}>
              Crear billetera
            </Button>
          </div>
        </Wrap>
      }
    </main>
  )
}