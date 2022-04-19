import React from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import "./index.scss"

const Home =():React.ReactElement=> {
  return (
  <View className="home">

      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>
            <Image src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67" />
            
          {/*  */}
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    
  </View>)

}
export default inject('store')(observer(Home))