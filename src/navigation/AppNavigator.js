import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerifyCodeScreen from '../screens/VerifyCodeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MarketScreen from '../screens/MarketScreen';
import ARScreen from '../screens/ArScreen';
import BookScreen from '../screens/BookScreen';
import TribeDetailScreen from '../screens/HigaononScreen'; 
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import BookHistoryScreen from '../screens/BookHistoryScreen';
import WaterfallsScreen from '../screens/WaterfallsScreen';
import MountainsScreen from '../screens/MountainsScreen';


// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BookStack = createStackNavigator();

// SVG Icon Components using react-native-svg
const HomeIcon = ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22V12H15V22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const MapIcon = ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 2V18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 6V22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const ARIcon = ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M3 9H21"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M9 21V9"
        stroke={color}
        strokeWidth="2"
      />
      <Circle cx="7" cy="7" r="1" fill={color} />
      <Circle cx="12" cy="7" r="1" fill={color} />
      <Circle cx="17" cy="7" r="1" fill={color} />
    </Svg>
  </View>
);

const BookIcon = ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const ProfileIcon = ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

// Book Stack Navigator - UPDATED: Single screen for all tribes
const BookStackNavigator = () => {
  return (
    <BookStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <BookStack.Screen 
        name="BookMain" 
        component={BookScreen}
      />
      {/* SINGLE SCREEN FOR ALL TRIBES */}
      <BookStack.Screen 
        name="TribeDetail" 
        component={TribeDetailScreen}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.tribeData?.headerTitle || 'Tribe Details',
          headerStyle: {
            backgroundColor: route.params?.tribeData?.primaryColor || '#8B4513',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        })}
      />
    </BookStack.Navigator>
  );

};

// Tab Navigator with 5 tabs as per design
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF0004',
        tabBarInactiveTintColor: '#95a5a6',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ecf0f1',
          paddingBottom: 5,
          height: 60,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Maps" 
        component={MarketScreen}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color, size }) => (
            <MapIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="ARView" 
        component={ARScreen}
        options={{
          tabBarLabel: 'AR View',
          tabBarIcon: ({ color, size }) => (
            <ARIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Book" 
        component={BookStackNavigator}
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({ color, size }) => (
            <BookIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Auth Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        
        {/* Main App */}
        <Stack.Screen 
          name="Main" 
          component={MainTabs}
          options={{ 
            gestureEnabled: false
          }}
        />

        <Stack.Screen 
        name="PersonalInfo" 
       component={PersonalInfoScreen}
        />
          <Stack.Screen 
            name="BookHistory" 
            component={BookHistoryScreen}
                          />
                    <Stack.Screen 
                      name="Waterfalls" 
                        component={WaterfallsScreen} 
                          />
        <Stack.Screen 
  name="Mountains" 
  component={MountainsScreen} 
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;