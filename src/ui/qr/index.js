
import QRCodeLib from 'react-qr-code'
import { Scanner as QRScannerLib } from '@yudiel/react-qr-scanner'

export const QRCode = ({className, value}) => {
  return (
    <div className='p-5 w-64 rounded-xl bg-white'>
      <QRCodeLib 
        className='w-full h-auto' 
        value={value}
      />
    </div>
  )
}

export const QRScanner = ({onScan}) => {
  return (
    <div className='p-2 rounded-xl bg-current w-64'>
      <QRScannerLib onScan={onScan}/>
    </div>
  )
}