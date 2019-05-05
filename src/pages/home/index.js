import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { CardItem, LoadMore } from '../../components';
import './index.scss';

@connect(({ home, loading }) => ({
  ...home,
  ...loading,
}))
class Home extends Component {

  config = {
    navigationBarTitleText: '旅书',
  };

  componentDidMount = () => {
    const { next_start } = this.props;
    this.getTripList(next_start);
  };

  handleClick = ({ id, name }) => {
    Taro.navigateTo({
      url: `/pages/note/index?id=${id}&name=${name}&visit=v_home`
    })
  }


  getTripList = async next_start => {
    const { Trips } = this.props;
    const data = await this.props.dispatch({
      type: 'home/load',
      payload: {
        next_start
      }
    })
    await this.props.dispatch({
      type: 'home/save',
      payload: {
        Trips: !Trips.length ? data.elements : [...Trips, ...data.elements],
        next_start: data.next_start
      }
    })
  }

  // 小程序上拉加载
  handleScrollToLower = () => {
    const { next_start } = this.props;
    next_start && this.getTripList(next_start);
  }

  render() {
    const { Trips, effects } = this.props;
    return (
      <View className='home-page'>
        <ScrollView class='home-page-list' scrollY onScrollToLower={this.handleScrollToLower} lowerThreshold='600'>
          {
            Trips.map((item, i) =>
              <CardItem key={i} Info={item.data[0]} type='v_home' onClick={this.handleClick.bind(this, item.data[0])} />
            )
          }
        </ScrollView>
        <LoadMore loading={effects['home/load']} />
      </View>
    );
  }
}

export default Home;
