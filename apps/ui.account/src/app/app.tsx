import { Route, Link, BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Route
        path="/track-my-order/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/track-my-order/details/"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </BrowserRouter>
  );
}

export default App;
