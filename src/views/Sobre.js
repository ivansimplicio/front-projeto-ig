import './Sobre.css';

import imgVoltar from '../imagens/voltar.png';

const Sobre = () => (
    
    <div className="Sobre" id="paginaSobre">
        <h1>Sobre o Projeto</h1>
        <hr />
        <p id="pDescricao">DESCRIÇÃO:</p>
        <p>Frond-End do projeto desenvolvido para a disciplina de TDIG, utilizando React.</p>
        <p id="pEquipe">EQUIPE DE DESENVOLVIMENTO:</p>
        <p>Dannilo Egito de Andrade</p>
        <p>Ivanildo Simplício da Silva Filho</p>
        <p>Jardesson Elliudo L da Costa</p>
        <p>Jeffiti Mucio Andrade Morais</p>

        <a className="tile"  title="Voltar" href="/home">
            <div className="tile-icon"><img alt="voltar" src={imgVoltar}/></div>
            <div className="tile-title title-ltr">Voltar</div>
        </a>
    </div>
);

export default Sobre;