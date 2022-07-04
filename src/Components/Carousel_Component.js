import React, {useEffect, useState} from "react";
import {Carousel} from 'react-responsive-carousel';

import imagem1 from "../Imagens/Fundo_WhyZap_v2.png";
import imagem2 from "../Imagens/Fundo_WebDex_v2.png";
import imagem3 from "../Imagens/Fundo_LinkStack_v2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { DivDetalhesSlide, NomeProjeto, StatusProjeto, SobreProjeto, BotaoSaibaMais, DivParte, ImgFundoSlide, BolinhaStatusProjeto } from '../Styles/StyledComps';

export default function Carousel_Component(props){

    const [botaoSB, setBotaoSB] = useState();

    useEffect(() => {
        renderBotao(props.seta);
    }, [props.seta])

    const renderBotao = (variavelSeta) => {

        if (variavelSeta === "") {
            setBotaoSB(<svg style={{ width: '12%'}} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.20288 0.710144L10.4855 9.99275L19.7681 0.710144" stroke="black" stroke-width="2"/>
                    </svg>)
        }else{
            setBotaoSB(<svg style={{ width: '12%'}} width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7686 10.9927L10.4859 1.71013L1.20334 10.9927" stroke="black" stroke-width="2"/>
                    </svg>)
        }
    }

    return(
        <div class="carousel-wrapper">
            <Carousel infiniteLoop={true} autoPlay={props.autoPlay} showThumbs={false} showStatus={false} showArrows={true}>
                <div>
                    <DivDetalhesSlide>

                        <DivParte>
                            <NomeProjeto> WhyZap</NomeProjeto>
                            <StatusProjeto>
                                CONCLUÍDO
                                <BolinhaStatusProjeto style={{ backgroundColor: '#00C514' }}></BolinhaStatusProjeto>
                            </StatusProjeto>
                        </DivParte>
                        <DivParte>
                            <SobreProjeto>
                                    • Um site feito totalmente em React durante a faculdade <br/>
                                    • Simula um chat inspirado no Whatsapp <br/>
                                    • Não utiliza banco de dados <br/>
                            </SobreProjeto>
                            
                            <BotaoSaibaMais onClick={() => {props.func(false, "WhyZap")}}>
                                SAIBA MAIS
                                {botaoSB}
                            </BotaoSaibaMais>
                            
                        </DivParte>
                        

                    </DivDetalhesSlide>

                    <ImgFundoSlide src={imagem1}/>
                </div>
                <div>
                    <DivDetalhesSlide>

                        <DivParte>
                            <NomeProjeto> WebDéx </NomeProjeto>
                            <StatusProjeto>
                                EM DESENVOLVIMENTO
                                <BolinhaStatusProjeto style={{backgroundColor: '#B5C500'}}></BolinhaStatusProjeto>
                            </StatusProjeto>
                        </DivParte>
                        <DivParte>
                            <SobreProjeto>
                                    • Projeto da faculdade utilizando React JS<br/>
                                    • Adicionar e remover pokémons à uma pokédex <br/>
                                    • Ver detalhes principais dos pokémons <br/>
                                    • PokéApi como Base de dados <br/>
                            </SobreProjeto>
                            
                            <BotaoSaibaMais onClick={() => {props.func(false, "WebDéx")}}>
                                SAIBA MAIS
                                {botaoSB}
                            </BotaoSaibaMais>
                            
                        </DivParte>


                    </DivDetalhesSlide>
                    <ImgFundoSlide src={imagem2}/>
                </div>
                <div>

                    <DivDetalhesSlide>

                        <DivParte>
                            <NomeProjeto> LinkStack </NomeProjeto>
                            <StatusProjeto>
                                EM DESENVOLVIMENTO
                                <BolinhaStatusProjeto style={{backgroundColor: '#B5C500'}}></BolinhaStatusProjeto>
                            </StatusProjeto>
                        </DivParte>
                        <DivParte>
                            <SobreProjeto>
                                    • Projeto pessoal utilizando HTML, CSS, JS, e PHP<br/>
                                    • Login de usuário  <br/>
                                    • Personalizar a página de links através do Painel <br/>
                                    • Banco de Dados SQL <br/>
                            </SobreProjeto>
                            
                            <BotaoSaibaMais onClick={() => {props.func(false, "LinkStack")}}>
                                SAIBA MAIS
                                {botaoSB}
                            </BotaoSaibaMais>
                            
                        </DivParte>

                    </DivDetalhesSlide>
                    <ImgFundoSlide src={imagem3}/>
                </div>
            </Carousel>
        </div>
    );
}