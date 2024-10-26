import { useState } from 'react';

import Button from '../../components/Button';
import ProgressBar from '../../ProgressBar';
import StudentProgress from './StudentProgress';
import { ProgressBox, SelectItem } from '../styles';

const SellerProgress = () => {
  const name = '000';
  const [artistType, setArtistType] = useState<'student' | 'business' | undefined>();

  return (
    <>
      <ProgressBox>
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
          {artistType === 'student' && <StudentProgress />}
        </form>
      </ProgressBox>
    </>
  );
};

export default SellerProgress;
