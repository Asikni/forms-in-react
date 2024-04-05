function Button({ children, onclick }) {
  return (
    <div>
      <button onClick={onclick}>{children}</button>
    </div>
  );
}

export default Button;
