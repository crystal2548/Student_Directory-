import "./Button.css";

let Button = ({ variant, size, onClick, children, type, disabled }) => {
  // Set defaults if not passed
  let btnVariant = variant || "primary";
  let btnSize = size || "md";
  let btnType = type || "button";

  return (
    <button
      type={btnType}
      className={`btn btn-${btnVariant} btn-${btnSize}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
