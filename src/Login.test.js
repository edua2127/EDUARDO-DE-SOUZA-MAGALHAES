import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';


function renderizaPagina(element) {
    render(
        <BrowserRouter>
            { element }
        </BrowserRouter>
    );
}

describe("testa a pagina de login", () => {

    it("verifica se o campo email existe", ()=> {
        renderizaPagina(<Login />)
        const inputEmail = screen.getByTestId("email-test-id")
        expect(inputEmail).toBeInTheDocument();
    })

    it("verifica se o campo password existe", ()=> {
        renderizaPagina(<Login />)
        const inputPassword = screen.getByTestId("password-test-id")
        expect(inputPassword).toBeInTheDocument();
    })

    it("verifica se os campos podem ser preenchidos", ()=> {
        renderizaPagina(<Login />)

        const inputEmail = screen.getByTestId("email-test-id")
        expect(inputEmail).toBeInTheDocument();

        fireEvent.change(inputEmail, {
            target: {
                value: "eduardoAdmin@gmail.com"
            }
        })
        expect(inputEmail).toHaveValue("eduardoAdmin@gmail.com")

        const inputPassword = screen.getByTestId("password-test-id")
        expect(inputPassword).toBeInTheDocument();
        fireEvent.change(inputPassword, {
            target: {
                value: "Eduardo!@34qwt"
            }
        })
        expect(inputPassword).toHaveValue("Eduardo!@34qwt")
    })



    it("verifica se a mensagem de erro do email aparace", ()=> {
        renderizaPagina(<Login />)

        const inputEmail = screen.getByTestId("email-test-id")
        expect(inputEmail).toBeInTheDocument();

        const inputPassword = screen.getByTestId("password-test-id")
        expect(inputPassword).toBeInTheDocument();

        const botaoEntrar = screen.getByTestId("botao-test-id")
        expect(botaoEntrar).toBeInTheDocument()


        fireEvent.change(inputEmail, {
            target: {
                value: "eduardoAdmin"
            }
        })
        expect(inputEmail).toHaveValue("eduardoAdmin")


        fireEvent.change(inputPassword, {
            target: {
                value: "Eduardo!@34qwt"
            }
        })
        expect(inputPassword).toHaveValue("Eduardo!@34qwt")

        fireEvent.click(botaoEntrar)
        const mensagemErro = screen.getByText("Email ou senha em formato incorreto.")
        expect(mensagemErro).toBeInTheDocument()
    })

    it("verifica se a mensagem de erro para a senha aparace", ()=> {
        renderizaPagina(<Login />)

        const inputEmail = screen.getByTestId("email-test-id")
        expect(inputEmail).toBeInTheDocument();

        const inputPassword = screen.getByTestId("password-test-id")
        expect(inputPassword).toBeInTheDocument();

        const botaoEntrar = screen.getByTestId("botao-test-id")
        expect(botaoEntrar).toBeInTheDocument()


        fireEvent.change(inputEmail, {
            target: {
                value: "eduardoAdmin@gmail.com"
            }
        })
        expect(inputEmail).toHaveValue("eduardoAdmin@gmail.com")


        fireEvent.change(inputPassword, {
            target: {
                value: "12345"
            }
        })
        expect(inputPassword).toHaveValue("12345")

        fireEvent.click(botaoEntrar)
        const mensagemErro = screen.getByText("Email ou senha em formato incorreto.")
        expect(mensagemErro).toBeInTheDocument()
    })
})

describe("verifica se é possivel fazer login", () => {

    it("verifica se é possivel fazer login", async () => {

        global.fetch(jest.fn(
            async () => ({
                json: async () => Promise.resolve({ user: null, message: {show: false, text: 'Login efetuado com sucesso!', status: '' }, token: null })
            })
        ));
        renderizaPagina(<Login />)

        const inputEmail = screen.getByTestId("email-test-id")
        expect(inputEmail).toBeInTheDocument();

        const inputPassword = screen.getByTestId("password-test-id")
        expect(inputPassword).toBeInTheDocument();

        const botaoEntrar = screen.getByTestId("botao-test-id")
        expect(botaoEntrar).toBeInTheDocument()

        fireEvent.change(inputEmail, {
            target: {
                value: "teste@gmail.com"
            }
        })
        fireEvent.change(inputPassword, {
            target: {
                value: "Eduardo@qwe%123456"
            }
        })
        fireEvent.click(botaoEntrar)
        expect(window.location.pathname).toBe("/")
    })
})
  