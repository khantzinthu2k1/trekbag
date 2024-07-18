const Button = ({ onClick, buttonType, children }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
