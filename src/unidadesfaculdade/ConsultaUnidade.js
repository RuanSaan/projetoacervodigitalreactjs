import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { estacioLocations } from './localizacaounidadesfaculdade';
import styles from './ConsultaUnidade.module.css';

const ConsultaUnidade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const unit = estacioLocations.find(l => l.id === id);

  // Estado para simular o carregamento dos trabalhos do banco futuramente
  const [isSearching, setIsSearching] = useState(false);

  if (!unit) return <h2 className={styles.error}>Unidade não encontrada.</h2>;

  const handleSearchDatabase = () => {
    setIsSearching(true);
    // Aqui entrará sua lógica de fetch(API) no futuro
    console.log(`Iniciando busca de trabalhos para a unidade: ${unit.id}`);
    
    // Simulação de busca
    setTimeout(() => setIsSearching(false), 1500);

    /*
Layout Comparativo: O lado esquerdo mantém o contexto da unidade visível (estático), enquanto o lado direito foca na interação dinâmica.

Pronto para o Futuro: O botão handleSearchDatabase já está configurado com um estado de carregamento (isSearching). Quando seu banco estiver pronto, basta trocar o setTimeout por uma chamada ao Supabase ou sua API.

Responsividade: O uso de grid-template-columns: 1fr 1fr com a media query garante que em celulares o usuário veja primeiro os dados da unidade e, logo abaixo, a área de pesquisa.
    */


  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Consultar Projetos da Unidade {unit.city}</h1>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/unidadesfaculdade')}>
          ← Voltar ao Mapa
        </button>
      </header>

      <div className={styles.layoutGrid}>
        {/* LADO ESQUERDO: Dados da Unidade */}
        <section className={styles.infoColumn}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Dados da Unidade</h2>
            <div className={styles.detailGroup}>
              <p><strong>Nome:</strong> {unit.name}</p>
              <p><strong>Bairro:</strong> {unit.neighborhood}</p>
              <p><strong>Cidade:</strong> {unit.city}</p>
            </div>
            <div className={styles.funFactBox}>
              <h3>Destaque Regional</h3>
              <p>{unit.funFact}</p>
            </div>
            <p className={styles.coords}>
              Geo: {unit.lat}, {unit.lng}
            </p>
          </div>
        </section>

        {/* LADO DIREITO: Pesquisa no Banco (Trabalhos) */}
        <section className={styles.searchColumn}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Consulta de Trabalhos Publicados</h2>
            <p className={styles.instruction}>
              Utilize o painel abaixo para localizar projetos extensionistas vinculados a esta unidade.
            </p>
            
            <div className={styles.searchControls}>
              <div className={styles.formGroup}>
                <select className={styles.select}  >
                  <option value="">Selecionar Núcleo de Extensão</option>
                  <option>LTD - Desenvolvimento de Software</option>
                  <option>LTD - Gestão da Tecnologia da Informação</option>
                  <option>LTD - Infraestrutura</option>
                  <option>NID - Núcleo de Inclusão Digital</option>
                </select>
              </div>

              <button 
                className={styles.dbButton} 
                onClick={handleSearchDatabase}
                disabled={isSearching}
              >
                {isSearching ? 'Acessando Banco...' : 'Pesquisar Projetos'}
              </button>
            </div>

            <div className={styles.resultsPlaceholder}>
              {isSearching ? (
                <div className={styles.loader}>Conectando ao banco de dados...</div>
              ) : (
                <p>Pronto para iniciar a consulta na unidade <strong>{unit.id}</strong>.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultaUnidade;