import "./Badge.css";

// Reusable badge accepts type prop to control colour
let Badge = ({ type, children }) => {
  return (
    <span className={`badge badge-${type}`}>
      {children}
    </span>
  );
};

export default Badge;
