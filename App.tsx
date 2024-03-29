import { PaperProvider } from 'react-native-paper';
import Main from './Main';
import RootLayout from './_layout';
import { TaskProvider } from './provider/TaskProvider';

export default function App() {
  return (
    <PaperProvider>
      <TaskProvider>
        <RootLayout>
          <Main/>
        </RootLayout>
      </TaskProvider>
    </PaperProvider>
  );
}
