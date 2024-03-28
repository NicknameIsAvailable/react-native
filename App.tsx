import { PaperProvider } from 'react-native-paper';
import Main from './Main';
import RootLayout from './_layout';

export default function App() {
  return (
    <PaperProvider>
      <RootLayout>
        <Main/>
      </RootLayout>
    </PaperProvider>
  );
}
