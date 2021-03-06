import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Cookies from 'js-cookie';
import { Route, Switch, withRouter } from 'react-router-dom';
import Layout from '@/containers/Layout';
import LoginPage from '@/containers/LoginPage';
import AdminPage from '@/containers/AdminPage';
import AeroplanesPage from '@/containers/AeroplanesPage';

export const AuthenticatedRoute = withRouter(props => {
  const dispatch = useDispatch();
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!Cookies.get(process.env.AUTH_COOKIE)) {
      dispatch(push('/login'))
    }

    setDone(true)
  }, [])

  return done && props.children
})

export const App = withRouter(() => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!Cookies.get(process.env.AUTH_COOKIE)) {
      dispatch(push('/login'))
    } else {
      dispatch(push('/admin/aeroplanes'))
    }
  }, [])

  return (
    <Switch>
        <Route exact path="/login" component={LoginPage} />
        <AuthenticatedRoute>
          <Route path="/admin">
            <Layout>
              <Route exact path="/admin/aeroplanes" component={AeroplanesPage}/>
            </Layout>
          </Route>
        </AuthenticatedRoute>
    </Switch>
  );
});
