import styled from 'styled-components'
const Container = styled.div<{ gap?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${props => props.gap || 0}rem;
    text-align: center;

    height: 100vh;
`

const Heaidng = styled.h1<{ size: number }>`
    font-size: ${props => props.size}rem;
    font-weight: bold;
`

export const Cool: React.FC<{}> = () => {
    return (
        <Container>
            <Heaidng size={2}>GET BACK TO THE GRIND KIND SIR</Heaidng>
            <Heaidng size={1.5}>watch these vids before fapping PLS MAN</Heaidng>
            <Container gap={2}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/OkvMkEuV4ec"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/g4yGwMfKeJ8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Container>
        </Container>
    )
}
