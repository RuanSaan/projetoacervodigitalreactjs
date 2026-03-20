import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './SubmitWork.module.css';
import ProgressBar from './ProgressBar';

const SubmitWorkTela02 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dadosAnteriores = location.state?.data || {};

    const [tela02Data, setTela02Data] = useState({
        categoria: '',
        descricao: '',
        publicoInterno: 0,
        publicoExterno: 0,
        dataAtividade: '',
        arquivo: null
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 10 * 1024 * 1024) {
            alert("O arquivo excede o limite de 10MB");
            e.target.value = null;
        } else {
            setTela02Data({ ...tela02Data, arquivo: file?.name });
        }
    };

    const handleAvançar = () => {
        const todosOsDados = { ...dadosAnteriores, ...tela02Data };
        navigate('/SubmitWorkTela03', { state: { data: todosOsDados } });
    };

    return (
        <div className={styles.container}>
            <ProgressBar currentStep={2} />
            <h3>Formulário para envio das evidências do LTD - 2026.1</h3>
            <p>Detalhamento da Atividade Realizada</p>
            <p className={styles.tip}><span className={styles.required}>*</span> Obrigatória</p>

            <div className={styles.formGroup}>
                <label className={styles.label}>10. Selecione a categoria da atividade: <span className={styles.required}>*</span></label>
                <div className={styles.radioGroup}>
                    {[
                        "Atendimentos: Inclusão Digital",
                        "Atendimentos: Desenvolvimento de Software",
                        "Atendimentos: Infraestrutura de TI",
                        "Atendimentos: Gestão da TI",
                        "Cursos e formação técnica: Oficinas técnicas",
                        "Eventos: Palestras"
                    ].map(item => (
                        <label key={item} className={styles.option}>
                            <input type="radio" name="categoria" value={item} onChange={(e) => setTela02Data({...tela02Data, categoria: e.target.value})} /> {item}
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>11. Descreva a atividade realizada: <span className={styles.required}>*</span></label>
                <textarea 
                    className={styles.textarea} 
                    maxLength="1000" 
                    placeholder="Insira sua resposta"
                    onChange={(e) => setTela02Data({...tela02Data, descricao: e.target.value})}
                />
                <span className={styles.tip}>Limite de 1000 caracteres.</span>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>12. Público interno diretamente impactado: <span className={styles.required}>*</span></label>
                <input 
                    type="number" 
                    min="0" 
                    className={styles.input} 
                    onChange={(e) => setTela02Data({...tela02Data, publicoInterno: e.target.value})}
                />
                <span className={styles.tip}>O valor deve ser um número.</span>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>13. Público externo diretamente impactado: <span className={styles.required}>*</span></label>
                <input 
                    type="number" 
                    min="0" 
                    className={styles.input} 
                    onChange={(e) => setTela02Data({...tela02Data, publicoExterno: e.target.value})}
                />
                <span className={styles.tip}>O valor deve ser um número.</span>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>14. Selecione a data em que a atividade ocorreu: <span className={styles.required}>*</span></label>
                <input 
                    type="date" 
                    className={styles.input} 
                    onChange={(e) => setTela02Data({...tela02Data, dataAtividade: e.target.value})}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>15. Evidências da atividade: <span className={styles.required}>*</span></label>
                <div className={styles.fileInputContainer}>
                    <input type="file" accept=".jpg,.jpeg,.gif" onChange={handleFileChange} />
                    <p className={styles.tip}>Limite: 1 arquivo (JPG, JPEG, GIF) de até 10MB.</p>
                </div>
            </div>

            <div style={{marginTop: '2rem'}}>
                <button className={styles.buttonNext} onClick={handleAvançar}>Avançar</button>
                <button 
                    className={styles.buttonNext} 
                    style={{background: '#6b7280' }} 
                    onClick={() => navigate(-1)}
                >
                    Voltar
                </button>
            </div>
            
        </div>
    );
};

export default SubmitWorkTela02;