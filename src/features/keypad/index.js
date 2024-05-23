
import { useState } from 'react'
import { cx } from 'classix'


const NumericKeypad = ({onInput}) => {
  const [value, setValue] = useState('');

  const handleKeyPress = (key) => {
    if (key === 'Delete') {
      setValue(value.slice(0, -1));
    } else if (key >= '0' && key <= '9') {
      setValue(value + key);
    }
    onInput(value);
  };

  return (
    <div className="flex flex-col items-center space-y-4"> 
      <div className="flex space-x-2">
        {Array(10).fill().map((_, index) => (
          <button
            key={index}
            className={cx(
              'w-16 h-16 rounded-lg shadow-md',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            )}
            onClick={() => handleKeyPress(index.toString())}
          >
            {index}
          </button>
        ))}
        <button
          className={cx(
            'w-16 h-16 rounded-lg shadow-md',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            'bg-red-500 text-white'
          )}
          onClick={() => handleKeyPress('Delete')}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export {
  NumericKeypad
}