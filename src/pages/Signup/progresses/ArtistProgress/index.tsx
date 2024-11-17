import { useState } from 'react';

import InputButton from '@/components/common/form/InputButton';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBox, ProgressGuidance, SelectItem } from '../styles';
import BusinessArtist1 from './BusinessArtist/BusinessArtist1';
import StudentArtist1 from './StudentArtist/StudentArtist1';
import StudentArtist2 from './StudentArtist/StudentArtist2';

const ArtistProgress = () => {
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
            <ProgressGuidance>
              {name} 님, 반가워요.
              <br />
              작가 유형을 선택해주세요.
            </ProgressGuidance>
            <div className="progress-container">
              <SelectItem>
                <InputButton
                  label="학생"
                  isSelected={artistType === 'student'}
                  onClick={() => setArtistType('student')}
                />
                <InputButton
                  label="사업자"
                  isSelected={artistType === 'business'}
                  onClick={() => setArtistType('business')}
                />
              </SelectItem>
            </div>
            {artistType === 'student' && <StudentArtist1 onSuccess={goToStep2} />}
            {artistType === 'business' && <BusinessArtist1 onSuccess={goToStep2} />}
          </>
        )}
        {currentStep === 2 && (
          <>
            {artistType === 'student' && <StudentArtist2 />}
            {artistType === 'business' && <></>}
          </>
        )}
      </ProgressBox>
    </>
  );
};

export default ArtistProgress;
