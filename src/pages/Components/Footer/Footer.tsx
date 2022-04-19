import React from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

const Footer =():React.ReactElement=> {

  return (
  <View className="contentStyle">
    footer
  </View>)

}
export default inject('store')(observer(Footer))