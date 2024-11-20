import type { Mode } from '@/types/user';
import InputButton from '../../../../components/common/form/InputButton';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBox, ProgressGuidance, SelectItem } from '../styles';

type DefaultProgressProps = {
  mode: Mode | undefined;
  onSelect: (registerType: Mode) => void;
};

const DefaultProgress = ({ mode, onSelect }: DefaultProgressProps) => {
  const handleSelect = (type: Mode) => {
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
          <InputButton
            label="일반 회원"
            isSelected={mode === 'user'}
            onClick={() => handleSelect('user')}
          />
          <InputButton
            label="작가(판매자) 회원"
            isSelected={mode === 'artist'}
            onClick={() => handleSelect('artist')}
          />
        </SelectItem>
      </div>
    </ProgressBox>
  );
};

export default DefaultProgress;
