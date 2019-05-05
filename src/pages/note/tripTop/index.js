import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { Block, View, Image, Text } from '@tarojs/components';
import './index.scss';


@connect(({ note, loading }) => ({
  ...note,
  ...loading,
}))

export default class TripTop extends Component {

  handleClick = ({ id }) => {
    const { visit } = this.props;
    switch (visit) {
      case 'v_user':
        Taro.navigateBack({ delta: 1 });
        break;
      default:
        Taro.navigateTo({
          url: `/pages/user/index?id=${id}`
        });
        break;
    }
  }

  render() {
    const { Info } = this.props;
    if (!Info) return null;
    return (
      <Block>
        <View className='trip-top'>
          <Image src={Info.user.avatar_l} onClick={this.handleClick.bind(this, Info.user)} />
          <View className='trip-top-info'>
            <View className='trip-top-info-title'>{Info.name}</View>
            <View className='trip-top-info-detail'>
              <Text>{Info.first_day}</Text>
              <Text>{Info.recommendations}人喜欢</Text>
              <Text>{Info.view_count}次浏览</Text>
            </View>
          </View>
        </View>
      </Block>
    )
  }
}