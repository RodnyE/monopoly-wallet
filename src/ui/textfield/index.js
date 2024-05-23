
import './index.css'

function TextField({
  label,
  type,
  value,
  disabled,
  onInput,
}) {
  return (
    <div className="relative">
      <input 
        autoComplete="off" 
        className="textfield"
        required
        type={type || 'text'}
        value={value}
        onInput={onInput}
      />
      <label className="textfield-label">
        {label}
      </label>
    </div>
  );
}

export {
  TextField,
}