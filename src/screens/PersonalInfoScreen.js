import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Rect, Path, G } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const PersonalInfoScreen = () => {
  const navigation = useNavigation();
  
  // User data state
  const [userData, setUserData] = useState({
    firstName: 'Juan',
    lastName: 'Dela',
    email: 'JuanDelaCrocs@gmail.com',
    phone: '+63 912 345 6789',
    address: 'Malaybalay City, Bukidnon',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle field update
  const handleUpdateField = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Save all changes
  const handleSaveChanges = () => {
    // Validate fields
    if (!userData.firstName.trim() || !userData.lastName.trim()) {
      Alert.alert('Error', 'Please enter both first and last name');
      return;
    }

    if (!userData.email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    Alert.alert(
      'Save Changes',
      'Are you sure you want to save all changes?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Save', 
          onPress: () => {
            setIsEditing(false);
            Alert.alert('Success', 'Your information has been updated successfully!');
          }
        }
      ]
    );
  };

  // SVG Profile Icon Component
  const ProfileIcon = () => (
    <Svg width={100} height={100} viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="48" fill="#ff0000" stroke="#fff" strokeWidth="4" />
      <Circle cx="50" cy="35" r="15" fill="#fff" />
      <Path
        d="M50 60 C30 60, 25 90, 25 90 L75 90 C75 90, 70 60, 50 60 Z"
        fill="#fff"
      />
    </Svg>
  );

  // SVG Back Arrow Icon
  const BackArrowIcon = () => (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  // SVG Edit Icon
  const EditIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
        stroke="#ff0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
        stroke="#ff0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  // SVG Save Icon
  const SaveIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 21V13H7V21"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 3V8H15"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const InputField = ({ label, value, field, placeholder, keyboardType = 'default', style }) => (
    <View style={[styles.inputWrapper, style]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={[styles.inputContainer, !isEditing && styles.inputContainerDisabled]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => handleUpdateField(field, text)}
          placeholder={placeholder}
          placeholderTextColor="#999"
          editable={isEditing}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <ProfileIcon />
          </View>
          <Text style={styles.profileName}>Juan Dela Crocs</Text>
          <Text style={styles.profileEmail}>JuanDelaCrocs@gmail.com</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#ff0000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#ff0000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={styles.sectionTitle}>Account</Text>
          </View>
          
          {/* First Name & Last Name Row */}
          <View style={styles.rowContainer}>
            <InputField
              label="First Name"
              value={userData.firstName}
              field="firstName"
              placeholder="First Name"
              style={styles.halfWidth}
            />
            
            <InputField
              label="Last Name"
              value={userData.lastName}
              field="lastName"
              placeholder="Last Name"
              style={styles.halfWidth}
            />
          </View>

          {/* Email Address */}
          <InputField
            label="Email Address"
            value={userData.email}
            field="email"
            placeholder="Email Address"
            keyboardType="email-address"
          />

          {/* Phone Number */}
          <InputField
            label="Phone Number"
            value={userData.phone}
            field="phone"
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />

          {/* Address */}
          <InputField
            label="Malaybalay City Barangay Address"
            value={userData.address}
            field="address"
            placeholder="Malaybalay City, Bukidnon"
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => {
              if (isEditing) {
                setIsEditing(false);
                // Reset to original data
                setUserData({
                  firstName: 'Juan',
                  lastName: 'Dela',
                  email: 'JuanDelaCrocs@gmail.com',
                  phone: '+63 912 345 6789',
                  address: 'Malaybalay City, Bukidnon',
                });
              } else {
                navigation.goBack();
              }
            }}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={() => {
              if (isEditing) {
                handleSaveChanges();
              } else {
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? (
              <>
                <SaveIcon />
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </>
            ) : (
              <>
                <EditIcon />
                <Text style={styles.saveButtonText}>Edit</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
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
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  backButton: {
    padding: 4,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileSection: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatarContainer: {
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginLeft: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  halfWidth: {
    width: '48%',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  inputContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E9ECEF',
    paddingHorizontal: 16,
    minHeight: 56,
    justifyContent: 'center',
  },
  inputContainerDisabled: {
    backgroundColor: '#F8F9FA',
    borderColor: '#E9ECEF',
    opacity: 0.8,
  },
  input: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 12,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 32,
    gap: 16,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ff0000',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cancelButtonText: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#ff0000',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default PersonalInfoScreen;