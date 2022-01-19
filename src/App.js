import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from "react";
import './App.css';

// Layout
import AppLayout from './layouts/AppLayout';
import AdminLayout from './layouts/Admin';

// Custom routes
import LoadingPage from './components/Loading';

// import pages through lazy load method
const Home = lazy(() => import('./pages'));
const SignInPage = lazy(() => import('./pages/Signin'));
const SignupPage = lazy(() => import('./components/Signup'));
const Blog = lazy(() => import('./pages/Blog'));
const DetailBlogPage = lazy(() => import('./pages/Blog/DetailBlog'))


const PageNotFound = lazy(() => import('./components/PageNotFound'));

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <LoadingPage />
        </div>
      }
    >
      <BrowserRouter>
        <Switch>
          {/* Route Login */}
          <Route path="/signin" exact>
            <SignInPage />
          </Route>
          {/* Route Signup */}
          <Route path="/signup" exact>
            <SignupPage />
          </Route>
          {/* Route homepage */}
          <Route path="/">
            <AppLayout>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                {/* Blogs */}
                <Route path="/blogs">
                  <Blog />
                </Route>
                <Route path="/blog/:id">
                  <DetailBlogPage />
                </Route>
                 {/* Route Error page */}
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;