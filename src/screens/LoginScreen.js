import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('demo@bukidplus.com');
  const [password, setPassword] = useState('demo123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Main');
    }, 1000);
  };

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('./assets/BUKIDPLUS.jpg')} // ./
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="demo@bukidplus.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password (Min. 6 Characters)</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="••••••"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Icon name={showPassword ? 'eye-off' : 'eye'} size={22} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity 
            style={[styles.loginButton, isLoading && styles.loginButtonDisabled]} 
            onPress={handleLogin}
            disabled={isLoading}
            activeOpacity={0.9}
          >
            {isLoading ? (
              <Text style={styles.loginButtonText}>Logging in...</Text>
            ) : (
              <Text style={styles.loginButtonText}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.createAccountButton}
            onPress={handleCreateAccount}
            activeOpacity={0.8}
          >
            <Text style={styles.createAccountText}>Create New Account</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.demoInfo}>
          <Text style={styles.demoText}>Demo Account</Text>
          <Text style={styles.demoEmail}>Email: demo@bukidplus.com</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: height * 0.1, paddingBottom: 30 },
  logoContainer: { alignItems: 'center', marginBottom: -5 },
  logoImage: { width: 320, height: 170, marginBottom: 20 },
  tagline: { fontSize: 18, color: '#333', fontWeight: '300', letterSpacing: 1 },
  formContainer: { width: '100%' },
  inputWrapper: { marginBottom: 24 },
  inputLabel: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', borderRadius: 12, borderWidth: 1, borderColor: '#E0E0E0', paddingHorizontal: 16 },
  input: { flex: 1, paddingVertical: 16, fontSize: 16, color: '#333' },
  eyeIcon: { padding: 8 },
  loginButton: { backgroundColor: '#FF0004', borderRadius: 12, paddingVertical: 18, alignItems: 'center', justifyContent: 'center', marginTop: 8, marginBottom: 16 },
  loginButtonDisabled: { backgroundColor: '#FF6666', opacity: 0.8 },
  loginButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  createAccountButton: { borderWidth: 2, borderColor: '#FF0004', borderRadius: 12, paddingVertical: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  createAccountText: { color: '#FF0004', fontSize: 16, fontWeight: '600' },
  forgotPasswordButton: { alignItems: 'center' },
  forgotPasswordText: { color: '#666', fontSize: 14, textDecorationLine: 'underline' },
  demoInfo: { alignItems: 'center', marginTop: 40, padding: 12 },
  demoText: { fontSize: 12, color: '#666', marginBottom: 4 },
  demoEmail: { fontSize: 11, color: '#999', fontStyle: 'italic' },
});

export default LoginScreen;