import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { Block, View, Image, Text } from '@tarojs/components';
import './index.scss';

export default class NoteCard extends Component {

  static propTypes = {
    note: PropTypes.bool,
  };

  static defaultProps = {
    note: false,
  };

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    const { Info, note } = this.props;
    if (!Info) return null;
    return (
      <Block>
        <View className={note ? 'note-card connection' : 'note-card'} onClick={this.handleClick}>
          {
            Info.photo_webtrip && <Image mode='widthFix' src={Info.photo_webtrip} lazyLoad />
          }
          <View className='note-card-content'>
            {Info.text}
          </View>
          <View className='note-card-position'>
            <Image src={require('../../images/icon/time.png')} />
            <Text>{Info.local_time}</Text>
          </View>
        </View>
      </Block>
    )
  }
}