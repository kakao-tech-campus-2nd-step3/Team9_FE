import styled from '@emotion/styled';

const Date = ({ date }: { date: string }) => <StyledDate>{date}</StyledDate>;

export default Date;

const StyledDate = styled.p`
  padding: 16px;
  color: var(--color-gray-dk);
  text-align: center;
  font-size: var(--font-size-xs);
  font-weight: 500;
`;
