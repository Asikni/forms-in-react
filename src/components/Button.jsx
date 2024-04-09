function Button({ children, onclick,classname, disabled, type }) {
  return (
    <div>
      <button onClick={onclick} className={classname} disabled={disabled} type={type}>{children} </button>
    </div>
  );
}

export default Button;
