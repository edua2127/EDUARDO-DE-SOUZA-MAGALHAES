import './Message.css';

function Message({ children, addClass }) {
  return (
    <div className={`message ${addClass}`} data-testid="mensagem-test-id">
      <p>{ children }</p>
    </div>
  );
}

export default Message;
