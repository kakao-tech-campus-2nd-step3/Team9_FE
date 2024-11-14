import Button from '../../../../components/common/form/InputButton';
import ProgressBar from '../../components/ProgressBar';
import { ProgressBox, ProgressGuidance, SelectItem } from '../styles';

type DefaultProgressProps = {
  memberType: 'user' | 'artist' | undefined;
  onSelectMemberType: (memberType: 'user' | 'artist') => void;
};

const DefaultProgress = ({ memberType, onSelectMemberType }: DefaultProgressProps) => {
  const handleSelect = (type: 'user' | 'artist') => {
    onSelectMemberType(type);
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
            isSelected={memberType === 'user'}
            onClick={() => handleSelect('user')}
          />
          <Button
            label="작가(판매자) 회원"
            isSelected={memberType === 'artist'}
            onClick={() => handleSelect('artist')}
          />
        </SelectItem>
      </div>
    </ProgressBox>
  );
};

export default DefaultProgress;
