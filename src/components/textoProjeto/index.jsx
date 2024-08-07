import styled from "styled-components";

const ContainerTextoProjeto = styled.div`
    min-height: 18vh;
`

const Texto = styled.h1`
    font-size: ${props => props.TamFonte || '18px'};
    font-Weight: ${props => props.Weight || '1px'};
    color: #292929;
`


function TextoProjeto(){
    return(
        <ContainerTextoProjeto>
            <Texto TamFonte={'36px'} Weight={'400'}>
                Meus
            </Texto>
            <Texto TamFonte={'80px'} Weight={'700'}>
                Projetos
            </Texto>
        </ContainerTextoProjeto>
    )
}

export default TextoProjeto;