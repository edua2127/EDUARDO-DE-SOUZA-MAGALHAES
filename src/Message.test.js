import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Message  from "./components/Message/Message";

function renderizaPagina(element) {
    render(
        <BrowserRouter>
            { element }
        </BrowserRouter>
    );
}


describe("testa o componente mensagem", () => {
    it("verifica o componente mensagem renderiza na tela", ()=> {
        renderizaPagina(<Message />)
        const mensagem = screen.getByTestId("mensagem-test-id")
        expect(mensagem).toBeInTheDocument();
    })
    it("verifica se a mensagem é renderizada", ()=> {
        renderizaPagina(<Message>Teste</Message>)
        const mensagem = screen.getByTestId("mensagem-test-id")
        expect(mensagem).toBeInTheDocument();
        expect(mensagem).toHaveTextContent("Teste")
    })
})