import { useState } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';

const StudentProgress = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  const goToStep2 = () => setCurrentStep(2);

  return <>{currentStep === 1 ? <Step1 onSuccess={goToStep2} /> : <Step2 />}</>;
};

export default StudentProgress;
