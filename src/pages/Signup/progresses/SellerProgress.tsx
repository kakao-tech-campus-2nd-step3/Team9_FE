import ProgressBar from '../ProgressBar';
import { ProgressBox } from './styles';

const SellerProgress = () => {
  const name = '000';

  return (
    <>
      <ProgressBox>
        <ProgressBar percentage={75} />
        <p className="progress-guidance">
          {name} 님, 반가워요.
          <br />
          작가 유형을 선택해주세요.
        </p>
        <form className="progress-form"></form>
      </ProgressBox>
      <ProgressBox>
        <ProgressBar percentage={100} />
        <p className="progress-guidance">작가 정보를 입력해주세요.</p>
        <form className="progress-form"></form>
      </ProgressBox>
    </>
  );
};

export default SellerProgress;
