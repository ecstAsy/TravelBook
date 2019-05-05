import Taro, { Component } from '@tarojs/taro';
import { Block, View, Image, Text } from '@tarojs/components';
import './index.scss';


export default class UserInfo extends Component {
  render() {
    const { Info } = this.props;
    console.log(Info)
    return (
      <Block>
        <View className='user-info'>
          {
            Info.cover && <Image src={Info.cover} />
          }
          <View className='user-info-mask' />
          <View className='user-info-detail'>
            <View className='user-info-detail-follower'>
              <Text>{Info.followers_count}</Text>
              <Text>粉丝</Text>
            </View>
            <View className='user-info-detail-avator'>
              <Image src={Info.avatar_l} />
            </View>
            <View className='user-info-detail-follow'>
              <Text>{Info.followings_count}</Text>
              <Text>关注</Text>
            </View>
          </View>
          <View className='user-info-name'>
            {Info.name}
          </View>
        </View>
      </Block>
    )
  }
}