import React, {useState} from "react";

import { BotaoLinks, CardImagens, CardProjeto, CardTitulo, ConteudoDetalhesProjeto, DivBarraCard, DivConteudoGaleria, DivDescProjetoFechada, DivDetProjeto, DivImgGaleria, DivSepDetalhes } from "../Styles/StyledComps";



function Card_Projeto(props){
    let det = props.detalhes;
    const [projetoSelecionado, setProjetoSelecionado] = useState([]);

    
    //Função que determina qual projeto está selecionado para renderizar os detalhes
    const setDetalheProjeto = (nome, indicador) => {

        const div = document.getElementById("DivDesc" + indicador);
        const novaDesc = [ ...projetoSelecionado, nome]

        if (verificaDesc(nome) == false) {
            setProjetoSelecionado(novaDesc);
            div.style.height = "20em"
            div.style.transform = "translateY(0)";
            console.log("ABRIU CARD")
        }else{
            div.style.height = "0em"
            div.style.transform = "translateY(-0.3em)";
            setTimeout(retiraDesc, 200, nome)
            console.log("FECHOU CARD")
        }
    }

    const verificaDesc = (nome) => {
        let resposta;

        const filtro = projetoSelecionado.filter((proj, index) => {
            return proj === nome
        })

        if (filtro.length === 0) {
            resposta = false;
        }else{
            resposta = true;
        }
        return resposta;

    }

    const retiraDesc = (id) => {
        const novoVetor = projetoSelecionado.filter((proj) => {
            return proj !== id
        })
        setProjetoSelecionado(novoVetor)
        }

    const renderImgs = (vetor) => {
        
        let retorno = [];

        if (vetor.length !== 0) {
        for (let i = 0; i < vetor.length; i++) {
          retorno[i] = <DivImgGaleria key={Math.random()} onClick={() => {props.definirModalIMG(vetor[i])}} style={{ backgroundImage: `url(${vetor[i]})` }}/>
        }
        }else{
            retorno = <div key={Math.random()}>Esse projeto ainda não possui imagens.</div>
        }

        return retorno;

    }

    const renderLinks = (vetorLink, vetorNome) => {
        
        let retorno = [];

        if (vetorLink.length !== 0) {
        for (let i = 0; i < vetorLink.length; i++) {
            retorno[i] = <BotaoLinks key={Math.random()} onClick={() => {props.abrirLink(vetorLink[i])}}>{vetorNome[i]}</BotaoLinks>
        }
        }else{
        retorno = <div key={Math.random()}>Esse projeto ainda não possui links.</div>
        }

        return retorno;

    }
    
    return(
        <CardProjeto>
            <CardTitulo> {det.nome} </CardTitulo>

            <CardImagens src={props.imgs[props.index]} onClick={() => {setDetalheProjeto(det.nome, (props.index+1))}}/>

            <DivDescProjetoFechada id={"DivDesc" + (props.index+1)}>
                
                <DivDetProjeto key={Math.random()}>
                    <DivSepDetalhes>
                        <h4 align= {'center'} > DETALHES </h4>
                        <ConteudoDetalhesProjeto>
                            <p styled={{margin: '2px'}}>{det.detalhes}</p>
                        </ConteudoDetalhesProjeto>
                    </DivSepDetalhes>
                    <DivSepDetalhes>
                        <h4 align= {'center'} > LINKS </h4>
                        <ConteudoDetalhesProjeto>
                            {renderLinks(det.links, det.nomeLinks)}
                        </ConteudoDetalhesProjeto>
                    </DivSepDetalhes>
                    <DivSepDetalhes>
                        <h4 align= {'center'} > GALERIA </h4>
                        <ConteudoDetalhesProjeto>
                            <DivConteudoGaleria>
                            {renderImgs(det.imgs)}
                            </DivConteudoGaleria>
                        </ConteudoDetalhesProjeto>
                    </DivSepDetalhes>
                </DivDetProjeto>

            </DivDescProjetoFechada>
        </CardProjeto>
    )
}

export default Card_Projeto;