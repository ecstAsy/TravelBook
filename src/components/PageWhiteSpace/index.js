import Taro, { Component } from '@tarojs/taro';
import { Block, View } from '@tarojs/components';
import './index.scss';

export default class PageWhiteSpace extends Component {
  render() {
    return (
      <Block>
        <View className='page-white-space' />
      </Block>
    )
  }
}