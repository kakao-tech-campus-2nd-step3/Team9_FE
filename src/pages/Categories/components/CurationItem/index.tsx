import styled from '@emotion/styled';

interface CurationItemProps {
  title: string;
  des: string;
}

const CurationItem = ({ title, des }: CurationItemProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Des>{des}</Des>
    </Wrapper>
  );
};

export default CurationItem;

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 16px;
  min-height: 54px;
  gap: 8px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-lt);
  }
`;

const Title = styled.span`
  font-size: var(--font-size-md);
  font-weight: 600;
  line-height: 1.2;
`;

const Des = styled.span`
  font-size: var(--font-size-sm);
  line-height: 1.2;
`;
