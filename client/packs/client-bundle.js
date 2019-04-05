import ReactOnRails from 'react-on-rails';

import ClientApp from '../bundles/client/startup/ClientApp';

// This is how react_on_rails can see the client in the browser.
ReactOnRails.register({
  ClientApp,
});
