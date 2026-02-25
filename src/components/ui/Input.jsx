export default function Input({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  min,
  max,
  required,
  error,
  ...props
}) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        required={required}
        className={`input-field${error ? " input-field--error" : ""}`}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
