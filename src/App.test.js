import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function renderizaPagina(element) {
  render(
      <BrowserRouter>
        { element }
      </BrowserRouter>
  );
}

describe("suite de teste que verifica se as paginas renderizam", ()=> {

  it("verifica se a pagina de login renderiza", () => {
    renderizaPagina(<Login />);
    const testId = screen.getByTestId("login-page");
    expect(testId).toBeInTheDocument();
  })

  it("verifica se a pagina main renderiza", () => {
    renderizaPagina(<Main />);
    const mainTestId = screen.getByTestId("main-page");
    expect(mainTestId).toBeInTheDocument(); 
  })
})

