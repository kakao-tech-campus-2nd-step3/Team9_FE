import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // 속이 빈 하트 아이콘 임포트

const LikeFollowers = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <FavoriteBorderIcon style={{ color: 'var(--color-gray-03)' }} />
        <div>1K</div>
      </LeftWrapper>
      <Divider />
      <RightWrapper>
        <p style={{ color: 'var(--color-gray-03)' }}>팔로워</p>
        <p>1.2K</p>
      </RightWrapper>
    </Wrapper>
  );
};

export default LikeFollowers;

const Wrapper = styled.div`
  font-size: var(--font-size-xxs);
  display: flex;
  flex-direction: row;
  width: 5.6rem;
  height: 2.6rem;
  justify-content: space-between;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 2.6rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.6rem;
`;

const Divider = styled.div`
  width: 0.1rem;
  height: 1.6rem;
  background-color: var(--color-gray-03);
  margin: 0 0.8rem;
`;
