import { View } from 'react-native'
import React from 'react'


import PostHeader from './Feed/PostHeader'
import BottomSection from './Feed/BottomSection'

const Feed = () => {
  return (
    <View>
      <View>
        <PostHeader imagePath={require('../img/post1.png')} name={'cat.irl'} profile={require('../img/pfp2.jpg')}/>
        <BottomSection like={'1,658'} name={'cats.irl'} description={'alcoholism'} comments={'236'} time={'8 hours'}/>
      </View>
      <View>
        <PostHeader imagePath={require('../img/post2.jpg')} name={'another.cat.post'} profile={require('../img/story5.jpg')}/>
        <BottomSection like={'16,452'} name={'another.cat'} description={'cat in tangerines'} comments={'48'} time={'56 minutes'}/>
      </View>
      <View>
        <PostHeader imagePath={require('../img/post3.jpg')} name={'and.another.cat.post'} profile={require('../img/pfp3.jpg')}/>
        <BottomSection like={'8,141'} name={'and.another.cat.post'} description={'date'} comments={'62'} time={'2 hours'}/>
      </View>
      <View>
        <PostHeader imagePath={require('../img/post4.jpg')} name={'uchiha_madara'} profile={require('../img/story3.jpg')}/>
        <BottomSection like={'4,661'} name={'uchiha_madara'} description={':)'} comments={'128'} time={'11 hours'}/>
      </View>
    </View>
  )
}

export default Feed