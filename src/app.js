import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import Home from './pages/home';
import dva from './utils/dva';
import models from './models';


import './styles/base.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/note/index',
      'pages/noteDetail/index',
      'pages/user/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#f16b7d',
      navigationBarTitleText: 'Travel book',
      navigationBarTextStyle: 'white',
    },
  };

  componentDidMount() { }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
