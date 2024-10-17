import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Routes from '@/routes';

const App = () => {
  const chakraProps: ChakraProviderProps = {};

  return (
    <ChakraProvider {...chakraProps} resetCSS={false}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
