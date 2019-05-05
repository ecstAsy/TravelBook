import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { Block, View, Text } from '@tarojs/components';
import { PageWhiteSpace, NoteCard } from '../../components';
import TripTop from './tripTop';
import './index.scss';

@connect(({ note, loading }) => ({
  ...note,
  ...loading,
}))

export default class Note extends Component {

  config = {
    navigationBarTitleText: '详情',
  };

  componentDidMount = () => {
    const { name } = this.$router.params;
    Taro.setNavigationBarTitle({
      title: name
    })
    this.getNoteInfo(this.$router.params)
  }

  getNoteInfo = async ({ id, visit }) => {
    await Taro.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000000
    })
    const data = await this.props.dispatch({
      type: 'note/load',
      payload: { id }
    });
    let params = {};
    switch (visit) {
      case 'v_user':
        params['userNoteInfo'] = data;
        break;
      default:
        params['hotNoteInfo'] = data;
        break;
    };
    await Promise.all([
      this.props.dispatch({
        type: 'note/save',
        payload: {
          ...params,
          visit,
          Loading: false
        }
      }),
      Taro.hideToast()
    ])
  }

  handleClick = async obj => {
    await Promise.all([
      this.props.dispatch({
        type: 'note/save',
        payload: {
          wayPoints: obj
        }
      }),
      Taro.navigateTo({
        url: `/pages/noteDetail/index`
      })
    ])
  }

  componentWillUnmount = () => {
    const { visit } = this.props;
    this.props.dispatch({
      type: 'note/save',
      payload: {
        visit: visit === 'v_home' ? '' : 'v_home',
      }
    })
  }

  render() {
    const { hotNoteInfo, userNoteInfo, visit, Loading } = this.props;
    const NoteInfo = visit === 'v_user' ? userNoteInfo : hotNoteInfo;
    return (
      <View className='note'>
        <View className='note-info'>
          <PageWhiteSpace />
          {
            !Loading && <TripTop Info={NoteInfo} />
          }

          {
            !Loading && NoteInfo.days.map((day, i) =>
              <Block key={i}>
                <View className='note-info-day'>
                  <Text className='circle' />
                  <Text>{day.date}</Text>
                  <Text>第{day.day}天</Text>
                </View>
                {
                  day.waypoints.map((item, j) => <NoteCard Info={item} key={j} note onClick={this.handleClick.bind(this, item)} />)
                }
              </Block>
            )
          }
          {/* <LoadMore loading={effects['note/load']} /> */}
        </View>
      </View>
    )
  }
} 