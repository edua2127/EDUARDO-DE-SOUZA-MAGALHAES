import './Button.css';

function Button({ onClickFunction, children, id, addClassName }) {
  return (
    <button
      data-testid="botao-test-id"
      type='button'
      className={`standard-button ${addClassName}`}
      onClick={onClickFunction}
      id={id}
    >
      { children }
    </button>
  );
}

export default Button;
