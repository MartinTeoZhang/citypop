import React, { useState } from 'react'
import {
  PlayCircleOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
// import Home from '../pages/Home'

const items = [

  {
    label: 'HOME',
    key: 'home',
    icon: <PlayCircleOutlined />,
  },
]

//导航栏
const HeadBar = () => {
  const [current, setCurrent] = useState('home')

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  )
}

export default HeadBar
