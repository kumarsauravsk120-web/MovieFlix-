import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground } from 'react-native'
import { images } from '../../../constants/images'
import { icons } from '../../../constants/icons'


type TabIconProps = {
  focused: boolean
  icon: any
  title: string
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  return (
  <ImageBackground
        source={focused ? images.highlight : undefined}
        className="flex flex-row w-full flex-2 min-w-[110px] min-h-14 mt-5 justify-center items-center rounded-full overflow-hidden"
        >
          <Image
            source={icon}
            tintColor={focused ? '#151312' : '#A8B5DB'} className="size-5"
          />
          {focused && <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>}
        </ImageBackground>
  )   
}


const _layout = () => {
  return (
  <Tabs
  screenOptions={{
     tabBarShowLabel: false,
     tabBarItemStyle: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
     },
      tabBarStyle: {
        backgroundColor: '#0f0D23',
        borderRadius: 20,
        marginHorizontal: 10,
        marginBottom: 20,
        height: 52,
        position: 'absolute',
        overflow: 'hidden',
        borderWidth:1,
        borderColor: '#0f0d23',
      }

  }}
  >
    <Tabs.Screen 
    name="index"
    options={{
      title: "Home",
      headerShown: false,
      tabBarIcon: ({focused }) => (
        <TabIcon 
        focused={focused}
        icon={icons.home}
        title="Home"
        />
      )
    }}
    />


    <Tabs.Screen 
    name="search"
    options={{
      title: "Search",
      headerShown: false,
      tabBarIcon: ({focused }) => (
        <TabIcon 
        focused={focused}
        icon={icons.search}
        title="Search"
        />
      )
    }}
    />
    <Tabs.Screen 
    name="saved"
    options={{
      title: "Saved",
      headerShown: false,
      tabBarIcon: ({focused }) => (
        <TabIcon 
        focused={focused}
        icon={icons.save}
        title="Saved"
        />
      )
    }}
    />
    <Tabs.Screen 
    name="profile"
    options={{
      title: "Profile",
      headerShown: false,
      tabBarIcon: ({focused }) => (
        <TabIcon 
        focused={focused}
        icon={icons.person}
        title="Profile"
        />
      )
    }}
    />
  </Tabs>
  )
}

export default _layout
