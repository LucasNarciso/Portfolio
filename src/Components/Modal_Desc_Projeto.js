import React, {useState} from "react";

import { DivModal, DivModalInterna, BotaoX, DivImgGaleria, BotaoLinks, DivDetProjeto, DivSepDetalhes, ConteudoDetalhesProjeto, DivConteudoGaleria, DivDetProjetoNone } from "../Styles/StyledComps";

function Modal_ImagemAmpliada(props){

    const [modalImagem, setModamImagem] = useState("");
    

    return(
        <DivModal>
            <DivModalInterna>
                <BotaoX onClick={() => {props.unsetDesc()}}>
                    <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="41" height="41" rx="8" fill="#488286"/>
                        <path d="M4.82297 4.8287C5.92026 3.7238 7.69932 3.7238 8.79662 4.8287L35.9499 32.1701C37.0472 33.275 37.0472 35.0664 35.9499 36.1713C34.8526 37.2762 33.0735 37.2762 31.9762 36.1713L4.82297 8.82988C3.72568 7.72499 3.72568 5.93359 4.82297 4.8287Z" fill="white"/>
                        <path d="M36.177 4.82867C37.2743 5.93357 37.2743 7.72496 36.177 8.82986L9.02378 36.1713C7.92649 37.2762 6.14743 37.2762 5.05014 36.1713C3.95284 35.0664 3.95284 33.275 5.05014 32.1701L32.2034 4.82867C33.3007 3.72378 35.0797 3.72378 36.177 4.82867Z" fill="white"/>
                    </svg>
                </BotaoX>
            </DivModalInterna>
        </DivModal>
    )
}

export default Modal_ImagemAmpliada;