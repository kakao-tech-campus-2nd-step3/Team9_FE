import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import 'swiper/css';
import 'swiper/css/pagination';

import queryClient from '@/apis/queryClient';
import Routes from '@/routes';

const App = () => {
  const chakraProps: ChakraProviderProps = {};

  return (
    <ChakraProvider {...chakraProps} resetCSS={false}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
