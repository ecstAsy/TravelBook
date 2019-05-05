import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import './index.scss';

export default class LoadMore extends Component {

  static propTypes = {
    loading: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
  };

  render() {
    const { loading } = this.props;
    return (
      <View className={loading ? 'weui-loadmore' : 'weui-loadmore hide'}>
        <View className='weui-loading' />
        <View className='weui-loadmore__tips'>正在加载</View>
      </View>
    )
  }
}
