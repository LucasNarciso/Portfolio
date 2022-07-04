import React from "react";

// - IMAGENS - //
import MinhaFoto from "./Imagens/Minha_Foto_Redonda.png";

import webDex1 from "./Imagens/Projetos/WebDex_img1.png"
import webDex2 from "./Imagens/Projetos/WebDex_img2.png"
import webDex3 from "./Imagens/Projetos/WebDex_img3.png"

import whyZap1 from "./Imagens/Projetos/WhyZap_img1.png"
import whyZap2 from "./Imagens/Projetos/WhyZap_img2.png"
import whyZap3 from "./Imagens/Projetos/WhyZap_img3.png"

// - STYLED COMPONENTS - //
import { NavBar, LinkNavBar, DivFoto, Foto, Nome, DivSobre, Titulo, TextoSobre, DivProjetos, DivFormacao, DivContatos, Rodape, DivContatosIcones, Icones, TimeLine, CirculoPequeno, Background, DetalIcones, DivContatosIconesAbsolute, Container, DivEsp, DivDetProjeto, DivSepDetalhes, DivDetProjetoNone, DivCarrousel, DivPai, ConteudoDetalhesProjeto, DivSetaDupla, SVGSetaDupla, BotaoLinks, DivConteudoGaleria, DivImgGaleria} from './Styles/StyledComps';

// - COMPONENTS - //
import Carousel_Component from "./Components/Carousel_Component";
import Modal_ImagemAmpliada from "./Components/Modal_ImagemAmpliada";
// import MeuCarousel from "./Components/MeuCarousel";


class App extends React.Component{

  state = {

    autoPlayCarrousel: true,

    iconeSelecionado: "",
    icones: [
      { key: Math.random(), nome: "WhatsApp", valor: "(32) 9 8840-0471", link:"https://wa.me/55032988400471", svg: <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56.8711 46.7416C55.898 46.2573 51.1269 43.9238 50.2386 43.5988C49.3504 43.2771 48.7038 43.1178 48.0539 44.0863C47.4073 45.0483 45.5491 47.2258 44.9842 47.8693C44.416 48.5161 43.851 48.5941 42.8811 48.1131C41.9112 47.6256 38.7827 46.6083 35.0762 43.3193C32.1927 40.7583 30.2431 37.5961 29.6781 36.6276C29.1132 35.6623 29.6161 35.1391 30.1027 34.6581C30.5403 34.2258 31.0726 33.5303 31.5591 32.9681C32.0457 32.4026 32.2057 31.9996 32.529 31.3528C32.8556 30.7093 32.6923 30.1471 32.4474 29.6628C32.2057 29.1786 30.266 24.4238 29.4561 22.4901C28.6691 20.6083 27.869 20.8651 27.2746 20.8326C26.7064 20.8066 26.0598 20.8001 25.4132 20.8001C24.7666 20.8001 23.7151 21.0406 22.8268 22.0091C21.9353 22.9743 19.4306 25.3111 19.4306 30.0658C19.4306 34.8173 22.9052 39.4096 23.3918 40.0563C23.8784 40.6998 30.2333 50.4563 39.9682 54.639C42.2868 55.6335 44.0927 56.2283 45.5002 56.6703C47.8253 57.408 49.9414 57.304 51.6134 57.0538C53.4749 56.7775 57.3544 54.717 58.1643 52.4615C58.9709 50.206 58.9709 48.2723 58.7293 47.8693C58.4876 47.4663 57.841 47.2258 56.8679 46.7416H56.8711ZM39.1648 70.8013H39.1518C33.3697 70.8023 27.6938 69.2554 22.7191 66.3228L21.5434 65.6273L9.3234 68.8188L12.5858 56.9628L11.8184 55.7473C8.58582 50.6264 6.87514 44.6998 6.88397 38.6523C6.8905 20.9398 21.3703 6.52937 39.1779 6.52937C47.7992 6.52937 55.9045 9.87687 61.9982 15.9479C65.0038 18.9267 67.3861 22.4692 69.0071 26.3703C70.6282 30.2713 71.4559 34.4536 71.4424 38.6751C71.4359 56.3875 56.956 70.8013 39.1648 70.8013ZM66.6354 11.3361C63.0373 7.73162 58.7561 4.87362 54.0401 2.92773C49.324 0.981839 44.2668 -0.0132478 39.1616 0.000133177C17.7585 0.000133177 0.333095 17.3389 0.326564 38.6491C0.316646 45.431 2.1043 52.0956 5.50913 57.9703L0 78L20.5866 72.6245C26.2815 75.7124 32.6632 77.3304 39.1485 77.3305H39.1648C60.5678 77.3305 77.9933 59.9918 77.9998 38.6783C78.0156 33.5995 77.0193 28.5679 75.0687 23.8747C73.118 19.1815 70.2516 14.9198 66.6354 11.3361Z" fill="#4C5B61"/></svg>},
      { key: Math.random(), nome: "Instagram", valor: "@lucasnarcisos", link:"https://www.instagram.com/lucasnarcisos/", svg: <svg width="78" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#4c5b61" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z" clip-rule="evenodd"/></svg>},
      { key: Math.random(), nome: "Gmail", valor: "lucasnarcisoo", link:"mailto:lucasnarcisoo@gmail.com?subject=Feedback%20From%20Github&body=Olá", svg: <svg width="78" height="64" viewBox="0 0 78 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70.1996 55.4001H62.3995V21.2749L38.9994 35.9L15.5992 21.2749V55.4001H7.79909V8.59975H12.4791L38.9994 25.1749L65.5196 8.59975H70.1996V55.4001ZM70.1996 0.799683H7.79909C3.47005 0.799683 -0.000976562 4.27071 -0.000976562 8.59975V55.4001C-0.000976562 57.4688 0.820813 59.4528 2.28361 60.9156C3.74641 62.3784 5.73038 63.2002 7.79909 63.2002H70.1996C72.2683 63.2002 74.2523 62.3784 75.7151 60.9156C77.1779 59.4528 77.9997 57.4688 77.9997 55.4001V8.59975C77.9997 6.53104 77.1779 4.54706 75.7151 3.08427C74.2523 1.62147 72.2683 0.799683 70.1996 0.799683V0.799683Z" fill="#4C5B61"/></svg>},
      { key: Math.random(), nome: "GitHub", valor: "LucasNarciso", link:"https://github.com/LucasNarciso", svg: <svg width="78" height="76" viewBox="0 0 78 76" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M39 0C17.4525 0 0 17.4351 0 38.9612C0 56.2015 11.1637 70.7632 26.6663 75.9256C28.6162 76.2665 29.3475 75.0976 29.3475 74.0749C29.3475 73.1496 29.2988 70.0814 29.2988 66.8184C19.5 68.6204 16.965 64.432 16.185 62.2405C15.7463 61.1203 13.845 57.6625 12.1875 56.7372C10.8225 56.0067 8.8725 54.2047 12.1388 54.156C15.21 54.1073 17.4037 56.9807 18.135 58.1495C21.645 64.0424 27.2512 62.3866 29.4937 61.3638C29.835 58.8314 30.8588 57.1268 31.98 56.1528C23.3025 55.1787 14.235 51.8183 14.235 36.9157C14.235 32.6787 15.7463 29.1722 18.2325 26.4449C17.8425 25.4709 16.4775 21.4773 18.6225 16.1202C18.6225 16.1202 21.8887 15.0975 29.3475 20.1137C32.4675 19.2371 35.7825 18.7988 39.0975 18.7988C42.4125 18.7988 45.7275 19.2371 48.8475 20.1137C56.3062 15.0488 59.5725 16.1202 59.5725 16.1202C61.7175 21.4773 60.3525 25.4709 59.9625 26.4449C62.4488 29.1722 63.96 32.63 63.96 36.9157C63.96 51.8671 54.8438 55.1787 46.1662 56.1528C47.58 57.3703 48.7988 59.708 48.7988 63.3606C48.7988 68.5716 48.75 72.76 48.75 74.0749C48.75 75.0976 49.4813 76.3152 51.4312 75.9256C59.1733 73.3143 65.9008 68.3433 70.6669 61.7124C75.433 55.0815 77.9977 47.1245 78 38.9612C78 17.4351 60.5475 0 39 0Z" fill="#4C5B61"/></svg>},
      { key: Math.random(), nome: "LinkedIn", valor: "lucas-narciso01", link:"https://www.linkedin.com/in/lucas-narciso01/", svg: <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.64575e-07 6.51655C9.64575e-07 4.78826 0.686563 3.13075 1.90865 1.90866C3.13074 0.686571 4.78825 8.68747e-06 6.51655 8.68747e-06H71.4764C72.3328 -0.00139018 73.1812 0.166159 73.9729 0.493063C74.7645 0.819968 75.4839 1.29981 76.0899 1.90511C76.6958 2.51041 77.1765 3.22929 77.5042 4.02059C77.832 4.81189 78.0005 5.66006 78 6.51655V71.4764C78.0009 72.333 77.8329 73.1815 77.5056 73.9731C77.1784 74.7648 76.6982 75.4842 76.0926 76.0901C75.487 76.696 74.7679 77.1766 73.9764 77.5043C73.1849 77.832 72.3366 78.0005 71.4799 78H6.51655C5.66048 78 4.81281 77.8313 4.02195 77.5036C3.2311 77.1759 2.51256 76.6956 1.9074 76.0901C1.30224 75.4846 0.822304 74.7658 0.495026 73.9748C0.167747 73.1837 -0.000464793 72.336 9.64575e-07 71.4799V6.51655ZM30.8738 29.7393H41.4357V35.0433C42.9603 31.9942 46.8603 29.25 52.7209 29.25C63.9564 29.25 66.6191 35.3234 66.6191 46.4667V67.1084H55.2488V49.0053C55.2488 42.6589 53.7243 39.078 49.8526 39.078C44.4813 39.078 42.2476 42.939 42.2476 49.0053V67.1084H30.8738V29.7393ZM11.3738 66.6226H22.7476V29.25H11.3738V66.6191V66.6226ZM24.375 17.0607C24.3964 18.0346 24.2232 19.0029 23.8653 19.9088C23.5075 20.8148 22.9722 21.6402 22.2911 22.3365C21.6099 23.0328 20.7966 23.586 19.8987 23.9638C19.0008 24.3415 18.0366 24.536 17.0625 24.536C16.0884 24.536 15.1242 24.3415 14.2263 23.9638C13.3284 23.586 12.5151 23.0328 11.8339 22.3365C11.1528 21.6402 10.6175 20.8148 10.2597 19.9088C9.90184 19.0029 9.72856 18.0346 9.75 17.0607C9.79209 15.1492 10.581 13.3302 11.9478 11.9932C13.3145 10.6562 15.1505 9.90749 17.0625 9.90749C18.9745 9.90749 20.8104 10.6562 22.1772 11.9932C23.544 13.3302 24.3329 15.1492 24.375 17.0607Z" fill="#4C5B61"/></svg>}
    ],

    projetoSelecionado: "",
    detalhes: [
      {key: Math.random(), nome: "WhyZap", detalhes: "Nesse projeto foi utilizado a linguagem React JS para criar um chat inspirado no Whatsapp, criado apenas para treinar a utilização de Components e Styled Components.", links: ["https://github.com/LucasNarciso/WhyZap.github.io", "https://lucasnarciso.github.io/WhyZap.github.io/"], nomeLinks: ["Repositório do GitHub", "Site hospedado no GithubPages"], imgs: [whyZap1, whyZap2, whyZap3]},
      {key: Math.random(), nome: "WebDéx", detalhes: "Uma Pokédex online onde você pode batalhar com pokemons que encontrar na pagina principal e se ganhar, poderá adicioná-los à sua pokédex.", links: ["https://github.com/LucasNarciso/WebDex.github.io", "https://lucasnarciso.github.io/WebDex.github.io/"], nomeLinks: ["Repositório do GitHub", "Site hospedado no GithubPages"], imgs: [webDex1, webDex2, webDex3]},
      {key: Math.random(), nome: "LinkStack", detalhes: "Uma página da web personalizável para deixar todos os seus links e compartilhar em suas redes sociais.", links: ["https://github.com/LucasNarciso/LinkStack"], nomeLinks: ["Repositório do GitHub"], imgs: []}
    ],

    modal: ""
  }

  onOverIcon = (nome) => {
    this.setState({ iconeSelecionado: nome });
  }

  onLeaveIcon = (event) => {
    this.setState({ iconeSelecionado: "" });
  }

  abrirLink = (link) => {
    window.open(link, '_blank');
  }

  scroll = (id) => {
    document.getElementById(id).scrollIntoView( {block: "start", inline: "nearest", behavior: "smooth"} );
  }

  setDetalheProjeto = (auto, nome) => {
    if (this.state.projetoSelecionado === "") {
      this.setState({ autoPlayCarrousel: auto })
      this.setState({ projetoSelecionado: nome })
    }else{
      this.setState({ autoPlayCarrousel: true })
      this.setState({ projetoSelecionado: "" })
    }

  }

  render() {

    const renderIcones = this.state.icones.map((icon) => {
      return(
        <>
          <Icones onMouseEnter={() => {this.onOverIcon(icon.nome)}} onClick={() => {this.abrirLink(icon.link)}} onMouseLeave={this.onLeaveIcon}>{icon.svg}</Icones>
        </>
      )
    });

    const renderDetalhesProjeto = this.state.detalhes.map((det, index) => {

      const renderImgs = (vetor) => {
        
        let retorno = [];

        if (vetor.length !== 0) {
          for (let i = 0; i < vetor.length; i++) {
            retorno[i] = <DivImgGaleria onClick={() => {setModal(vetor[i])}} style={{ backgroundImage: `url(${vetor[i]})` }}/>
          }
        }else{
          retorno = <div>Esse projeto ainda não possui imagens.</div>
        }

        return retorno;

      }

      const renderLinks = (vetorLink, vetorNome) => {
        
        let retorno = [];

        if (vetorLink.length !== 0) {
          for (let i = 0; i < vetorLink.length; i++) {
            retorno[i] = <BotaoLinks onClick={() => {this.abrirLink(vetorLink[i])}}>{vetorNome[i]}</BotaoLinks>
          }
        }else{
          retorno = <div>Esse projeto ainda não possui links.</div>
        }

        return retorno;

      }

      if (this.state.projetoSelecionado === det.nome) {

        return(
          <DivDetProjeto>
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
        )
      }else if(this.state.projetoSelecionado === "" && index === 0){
        return(
          <DivDetProjetoNone>
            <DivSepDetalhes>
              <h4 align= {'center'} > DETALHES </h4>
              <ConteudoDetalhesProjeto>
                <p styled={{margin: '2px'}}>{det.detalhes}</p>
              </ConteudoDetalhesProjeto>
            </DivSepDetalhes>
            <DivSepDetalhes>

            </DivSepDetalhes>
            <DivSepDetalhes>
              
            </DivSepDetalhes>
          </DivDetProjetoNone>
        )
      }
    })

    const renderDetalhesIcones = this.state.icones.map((detIcon) => {

      if (this.state.iconeSelecionado === detIcon.nome){
        return(
          <DetalIcones>
            <p style={{transition: '0.2s ease-in-out', transform: 'translateY(-4em)', fontSize: '1.1em', fontWeight: 'bold'}}>{detIcon.nome}</p>
            <p style={{transition: '0.2s ease-in-out', transform: 'translateY(3.5em)', fontSize: '0.9em', fontWeight: 'bold'}}>{detIcon.valor}</p>
          </DetalIcones>
        )
      }else{
        return(
          <DetalIcones>
            <p style={{transition: '0.2s ease-in-out', fontSize: '1.1em', fontWeight: 'bold'}}>{detIcon.nome}</p>
            <p style={{transition: '0.2s ease-in-out', fontSize: '0.9em', fontWeight: 'bold'}}>{detIcon.valor}</p>
          </DetalIcones>
        )
      }
    });

    const setModal = (img) => {
      this.setState( this.state.modal = <Modal_ImagemAmpliada id={"ModalImgTelaCheia"} img={img} unset={() => {unsetModal()}}/>)
    }

    const unsetModal = () => {
      this.setState( this.state.modal = <></>)
      console.log("asdasdas")
    }

    return (
      <>
        {this.state.modal}

        <Container id={"inicio"}>
                    
          <NavBar>
            <LinkNavBar onClick={() => {this.scroll("projetos")}}> PROJETOS</LinkNavBar>
            <LinkNavBar onClick={() => {this.scroll("inicio")}}> INÍCIO</LinkNavBar>
            <LinkNavBar onClick={() => {this.scroll("contatos")}}> CONTATOS</LinkNavBar>
          </NavBar>

          <DivEsp>

          </DivEsp>
    
          <DivFoto>
    
            <Background>
              <div style={{ backdropFilter: 'blur(0.2em)', width: '100%'}}/>
            </Background>

            <DivEsp>

            </DivEsp>
    
            <Nome>
              LUCAS
            </Nome>

            <Foto src={MinhaFoto}>
    
            </Foto>

            <Nome>
              NARCISO
            </Nome>

            <DivSetaDupla>
              <SVGSetaDupla onClick={() => {this.scroll("sobre")}} width="83" height="48" viewBox="0 0 83 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17L41.5 47L82 17" stroke="white"/>
                <path d="M1 1L41.5 31L82 1" stroke="white"/>
              </SVGSetaDupla>
            </DivSetaDupla>
          </DivFoto>

    
          <DivSobre id={'sobre'}>
            <Titulo>SOBRE</Titulo>
            <TextoSobre>
              <p>Meu nome é Lucas, atualmente tenho 20 anos e estou me formando em Análise e Desenvolvimento de Sistemas na Faminas de Muriaé - MG. Esse meu portfólio possui alguns dos meus projetos sobre Desenvolvimento Web, alguns pessoais, e outros são trabalhos passados pelos professores durante o curso.</p>
            </TextoSobre>
          </DivSobre>
    
          <DivProjetos id={"projetos"}>
            <Titulo>PROJETOS</Titulo>
            
            <DivCarrousel>
              <Carousel_Component autoPlay={this.state.autoPlayCarrousel} func={this.setDetalheProjeto.bind(this)} seta={this.state.projetoSelecionado}/>
              {/* <MeuCarousel></MeuCarousel> */}
            </DivCarrousel>

            {renderDetalhesProjeto}

          </DivProjetos>
    
          <DivFormacao>
            <Titulo>FORMAÇÃO</Titulo>
            <TimeLine>
              <CirculoPequeno></CirculoPequeno> 
              <h3>2022</h3>
              Conclusão prevista para o curso de Análise e Desenvolvimento de Sistemas na Faminas de Muriaé - MG
              <br/><br/>
              <CirculoPequeno></CirculoPequeno> 
              <h3>2019</h3>
              Conclusão de cursos de informática avançada e básica pela ViaEnsino de Muriaé - MG
              <br/><br/>
              <CirculoPequeno></CirculoPequeno> 
              <h3>2019</h3>
              Ensino médio completo na Escola Estadual Engenheiro Orlando Flores em Muriaé - MG
            </TimeLine>
          </DivFormacao>
    
          <DivContatos id={"contatos"}>
            <Titulo>CONTATOS</Titulo>
            <DivContatosIcones>
              {renderIcones}
            </DivContatosIcones>
            <DivContatosIconesAbsolute>
              {renderDetalhesIcones}
            </DivContatosIconesAbsolute>
          </DivContatos>
    
          <Rodape>
            <p>Todos os direitos reservados ©</p>
          </Rodape>
        </Container>
      </>
    );
  }
}

export default App;
