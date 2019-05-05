import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { Block, View } from '@tarojs/components';
import './index.scss';

@connect(({ common }) => ({
  ...common
}))

export default class Navigation extends Component {
  render() {
    const { SystemInfo } = this.props;
    console.log(SystemInfo)
    return (
      <Block>
        <View className='navigation'>
          dddd
        </View>
      </Block>
    )
  }
}