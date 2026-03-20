import styles from './SubmitWork.module.css';

const ProgressBar = ({ currentStep }) => {
  const steps = ["Identificação", "Detalhamento", "Resumo"];
  
  return (
    <div className={styles.progressContainer}>
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        
        return (
          <div 
            key={index} 
            className={`${styles.step} ${isActive ? styles.stepActive : ""} ${isCompleted ? styles.stepCompleted : ""}`}
          >
            {isCompleted ? "✓" : stepNumber}
            <span className={styles.stepLabel} style={{ color: isActive || isCompleted ? '#003a8f' : '#9ca3af' }}>
                {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;