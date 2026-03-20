import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SubmitWork.module.css';
import ProgressBar from './ProgressBar';

const SubmitWorkTela03 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = location.state || { data: {} };

    return (
        <div className={styles.container}>
            <ProgressBar currentStep={3} />
            <header className={styles.header}>
                <h2>Resumo do Envio de Evidências</h2>
                <p>Verifique os dados abaixo antes da submissão final.</p>
            </header>

            <table className={styles.summaryTable}>
                <tbody>
                    <tr><td>Núcleo:</td><td>{data.nucleo}</td></tr>
                    <tr><td>Nome:</td><td>{data.nome}</td></tr>
                    <tr><td>Matrícula:</td><td>{data.matricula}</td></tr>
                    <tr><td>Regional:</td><td>{data.regional}</td></tr>
                    <tr><td>Unidade:</td><td>{data.unidade}</td></tr>
                    <tr><td>Cursos:</td><td>{data.cursos?.join(', ')}</td></tr>
                    <tr><td>Eixo:</td><td>{data.eixo}</td></tr>
                    <tr><td>Período:</td><td>{data.periodo}</td></tr>
                    <tr><td>Atividade prevista:</td><td>{data.atividade}</td></tr>
                    <tr><td>Realizou atividade?</td><td>{data.realizou}</td></tr>
                    <tr><td>Categoria:</td><td>{data.categoria}</td></tr>
                    <tr><td>Descrição:</td><td>{data.descricao}</td></tr>
                    <tr><td>Público Interno:</td><td>{data.publicoInterno}</td></tr>
                    <tr><td>Público Externo:</td><td>{data.publicoExterno}</td></tr>
                    <tr><td>Data da Atividade:</td><td>{data.dataAtividade}</td></tr>
                    <tr><td>Arquivo:</td><td>{data.arquivo || 'Nenhum arquivo enviado'}</td></tr>
                </tbody>
            </table>

            <div style={{marginTop: '2rem'}}>
                <button className={styles.buttonNext} onClick={() => alert("Formulário Submetido com Sucesso!")}>
                    Confirmar e Enviar
                </button>
                <button 
                    className={styles.buttonNext} 
                    style={{background: '#6b7280'}} 
                    onClick={() => navigate(-1)}
                >
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default SubmitWorkTela03;