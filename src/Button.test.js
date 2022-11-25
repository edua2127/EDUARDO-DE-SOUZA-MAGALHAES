import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Button from './components/Button/Button';

function renderizaPagina(element) {
    render(
        <BrowserRouter>
            { element }
        </BrowserRouter>
    );
}

describe("testa o componente mensagem", () => {
    it("verifica se o componente Button renderiza na tela", ()=> {
        renderizaPagina(<Button />)
        const button = screen.getByTestId("botao-test-id")
        expect(button).toBeInTheDocument();
    })
    it("verifica se o conteudo do botao é renderizado", ()=> {
        renderizaPagina(<Button>Teste</Button>)
        const button = screen.getByTestId("botao-test-id")
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Teste")
    })
})