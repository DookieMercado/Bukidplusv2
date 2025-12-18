import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

const ProfileScreen = () => {
  const navigation = useNavigation();
  
  const [location, setLocation] = useState(true);
  const [storage, setStorage] = useState(true);
  const [cameraAccess, setCameraAccess] = useState(true);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  // Custom Contact Icon SVG
  const ContactIcon = () => (
    <Svg width="80" height="80" viewBox="0 0 100 100">
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#4a9d8f" />
          <Stop offset="100%" stopColor="#2c6c63" />
        </LinearGradient>
      </Defs>
      
      {/* Background circle */}
      <Circle cx="50" cy="50" r="45" fill="url(#gradient)" />
      
      {/* Person silhouette */}
      <G transform="translate(25, 25) scale(0.5)">
        {/* Head */}
        <Circle cx="50" cy="30" r="20" fill="#fff" />
        
        {/* Body */}
        <Path
          d="M30 75 C30 60, 70 60, 70 75 L70 85 C70 90, 30 90, 30 85 L30 75 Z"
          fill="#fff"
        />
      </G>
      
      {/* Contact symbol - simplified */}
      <G transform="translate(50, 50)">
        {/* Outer circle */}
        <Circle cx="0" cy="0" r="25" stroke="#fff" strokeWidth="3" fill="none" />
        
        {/* Inner person symbol */}
        <G transform="scale(0.8)">
          {/* Head */}
          <Circle cx="0" cy="-8" r="6" fill="#fff" />
          {/* Body */}
          <Path
            d="M-6 8 L6 8 L0 20 Z"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );

  // Alternative: Simple Contact Icon (cleaner)
  const SimpleContactIcon = () => (
    <Svg width="80" height="80" viewBox="0 0 100 100">
      {/* Background circle with gradient */}
      <Circle cx="50" cy="50" r="45" fill="#4a9d8f" />
      
      {/* Contact person icon */}
      <G fill="#fff">
        {/* Head */}
        <Circle cx="50" cy="35" r="15" />
        {/* Body - simplified person shape */}
        <Path d="M35 55 L65 55 L50 80 Z" />
        
        {/* Plus sign (optional contact symbol) */}
        <Path
          d="M70 30 L80 30 L80 40 L70 40 L70 50 L60 50 L60 40 L50 40 L50 30 L60 30 L60 20 L70 20 Z"
          fill="#ff0000"
        />
      </G>
    </Svg>
  );

  // Minimalist Contact Icon
  const MinimalContactIcon = () => (
    <Svg width="80" height="80" viewBox="0 0 100 100">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#4a9d8f" stopOpacity="0.8" />
        </LinearGradient>
      </Defs>
      
      {/* Background */}
      <Circle cx="50" cy="50" r="45" fill="url(#grad)" />
      
      {/* Contact card outline */}
      <Path
        d="M30 30 L70 30 L70 70 L30 70 Z"
        stroke="#fff"
        strokeWidth="4"
        fill="none"
      />
      
      {/* Person inside card */}
      <G transform="translate(50, 50) scale(0.7)">
        {/* Head */}
        <Circle cx="0" cy="-10" r="8" fill="#fff" />
        {/* Body */}
        <Path
          d="M-8 10 L8 10 L0 25 Z"
          fill="#fff"
        />
      </G>
      
      {/* Bottom right corner accent */}
      <Path
        d="M70 55 L70 70 L55 70 Z"
        fill="#ff0000"
      />
    </Svg>
  );

  // Professional Contact Icon
  const ProfessionalContactIcon = () => (
    <Svg width="80" height="80" viewBox="0 0 100 100">
      {/* Outer circle with red border */}
      <Circle cx="50" cy="50" r="45" fill="#fff" stroke="#ff0000" strokeWidth="4" />
      
      {/* Inner circle with teal background */}
      <Circle cx="50" cy="50" r="35" fill="#4a9d8f" />
      
      {/* Contact symbol - person with circle */}
      <G fill="#fff">
        {/* Person */}
        <Circle cx="50" cy="40" r="10" />
        <Path d="M40 55 L60 55 L50 70 Z" />
        
        {/* Circle around person */}
        <Circle cx="50" cy="50" r="18" stroke="#fff" strokeWidth="2" fill="none" />
      </G>
      
      {/* Decorative dots */}
      <Circle cx="35" cy="35" r="3" fill="#ff0000" />
      <Circle cx="65" cy="65" r="3" fill="#ff0000" />
    </Svg>
  );

  const MenuItem = ({ title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
      <Icon name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );

  const ToggleItem = ({ title, value, onValueChange }) => (
    <View style={styles.toggleItem}>
      <Text style={styles.menuText}>{title}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#ddd', true: '#ff0000' }}
        thumbColor="#fff"
        ios_backgroundColor="#ddd"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {/* Choose one of the contact icons above */}
              <ProfessionalContactIcon />
            </View>
          </View>
          <Text style={styles.name}>Juan Dela Crocs</Text>
          <Text style={styles.email}>JuanDelaCrocs@gmail.com</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <MenuItem 
            title="Personal Information" 
            onPress={() => navigation.navigate('PersonalInfo')} 
          />
          <MenuItem 
            title="Booking History" 
            onPress={() => navigation.navigate('BookHistory')} 
          />
        </View>

        {/* Settings & Access Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings & Access</Text>
          <ToggleItem
            title="Location"
            value={location}
            onValueChange={setLocation}
          />
          <ToggleItem
            title="Storage"
            value={storage}
            onValueChange={setStorage}
          />
          <ToggleItem
            title="Camera"
            value={cameraAccess}
            onValueChange={setCameraAccess}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={{ height: -15 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    paddingTop: 5,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4a9d8f',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#ff0000',
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  toggleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    backgroundColor: '#ff0000',
    marginHorizontal: 16,
    marginVertical: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;