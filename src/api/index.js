import axios from 'axios';
import Cookies from 'js-cookie';
import * as R from 'ramda';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const generateApiRoutes = entity => {
  return [
    {
      name: `getAll${capitalize(entity)}`,
      path: `/${entity}`,
      method: "get"
    },
    {
      name: `create${capitalize(entity)}`,
      path: `/${entity}`,
      method: "post"
    },
    {
      name: `get${capitalize(entity)}`,
      path: `/${entity}/:id`,
      method: "get"
    },
    {
      name: `patch${capitalize(entity)}`,
      path: `/${entity}/:id`,
      method: "patch"
    },
    {
      name: `update${capitalize(entity)}`,
      path: `/${entity}/:id`,
      method: "put"
    },
    {
      name: `delete${capitalize(entity)}`,
      path: `/${entity}/:id`,
      method: "delete"
    },
  ]
}

export const apiRoutes = [
  ...generateApiRoutes('tickets'),
  ...generateApiRoutes('aeroplanes'),
  ...generateApiRoutes('flights')
]

export const backend = axios.create({
  baseURL: `${process.env.API_HOST}/api`,
  headers: {
    'X-Custom-Header': 'foobar',
    'Authorization': Cookies.get(process.env.AUTH_COOKIE)
  },
  timeout: 3000
});

export const authenticate = data =>
  backend.post('/authenticate', data)

export const getAeroplanes = data =>
  backend.get('/aeroplanes', data)

export const apis = R.mergeAll(R.map(api => ({
  [api.name]: (data, headers) => {
    if (api.method === 'get') data = headers;
    return backend[api.method](
      api.path,
      data,
      {
        headers: headers || {}
      }
    )
  }
})
)(apiRoutes))
console.log(apis);
