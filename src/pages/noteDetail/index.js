import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Image } from '@tarojs/components';
import { NoteCard } from '../../components';
import './index.scss';

@connect(({ note, loading }) => ({
  ...note,
  ...loading
}))

export default class NoteDetail extends Component {

  config = {
    navigationBarTitleText: '',
  };

  componentDidMount = () => {
    const { wayPoints } = this.props;
    Taro.setNavigationBarTitle({
      title: `第${wayPoints.day}天`
    })
  }

  componentWillMount = () => {
    this.props.dispatch({
      type: 'note/save',
      payload: {
        wayPoints: {}
      }
    })
  }
  render() {
    const { wayPoints } = this.props;
    return (
      <View className='page-note-detail'>
        <View className='note-detail'>
          <NoteCard Info={wayPoints} />
          <View className='note-detail-like'>
            <Image src={require('../../images/icon/like.png')} />
            喜欢
          </View>
          <View className='note-detail-advice'>
            <Image src={require('../../images/icon/advice.png')} />
            评论
          </View>
        </View>
      </View>
    )
  }
}