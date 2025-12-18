import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height } = Dimensions.get('window');

const VerifyCodeScreen = ({ navigation, route }) => {
  const { email = 'juandelacross@gmail.com' } = route.params || {};
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputs = useRef([]);

  const handleCodeChange = (text, index) => {
    // Allow only numbers
    const numericText = text.replace(/[^0-9]/g, '');
    
    const newCode = [...code];
    newCode[index] = numericText.slice(0, 1);
    setCode(newCode);

    // Auto focus next input
    if (numericText && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    // Auto submit if all fields are filled
    if (newCode.every(digit => digit !== '') && index === 5) {
      handleVerifyCode();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = () => {
    const verificationCode = code.join('');
    
    if (verificationCode.length !== 6) {
      Alert.alert('Error', 'Please enter the 6-digit verification code');
      return;
    }

    if (verificationCode !== '123456') { // Demo code
      Alert.alert('Error', 'Invalid verification code. Try: 123456');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('ResetPassword', { email });
    }, 1000);
  };

  const handleResendCode = () => {
    Alert.alert('Code Resent', 'New verification code sent to your email');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Verification Code</Text>
        </View>

        {/* Instructions */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            We've sent a 6-digit verification code to:
          </Text>
          <Text style={styles.emailText}>{email}</Text>
          <Text style={styles.instructionSubText}>
            Enter the code below to continue.
          </Text>
        </View>

        {/* Code Inputs */}
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => inputs.current[index] = ref}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="numeric"
              maxLength={1}
              selectTextOnFocus
              autoFocus={index === 0}
            />
          ))}
        </View>

        {/* Demo Code Hint */}
        <View style={styles.demoHint}>
          <Text style={styles.demoHintText}>Demo code: 123456</Text>
        </View>

        {/* Verify Button */}
        <TouchableOpacity 
          style={[styles.verifyButton, isLoading && styles.verifyButtonDisabled]} 
          onPress={handleVerifyCode}
          disabled={isLoading}
          activeOpacity={0.9}
        >
          {isLoading ? (
            <Text style={styles.verifyButtonText}>Verifying...</Text>
          ) : (
            <Text style={styles.verifyButtonText}>Verify Code</Text>
          )}
        </TouchableOpacity>

        {/* Resend Code */}
        <TouchableOpacity 
          style={styles.resendButton}
          onPress={handleResendCode}
        >
          <Text style={styles.resendText}>Didn't receive code? </Text>
          <Text style={styles.resendLink}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: height * 0.05,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  title: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
  },
  instructionContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 40,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 16,
    color: '#FF0004',
    fontWeight: '600',
    marginBottom: 8,
  },
  instructionSubText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 60,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  demoHint: {
    alignItems: 'center',
    marginBottom: 30,
  },
  demoHintText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  verifyButton: {
    backgroundColor: '#FF0004',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  verifyButtonDisabled: {
    backgroundColor: '#FF6666',
    opacity: 0.8,
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  resendText: {
    color: '#666',
    fontSize: 14,
  },
  resendLink: {
    color: '#FF0004',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default VerifyCodeScreen;