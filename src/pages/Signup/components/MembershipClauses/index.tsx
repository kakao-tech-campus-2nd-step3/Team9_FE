import styled from '@emotion/styled';
import { useState } from 'react';

import CustomCheckbox from './CustomCheckbox';

const MembershipClauses = () => {
  const clauseList: string[] = [
    '만 14세 이상입니다. (필수)',
    '이용약관 동의 (필수)',
    '개인 정보 수집 및 이용 동의 (필수)',
    '선택 정보 수집 및 이용 동의 (선택)',
    '개인정보 마케팅 활용 동의(선택)',
    '마케팅 알림 수신 동의(선택)',
  ];

  const [isCheckedList, setIsCheckedList] = useState<boolean[]>(
    Array(clauseList.length).fill(false),
  );
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleCheckAll = () => {
    setIsCheckedAll((prev) => !prev);
    setIsCheckedList(Array(clauseList.length).fill(!isCheckedAll));
  };

  const handleCheckItem = (index: number) => {
    const updatedList = [...isCheckedList];
    updatedList[index] = !updatedList[index];
    // 해당 항목 체크도 바꾸고, 전체 체크 여부도 바꾸기
    setIsCheckedList(updatedList);
    setIsCheckedAll(updatedList.every(Boolean));
  };

  return (
    <Wrapper>
      <CustomCheckbox
        label="약관 전체 동의"
        isChecked={isCheckedAll}
        onChange={handleCheckAll}
        marginBottom={8}
        fontSize="var(--font-size-sm)"
        fontWeight="600"
      />
      {clauseList.map((item, index) => (
        <CustomCheckbox
          key={index}
          label={item}
          isChecked={isCheckedList[index]}
          onChange={() => handleCheckItem(index)}
          marginBottom={4}
          fontSize="var(--font-size-xs)"
        />
      ))}
    </Wrapper>
  );
};

export default MembershipClauses;

const Wrapper = styled.ul`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;
