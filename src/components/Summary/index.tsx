// Styles
import { Container } from "./styles";

// Img svg
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

// Summary
export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entrada" />
                </header>
                <strong>R$ 1000.000</strong>
            </div>

            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeImg} alt="Saida" />
                </header>
                <strong>R$ 1000.000</strong>
            </div>

            <div className="green-backgroud">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 1000.000</strong>
            </div>
        </Container>
    )
}