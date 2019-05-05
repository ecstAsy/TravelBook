import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { Block, View, Text, Image } from '@tarojs/components';
import UserInfo from './UserInfo';
import { CardItem } from '../../components';
import './index.scss';

@connect(({ loading, user }) => ({
  ...loading,
  ...user
}))

export default class User extends Component {
  config = {
    navigationBarTitleText: '用户',
  };

  componentDidMount = () => {
    const { id } = this.$router.params;
    console.log(id)
    this.getInfo(id);
  }

  getInfo = async id => {
    const data = await this.props.dispatch({
      type: 'user/load',
      payload: {
        id
      }
    });
    await this.props.dispatch({
      type: 'user/save',
      payload: {
        userInfo: data.user_info,
        trips: data.trips
      }
    })
  }


  handleClick = ({ id, name }) => {
    Taro.navigateTo({
      url: `/pages/note/index?id=${id}&name=${name}&visit=v_user`
    })
  }

  render() {
    const { userInfo, trips } = this.props;
    console.log(trips)
    return (
      <View className='page-user'>
        <UserInfo Info={userInfo} />
        <View className='page-user-note-title'>
          <Text>NOTE</Text>
          <Text>{trips.length}</Text>
        </View>
        <Block>
          {
            trips.map((item, i) => <CardItem key={i} Info={item} type='v_user' onClick={this.handleClick.bind(this, item)} />)
          }
        </Block>

      </View>
    )
  }
}