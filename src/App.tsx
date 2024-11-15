import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import queryClient from '@/apis/queryClient';
import getUserType from '@/apis/users/getUserType';
import Routes from '@/routes';
import useModeStore from '@/store/useModeStore';
import { setTokens } from '@/utils/queryParams';

const App = () => {
  const chakraProps: ChakraProviderProps = {};

  const { setMode } = useModeStore();

  // 앱이 실행될 때 토큰과 유저 모드 초기화
  useEffect(() => {
    const initializeTokensAndMode = async () => {
      await setTokens();

      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const setUserMode = async () => {
          try {
            const { userType } = await getUserType();

            if (userType === 'USER') {
              setMode('user');
            } else {
              setMode('artist');
            }
          } catch (error) {
            console.error(error);
          }
        };

        setUserMode();
      }
    };

    initializeTokensAndMode();
  }, []);

  return (
    <ChakraProvider {...chakraProps} resetCSS={false}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
