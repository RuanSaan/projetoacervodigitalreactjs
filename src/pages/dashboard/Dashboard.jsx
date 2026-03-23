import React from 'react';
import { Award, UploadCloud, FileText, TrendingUp } from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  // Dados atualizados: Unidades Estácio e Núcleos de Extensão
  const academicPerformance = [
    { name: 'Estácio Curitiba (LTD)', score: 99, works: 450, totalAssets: 12500, growth: '+18%' },
    { name: 'Estácio Cristo Rei (NAC)', score: 94, works: 380, totalAssets: 8900, growth: '+10%' },
    { name: 'Estácio Curitiba (NAF)', score: 92, works: 310, totalAssets: 7200, growth: '+5%' },
  ];

  const StatCard = ({ icon: Icon, title, value, change }) => (
    <div className={styles.statCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <Icon className={styles.icon} size={24} />
      </div>
      <p className={styles.value}>{value}</p>
      <p className={styles.change}>{change} vs semestre anterior</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Gestão de Acervo Acadêmico</h1>
        <p>Performance de Extensão e Trabalhos Realizados - YDUQS/Estácio</p>
      </header>

      {/* Métricas Consolidadas */}
      <div className={styles.statsGrid}>
        <StatCard icon={FileText} title="Trabalhos Realizados" value="1.140" change="+12.5%" />
        <StatCard icon={UploadCloud} title="Arquivos em Acervo" value="28.600" change="+8.2%" />
        <StatCard icon={Award} title="Núcleos com KPI Ouro" value="03" change="Excelente desempenho!" />
      </div>

      {/* Ranking por Núcleo/Unidade */}
      <div className={styles.rankingSection}>
        <h2>Ranking de Produtividade (Núcleos)</h2>
        <div className={styles.unitList}>
          {academicPerformance.map((item, index) => (
            <div key={item.name} className={styles.unitItem}>
              <div className={styles.unitInfo}>
                <div className={`${styles.badge} ${styles[`rank${index + 1}`]}`}>
                  {index + 1}º
                </div>
                <div className={styles.unitText}>
                  <p className={styles.unitName}>{item.name}</p>
                  <p className={styles.unitSub}>{item.works} trabalhos validados este mês</p>
                </div>
              </div>
              <div className={styles.scoreSection}>
                <p className={styles.scoreValue}>{item.score} pts</p>
                <p className={styles.growth}>
                  <TrendingUp size={14} /> {item.growth}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;