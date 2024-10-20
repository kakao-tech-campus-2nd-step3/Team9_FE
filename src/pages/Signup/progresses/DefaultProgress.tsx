import { Box } from '@chakra-ui/react';

import type { Mode } from '@/types';
import Button from '../components/Button';
import ProgressBar from '../ProgressBar';
import { ProgressBox } from './styles';

type DefaultProgressProps = {
  memberType: Mode | undefined;
  onSelectMemberType: (memberType: Mode) => void;
};

const DefaultProgress = ({ memberType, onSelectMemberType }: DefaultProgressProps) => {
  const handleSelect = (type: Mode) => {
    onSelectMemberType(type);
  };

  return (
    <ProgressBox>
      <ProgressBar percentage={50} />
      <p className="progress-guidance">
        1.618이 처음이시네요!
        <br />
        회원 유형을 선택해주세요.
      </p>
      <form className="progress-form">
        <Box display="flex" width="100%" gap="8px">
          <Button
            label="일반 회원"
            isSelected={memberType === 'user'}
            onClick={() => handleSelect('user')}
          />
          <Button
            label="작가(판매자) 회원"
            isSelected={memberType === 'seller'}
            onClick={() => handleSelect('seller')}
          />
        </Box>
      </form>
    </ProgressBox>
  );
};

export default DefaultProgress;
