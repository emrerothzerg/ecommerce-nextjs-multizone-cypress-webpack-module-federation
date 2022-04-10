import { BrowserRouter, Route } from 'react-router-dom';
import DetailsPage from './pages/details';
import LoginPage from './pages/login';

export function App() {
  return (
    <BrowserRouter>
      <Route path="/track-my-order/" exact render={() => <LoginPage />} />
      <Route
        path="/track-my-order/details/"
        exact
        render={() => <DetailsPage />}
      />
    </BrowserRouter>
  );
}

export default App;
