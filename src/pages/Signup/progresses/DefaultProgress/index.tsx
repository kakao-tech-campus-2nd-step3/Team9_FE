import type { RegisterType } from '@/types';
import Button from '../../../../components/common/form/InputButton';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBox, ProgressGuidance, SelectItem } from '../styles';

type DefaultProgressProps = {
  registerType: RegisterType | undefined;
  onSelect: (registerType: RegisterType) => void;
};

const DefaultProgress = ({ registerType, onSelect }: DefaultProgressProps) => {
  const handleSelect = (type: RegisterType) => {
    onSelect(type);
  };

  return (
    <ProgressBox>
      <ProgressBar percentage={50} />
      <ProgressGuidance>
        1.618이 처음이시네요!
        <br />
        회원 유형을 선택해주세요.
      </ProgressGuidance>
      <div className="progress-container">
        <SelectItem>
          <Button
            label="일반 회원"
            isSelected={registerType === 'user'}
            onClick={() => handleSelect('user')}
          />
          <Button
            label="작가(판매자) 회원"
            isSelected={registerType === 'artist'}
            onClick={() => handleSelect('artist')}
          />
        </SelectItem>
      </div>
    </ProgressBox>
  );
};

export default DefaultProgress;
