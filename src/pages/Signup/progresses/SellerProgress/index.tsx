import { useState } from 'react';

import Button from '@/components/common/form/InputButton';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBox, SelectItem } from '../styles';
import BusinessSeller from './BusinessSeller';
import StudentSeller1 from './StudentSeller/StudentSeller1';
import StudentSeller2 from './StudentSeller/StudentSeller2';

const SellerProgress = () => {
  const name = '000';
  const [artistType, setArtistType] = useState<'student' | 'business' | undefined>();
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  const goToStep2 = () => setCurrentStep(2);

  return (
    <>
      <ProgressBox>
        {currentStep === 1 && (
          <>
            <ProgressBar percentage={75} />
            <p className="progress-guidance">
              {name} 님, 반가워요.
              <br />
              작가 유형을 선택해주세요.
            </p>
            <form className="progress-form">
              <SelectItem>
                <Button
                  label="학생"
                  isSelected={artistType === 'student'}
                  onClick={() => setArtistType('student')}
                />
                <Button
                  label="사업자"
                  isSelected={artistType === 'business'}
                  onClick={() => setArtistType('business')}
                />
              </SelectItem>
              {artistType === 'student' && <StudentSeller1 onSuccess={goToStep2} />}
              {artistType === 'business' && <BusinessSeller />}
            </form>
          </>
        )}
        {currentStep === 2 && (
          <>
            {artistType === 'student' && <StudentSeller2 />}
            {artistType === 'business' && <></>}
          </>
        )}
      </ProgressBox>
    </>
  );
};

export default SellerProgress;
