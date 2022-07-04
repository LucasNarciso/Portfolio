import React from "react";
import styled from 'styled-components';

import imagem1 from "../Imagens/Imagem_1.png";
import imagem2 from "../Imagens/Imagem_2.png";
import imagem3 from "../Imagens/Imagem_3.png";

const DivGeralCarousel = styled.div`
    width: 100%;
`
const Slide = styled.div`

`

const DetalhesSlide = styled.div`
    position: absolute;
    background-color: red;
    display: flex;
`

export default function MeuCarousel(){
    return(
        <DivGeralCarousel>
            <Slide>
                <DetalhesSlide>
                    a
                </DetalhesSlide>
                <img src={imagem1} width={"100%"}/>
                
            </Slide>
        </DivGeralCarousel>
    )
}