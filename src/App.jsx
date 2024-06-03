
import { Router, Route, Switch } from 'wouter'
import { useHashLocation } from "wouter/use-hash-location"

import { HomePage } from '@/features/home'
import { WalletPage } from '@/features/wallet'
import { HistoryPage } from '@/features/history'
import { TransferPage } from '@/features/transfer'
import { ReceivePage } from '@/features/receive'

function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/wallet' component={WalletPage} />
        <Route path='/wallet/history' component={HistoryPage} />
        <Route path='/wallet/(receive|earn)' component={ReceivePage} />
        <Route path='/wallet/transfer/:type?' component={TransferPage} />
      </Switch>
    </Router>
  )
}

export default App;