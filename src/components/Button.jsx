function Button({ children, onclick,classname }) {
  return (
    <div>
      <button onClick={onclick} className={classname}>{children} </button>
    </div>
  );
}

export default Button;
