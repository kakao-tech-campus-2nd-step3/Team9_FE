import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import queryClient from '@/apis/queryClient';
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
        await setMode(); // 함수 내부에서 API 응답 처리하여 모드 세팅
      }
    };

    initializeTokensAndMode();
  }, [setMode]);

  return (
    <ChakraProvider {...chakraProps} resetCSS={false}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
