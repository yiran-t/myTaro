import React from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import "./index.scss"
import { AtIcon } from 'taro-ui'

const Footer =():React.ReactElement=> {

  return (
  <View className="contentStyle">
    <AtIcon value='home' size='30' color='#F00'></AtIcon>
    <AtIcon value='home' size='30' color='#F00'></AtIcon>
    <AtIcon value='home' size='30' color='#F00'></AtIcon>
  </View>)

}
export default inject('store')(observer(Footer))