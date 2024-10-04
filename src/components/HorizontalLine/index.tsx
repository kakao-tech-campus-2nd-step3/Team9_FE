import styled from '@emotion/styled';

const HorizontalLine = () => {
  return <CustomHorizontalLine />;
};

export default HorizontalLine;

const CustomHorizontalLine = styled.hr`
  width: 100%;
  height: 0.01rem;
  background-color: var(--color-gray-01);
`;
