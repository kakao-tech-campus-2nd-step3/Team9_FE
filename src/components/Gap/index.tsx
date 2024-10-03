import styled from '@emotion/styled';

const Gap = () => {
  return (
    <>
      <CustomGap />
    </>
  );
};

export default Gap;

const CustomGap = styled.hr`
  width: 36rem;
  height: 1.2rem;
  background-color: var(--color-gray-01);
`;
