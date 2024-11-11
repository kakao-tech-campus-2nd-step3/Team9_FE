import usePostChatRoom from '@/apis/chats/usePostChatRoom';
import CTA, { CTAContainer } from '@/components/common/CTA';
import useUserStore from '@/store/useUserStore';

const USER_EMAIL_1 = 'pjhcsols@naver.com';
const USER_EMAIL_2 = 'user2@example.com';

const ProductDetails = () => {
  const { email } = useUserStore();
  const userEmail1 = email || USER_EMAIL_1; // 사용자 본인 이메일
  const userEmail2 = USER_EMAIL_2; // 상대방 이메일

  const { mutate: postChatRoom } = usePostChatRoom();

  const handleClickChat = () => {
    postChatRoom(
      {
        userEmail1,
        userEmail2,
      },
      {
        onSuccess: () => {
          alert('채팅방 생성 완료!');
        },
        onError: (error) => {
          alert(error);
        },
      },
    );
  };

  return (
    <>
      <CTAContainer>
        <CTA label="채팅하기" onClick={handleClickChat}></CTA>
      </CTAContainer>
    </>
  );
};

export default ProductDetails;
