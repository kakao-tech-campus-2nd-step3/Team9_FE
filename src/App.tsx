import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';

import Routes from '@/routes';

const App = () => {
  const chakraProps: ChakraProviderProps = {};

  return (
    <ChakraProvider {...chakraProps}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
