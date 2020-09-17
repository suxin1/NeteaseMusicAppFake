import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './app/App';

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false;
let RootComponent = App;

if(__DEV__ && SHOW_STORYBOOK) {
  const {StorybookUIRoot} = require("./storybook");
  RootComponent = StorybookUIRoot;
  const a = 2;
}


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RootComponent);
