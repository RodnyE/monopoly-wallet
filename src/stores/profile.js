
import create from 'zustand'

export const useProfileStore = create((set, get) => ({
  name: null,
  type: null, // user | bank
  money: 0,
  initialMoney: 1500,
  logs: [],
  
  setName: (name) => set({name}),
  setType: (type) => set({type}),
  setInitialMoney: (initialMoney) => set({
    money: initialMoney,
    initialMoney,
  }),
  
  addMoney: (amount) => set({
    money: get().money + amount,
  }),
  
  addLog: (log) => {
    let logs = [log, ...get().logs];
    
    // size limit 
    if (logs.length > 20) logs.pop();
    
    set({logs});
  },
}));