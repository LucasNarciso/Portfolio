import styled, { createGlobalStyle } from 'styled-components';
import Gif from "../Imagens/Gif.gif";

export const GlobalStyle = createGlobalStyle`
    
    /*Personaliza a Calha da Barra de rolagem */
        ::-webkit-scrollbar {
            position: absolute;
        width: 0.30em;
        height: 0.5em;
        background-color: #303536;
        border-radius: 0em 0em 0.3em 0em;
    }

    /*Personaliza a Barra de Rolagem*/
    ::-webkit-scrollbar-thumb {
        position: absolute;
        background: white;
        border-radius: 0em 0em 0.3em 0.3em;
    }
`

export const DivPai = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const NavBar = styled.div`
    background-color: #2C423F;
    color: white;
    display: flex;
    font-weight: bold;
    font-size: clamp(1em, 0.3em + 1vw, 1em);
    justify-content: center;
    position: fixed;
    top: 0em;
    z-index: 9;
    width: 100%;
    max-width: 85em;
`

export const LinkNavBar = styled.p`
    margin: 0.3em 1.5em;
    font-family: 'Kdam Thmor Pro', sans-serif;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        color: black;
    }
`

export const Background = styled.div`
    background-size: cover;
    background-image: url(${Gif});
    position: absolute;
    width: 100%;
    max-width: 85em;
    height: 34.6em;
    display: flex;
    z-index: -9;
`

export const DivFoto = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 34.6em;
    justify-content: space-evenly;
    align-items: center;
`

export const Foto = styled.img`
    height: 32%;
`

export const DivSetaDupla = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SVGSetaDupla = styled.svg`
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`

export const Nome = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 12em;
    font-size: clamp(1.1em, 1em + 1vw, 2em);
    font-family: 'Kdam Thmor Pro', sans-serif;
`

export const DivSobre = styled.div`
    margin: 1.2em;
    border: 0.15em dotted black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    font-family: 'Charis SIL', serif;
    color: #4C5B61;
`

export const Titulo = styled.p`
    font-weight: bold;
    font-size: clamp(1.1em, 0.5em + 1vw, 2em);
    font-family: 'Kdam Thmor Pro', sans-serif;
`

export const TextoSobre = styled.div`
    padding: 0em 10%;
    font-size: 1.2em;
    text-align: left;
    color: black;
`

export const DivProjetos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
    background-color: #4C5B61;
    color: white;
`

export const DivFormacao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    font-family: 'Charis SIL', serif;

    p{
        color: #4C5B61;
    }
`

export const DivContatos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0em 0em;
    background-color: #4C5B61;
    color: white;
`

export const DivContatosIcones = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3em 0em;
    z-index: 1;
`

export const DivContatosIconesAbsolute = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    margin-top: 4.5em;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3em 0em;
    z-index: 0;
    color: white;
`

export const Icones = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2.5em;
    transition: 0.1s ease-in-out;
    background-color: white;
    border-radius: 0.5em;
    width: 7.4em;
    height: 7.4em;

    :hover, :focus{
        cursor: pointer;
        transform: scale(1.1);    
        box-shadow: 0em 0em 1em 0.5em #2C423F;
    }

`

export const DetalIcones = styled.div`
    margin: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 7.375em;
    height: 7.375em;
    transition: 0.1s ease-in-out;
`

export const Rodape = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.3em;
    background-color: #2C423F;
    color: white;
`

export const TimeLine = styled.div`
    border-width: 0em 0em 0em 0.18em;
    border-color: black;
    border-style: solid;
    border-image: linear-gradient( to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    border-image-slice: 10;
    width: 70%;
    max-width: 26em;
    padding: 0.5em;
    margin: 2em;
    word-wrap: break-word;

    h3{
        margin: 0em;
    }
`

export const CirculoPequeno = styled.div`
    border-radius: 50%;
    width: 0.5em;
    height: 0.5em;
    background-color: black;
    position: absolute;
    margin-left: -0.84em;
    margin-top: 0.45em;
`

export const DivDetalhesSlide = styled.div`
    position: absolute;
    padding: 1.1em 1.3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const NomeProjeto = styled.div`
    background-color: white;
    border-radius: 0.2em;
    border: 0.1em solid black;
    padding: 0.2em;
    margin-bottom: auto;
    font-size: clamp(0.3em, 0.8em + 1vw, 2em);
    font-weight: bold;
    font-family: 'Kdam Thmor Pro', sans-serif;
`

export const StatusProjeto = styled.div`
    background-color: white;
    border-radius: 0.2em;
    border: 0.1em solid black;
    font-size: clamp(0.1em, 0.2em + 1vw, 1em);
    padding: 0.2%;
    margin-bottom: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Kdam Thmor Pro', sans-serif;
`

export const BolinhaStatusProjeto = styled.div`
    border-radius: 50%;
    width: 0.7em;
    height: 0.7em;
    margin: 0.3em;
`

export const SobreProjeto = styled.div`
    background-color: white;
    border-radius: 0.2em;
    border: 0.1em solid black;
    width: 34%;
    margin-top: auto;
    font-size: clamp(0.1em, 0.2em + 1vw, 1em);
    font-family: 'Charis SIL', serif;
    padding: 1em;
    text-align: left;
`

export const BotaoSaibaMais = styled.button`
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 10em;
    border-radius: 2em;
    border: 0.1em solid black;
    margin-top: auto;
    font-size: clamp(0.5em, 0.2em + 1vw, 1em);
    padding: 0.6em;
    transition: 0.2s ease-in-out;
    font-family: 'Kdam Thmor Pro', sans-serif;

    :hover{
        cursor: pointer;
        background-color: #4C5B61;
    }
`

export const DivParte = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
`

export const ImgFundoSlide = styled.img`

`

export const Container = styled.div`
    max-width: 85em;
    z-index: -99;
    margin: auto;
`

export const DivEsp = styled.div`
    height: 1em;
    width: 100%;
`

export const DivDetProjeto = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    justify-content: space-around;
    width: 98%;
    font-family: 'Charis SIL', serif;

    h4{
        font-family: 'Kdam Thmor Pro', sans-serif;
    }
`

export const DivCarrousel = styled.div`
    z-index: 1;
    color: black;
    padding: 1em;
`

export const DivSepDetalhes = styled.div`
    width: 22em;
    height: auto;
    border: 0.2em solid white;
    color: white;
    border-radius: 0.3em;
`

export const ConteudoDetalhesProjeto = styled.div`
    margin: 2em;
`

export const BotaoLinks = styled.button`
    background-color: white;
    color: #303536;
    padding: 0.3em;
    width: 100%;
    margin-bottom: 0.5em;
    border: none;
    border-radius: 0.2em;
    transition: 0.2s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: #677073;
        color: white;
    }
`

export const DivConteudoGaleria = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`

export const DivImgGaleria = styled.div`
    margin: 0em 1em 2em 1em;
    background-color: #2C423F;
    width: 5em;
    height: 5em;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    :hover{
        cursor: pointer;
        opacity: 0.6;
    }
`

export const DivModal = styled.div`
    background-color: rgba(0, 0, 0, .8);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivModalInterna = styled.div`
    width: 94%;
    height: auto;
    display: flex;
    justify-content: right;
`

export const ImgModal = styled.img`
    width: 100%;
`

export const BotaoX = styled.button`
    position: absolute;
    padding: 0em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.7em;
    border: none;
    transition: 0.2s ease-in-out;
    width: 1.5em;
    height: 1.5em;
    background-color: white;
    margin: 0.5em;

    :hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`

export const DivCardsProjetos = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const CardProjeto = styled.div`
    width: 20em;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5em;
`

export const CardTitulo = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0.7em;
`

export const CardImagens = styled.img`
    width: 20em;
    z-index: 1;
`

export const DivDescProjetoFechada = styled.div`
    width: 100%;
    height: 0em;
    transition: 0.3s ease-in-out;
    color: black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: auto;
    align-items: center;
    background-color: #303536;
    border-radius: 0em 0em 0.3em 0.3em;
    border-bottom: 0.16em solid #1F2223;
    transform: translateY(-0.3em);
`