
import create from 'zustand'

export const useNavStore = create((set, get) => ({
  current: 'home',
  history: ['home'],
  
  setHistory: (history) => set({
    history: history, 
    current: history[history.length - 1],
  }),
  
  goBack: (steps = 1) => {
    const history = [...get().history];
    history.pop();
    
    set({
      history,
      current: history[history.length - 1],
    });
  },
}));