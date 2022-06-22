import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
`

export const Cool: React.FC<{}> = () => {
    return (
        <Container>
            <h1>GET BACK TO THE GRIND KIND SIR</h1>
        </Container>
    )
}
