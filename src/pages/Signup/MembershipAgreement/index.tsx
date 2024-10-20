import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import CustomCheckbox from './CustomCheckBox';
import { useState } from 'react';

const MembershipAgreement = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };

  return (
    <Wrapper>
      <CustomCheckbox isChecked={isChecked} onChange={() => handleCheckboxChange}>
        <Text fontSize="var(--font-size-sm)" fontWeight="600">
          약관 전체 동의
        </Text>
      </CustomCheckbox>
      <CustomCheckbox isChecked={isChecked} onChange={() => handleCheckboxChange}>
        <Text fontSize="var(--font-size-xs)">만 14세 이상입니다. (필수)</Text>
      </CustomCheckbox>
    </Wrapper>
  );
};

export default MembershipAgreement;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 0;
  align-self: stretch;
`;
