/**
 * Dynamic inject route and reducer
 * @see http://mxstbr.blog/2016/01/react-apps-with-pages/
 */
import { getAsyncInjectors } from './utils/asyncInjectors';


const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  const { injectReducer } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'dashboard',
      getComponents(nextState, cb) {
        const importModules = Promise.all([
          import('containers/DashboardPage/reducer'),
          import('containers/DashboardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('dashboard', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/store',
      name: 'store',
      getComponents(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StorePage/reducer'),
          import('containers/StorePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('store', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },

    {
      path: '*',
      name: 'notFound',
      getComponents(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

  ];
}
