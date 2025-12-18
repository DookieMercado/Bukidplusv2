import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  
import Svg, { Path, Circle, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// CUSTOM SVG ICONS
const ARCloseIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 6L6 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 6L18 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ARInfoIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Path d="M12 8V12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Circle cx="12" cy="16" r="1" fill={color} />
  </Svg>
);

const ARCameraIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" />
    <Circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" />
    <Path d="M3 9H21" stroke={color} strokeWidth="2" />
    <Path d="M9 21V9" stroke={color} strokeWidth="2" />
  </Svg>
);

const ARBackIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 12H5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M12 19L5 12L12 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ARPinIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 10C21 17 12 21 12 21C12 21 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" />
  </Svg>
);

const ARView = ({ navigation }) => {
  const [activePin, setActivePin] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);
  
  // Animation values
  const scanPulseAnim = useRef(new Animated.Value(0)).current;
  const gridOpacityAnim = useRef(new Animated.Value(0)).current;
  const cardSlideAnim = useRef(new Animated.Value(height)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const badgeScaleAnim = useRef(new Animated.Value(0)).current;
  const scanButtonScale = useRef(new Animated.Value(1)).current;

  // Bukidnon Mountain features with pre-defined positions
  const mountainFeatures = [
    {
      id: 1,
      title: 'Mt. Kitanglad Peak',
      description: 'The highest peak in Bukidnon at 2,899 meters above sea level. A UNESCO World Heritage Site and home to the critically endangered Philippine Eagle. The mountain is sacred to the indigenous Talaandig and Higaonon tribes.',
      fact: 'UNESCO World Heritage Site',
      elevation: '2,899 MASL',
      position: { x: width * 0.3, y: height * 0.2 },
      icon: '⛰️',
      color: '#27AE60',
    },
    {
      id: 2,
      title: 'Bukidnon Pine Forest',
      description: 'Unique tropical pine forest found only in Bukidnon. The Benguet pine trees (Pinus kesiya) are approximately 50-60 years old. This ecosystem supports various bird species and provides watershed for surrounding communities.',
      fact: 'Only tropical pine forest in Mindanao',
      elevation: '1,800 MASL',
      position: { x: width * 0.7, y: height * 0.35 },
      icon: '🌲',
      color: '#2ECC71',
    },
    {
      id: 3,
      title: 'Talaandig Village',
      description: 'Home to the Talaandig tribe, one of the seven indigenous tribes of Bukidnon. Experience authentic Lumad culture, traditional music, and the famous Kaamulan Festival which celebrates tribal unity.',
      fact: 'Cultural heritage site',
      elevation: '1,200 MASL',
      position: { x: width * 0.2, y: height * 0.5 },
      icon: '🏠',
      color: '#E74C3C',
    },
    {
      id: 4,
      title: 'Maramag Watershed',
      description: 'Origin of 7 major waterfalls in Bukidnon including the majestic waterfalls of Camp Phillips. Provides fresh water to three towns and is crucial for agriculture in the province.',
      fact: 'Fresh water source for 3 towns',
      elevation: '1,500 MASL',
      position: { x: width * 0.8, y: height * 0.55 },
      icon: '💧',
      color: '#3498DB',
    },
    {
      id: 5,
      title: 'Hiking Trail to Summit',
      description: 'Main trail used by climbers and tourists since 1985. Approximately 8km to the summit with 5 established campsites. The trail passes through mossy forests and offers views of rare orchids and pitcher plants.',
      fact: 'Established in 1985',
      elevation: 'Varies',
      position: { x: width * 0.45, y: height * 0.65 },
      icon: '🥾',
      color: '#F39C12',
    },
    {
      id: 6,
      title: 'Cloud Forest Zone',
      description: 'Mossy cloud forest with 95% humidity year-round. Home to unique species like the Bukidnon forest frog and various endemic orchids. The forest captures moisture from clouds, creating its own weather system.',
      fact: '95% humidity year-round',
      elevation: '2,200 MASL',
      position: { x: width * 0.6, y: height * 0.4 },
      icon: '☁️',
      color: '#9B59B6',
    },
  ];

  // Bukidnon Mountain Images
  const bukidnonImages = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mount_Kitanglad_2.jpg/800px-Mount_Kitanglad_2.jpg',
  ];

  // Start animations on mount
  useEffect(() => {
    // Grid fade in animation
    Animated.timing(gridOpacityAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Continuous scanning pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanPulseAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scanPulseAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Continuous center target pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Badge pop-in animation
    Animated.spring(badgeScaleAnim, {
      toValue: 1,
      tension: 20,
      friction: 3,
      useNativeDriver: true,
      delay: 500,
    }).start();
  }, []);

  // Animate info card when activePin changes
  useEffect(() => {
    if (activePin) {
      Animated.spring(cardSlideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(cardSlideAnim, {
        toValue: height,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [activePin]);

  const handlePinPress = (feature) => {
    setActivePin(feature);
    setShowInstructions(false);
    
    // Button press animation
    Animated.sequence([
      Animated.timing(scanButtonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scanButtonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleCloseInfo = () => {
    setActivePin(null);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleScan = () => {
    // Scale animation on scan button press
    Animated.sequence([
      Animated.timing(scanButtonScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scanButtonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    alert('Point your camera at any Bukidnon mountain image to discover cultural and historical information!');
  };

  // Scanning ring animation
  const scanRingScale = scanPulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  const scanRingOpacity = scanPulseAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.5, 0.8, 0],
  });

  // Target circle pulse animation
  const targetScale = pulseAnim.interpolate({
    inputRange: [1, 1.2],
    outputRange: [1, 1.1],
  });

  // FIX: Emoji icons wrapped in Text component
  const PinMarker = ({ feature, isActive }) => {
    const pinScaleAnim = useRef(new Animated.Value(1)).current;
    
    useEffect(() => {
      // Bounce animation when pin becomes active
      if (isActive) {
        Animated.sequence([
          Animated.spring(pinScaleAnim, {
            toValue: 1.3,
            tension: 100,
            friction: 3,
            useNativeDriver: true,
          }),
          Animated.spring(pinScaleAnim, {
            toValue: 1,
            tension: 100,
            friction: 3,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }, [isActive]);

    return (
      <Animated.View
        style={[
          styles.featurePinContainer,
          { 
            left: feature.position.x - 25,
            top: feature.position.y - 25,
            transform: [{ scale: pinScaleAnim }],
          }
        ]}
      >
        <TouchableOpacity
          style={[styles.featurePin, { backgroundColor: feature.color + 'CC' }]}
          onPress={() => handlePinPress(feature)}
          activeOpacity={0.7}
        >
          <Text style={styles.pinIcon}>{feature.icon}</Text>
        </TouchableOpacity>
        {isActive && (
          <Animated.View style={[styles.activePulse, { borderColor: feature.color }]} />
        )}
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bukidnon AR Explorer</Text>
      </View>

      {/* AR Camera Simulation */}
      <View style={styles.cameraContainer}>
        {/* Bukidnon Mountain Image (Background) */}
        <Image
          source={{ uri: bukidnonImages[0] }}
          style={styles.mountainImage}
          resizeMode="cover"
          onError={(error) => console.log('Image loading error:', error)}
        />

        {/* AR Overlay Grid with fade animation */}
        <Animated.View style={[styles.arOverlay, { opacity: gridOpacityAnim }]}>
          {/* Grid Lines */}
          <View style={styles.gridLines}>
            {[...Array(8)].map((_, i) => (
              <View key={`h-${i}`} style={[styles.gridLine, styles.horizontalLine, { top: `${i * 12.5}%` }]} />
            ))}
            {[...Array(8)].map((_, i) => (
              <View key={`v-${i}`} style={[styles.gridLine, styles.verticalLine, { left: `${i * 12.5}%` }]} />
            ))}
          </View>

          {/* Scanning Ring Animation */}
          <Animated.View 
            style={[
              styles.scanRing, 
              { 
                transform: [{ scale: scanRingScale }],
                opacity: scanRingOpacity,
              }
            ]} 
          />

          {/* Center Target with pulse animation */}
          <View style={styles.centerTarget}>
            <Animated.View style={[styles.targetCircle, { transform: [{ scale: targetScale }] }]}>
              <ARPinIcon color="#FF0004" size={40} />
            </Animated.View>
          </View>

          {/* Feature Pins */}
          {mountainFeatures.map((feature) => (
            <PinMarker 
              key={feature.id} 
              feature={feature} 
              isActive={activePin?.id === feature.id} 
            />
          ))}
        </Animated.View>

        {/* Scan Button with scale animation */}
        <Animated.View style={{ transform: [{ scale: scanButtonScale }] }}>
          <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
            <ARCameraIcon color="#FFFFFF" size={24} />
            <Text style={styles.scanText}>SCAN BUKIDNON</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Instructions Panel with slide animation */}
      {showInstructions && (
        <Animated.View 
          style={[
            styles.instructionsPanel,
            {
              transform: [{
                translateY: showInstructions ? 0 : -100
              }],
              opacity: showInstructions ? 1 : 0
            }
          ]}
        >
          <View style={styles.instructionsHeader}>
            <Text style={styles.instructionsTitle}>Discover Bukidnon Mountains</Text>
            <TouchableOpacity onPress={() => setShowInstructions(false)}>
              <ARCloseIcon color="#5F6368" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.instructionsContent}>
            <View style={styles.instructionItem}>
              <Text style={styles.instructionNumber}>1</Text>
              <View style={styles.instructionText}>
                <Text style={styles.instructionTitle}>Point Camera</Text>
                <Text style={styles.instructionDesc}>
                  Point your device at any Bukidnon mountain or landscape
                </Text>
              </View>
            </View>
            <View style={styles.instructionItem}>
              <Text style={styles.instructionNumber}>2</Text>
              <View style={styles.instructionText}>
                <Text style={styles.instructionTitle}>Tap Markers</Text>
                <Text style={styles.instructionDesc}>
                  Tap colored markers to learn about cultural and natural features
                </Text>
              </View>
            </View>
            <View style={styles.instructionItem}>
              <Text style={styles.instructionNumber}>3</Text>
              <View style={styles.instructionText}>
                <Text style={styles.instructionTitle}>Explore Heritage</Text>
                <Text style={styles.instructionDesc}>
                  Discover indigenous culture, history, and biodiversity
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.instructionsFooter}>
            Experience the beauty and culture of Bukidnon through Augmented Reality
          </Text>
        </Animated.View>
      )}

      {/* Feature Info Card with slide animation */}
      <Animated.View 
        style={[
          styles.infoCard,
          {
            transform: [{ translateY: cardSlideAnim }]
          }
        ]}
      >
        {activePin && (
          <>
            <View style={styles.dragHandle} />
            <ScrollView style={styles.infoScroll} showsVerticalScrollIndicator={false}>
              <View style={styles.infoHeader}>
                <View style={[styles.infoIcon, { backgroundColor: activePin.color }]}>
                  <Text style={styles.infoIconText}>{activePin.icon}</Text>
                </View>
                <View style={styles.infoTitleContainer}>
                  <Text style={styles.infoTitle}>{activePin.title}</Text>
                  <View style={styles.infoMeta}>
                    <Text style={styles.infoFact}>{activePin.fact}</Text>
                    <Text style={styles.infoElevation}>• {activePin.elevation}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={handleCloseInfo}>
                  <ARCloseIcon color="#5F6368" size={20} />
                </TouchableOpacity>
              </View>
              
              <Text style={styles.infoDescription}>{activePin.description}</Text>
              
              <View style={styles.additionalInfo}>
                <Text style={styles.additionalTitle}>Cultural Significance</Text>
                <Text style={styles.additionalText}>
                  This feature holds deep cultural significance for the indigenous tribes of Bukidnon. It is often featured in tribal rituals, stories, and the annual Kaamulan Festival celebrating tribal unity.
                </Text>
              </View>

              <View style={styles.tipsContainer}>
                <Text style={styles.tipsTitle}>Visiting Tips:</Text>
                <View style={styles.tipItem}>
                  <Text style={styles.tipBullet}>•</Text>
                  <Text style={styles.tipText}>Best visited during dry season (Feb-Apr)</Text>
                </View>
                <View style={styles.tipItem}>
                  <Text style={styles.tipBullet}>•</Text>
                  <Text style={styles.tipText}>Local guides recommended for hiking</Text>
                </View>
                <View style={styles.tipItem}>
                  <Text style={styles.tipBullet}>•</Text>
                  <Text style={styles.tipText}>Respect indigenous customs and sacred sites</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreText}>Learn More About Bukidnon Heritage</Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        )}
      </Animated.View>

      {/* Bottom Hint with fade animation */}
      {!activePin && !showInstructions && (
        <Animated.View 
          style={[
            styles.bottomHint,
            {
              opacity: gridOpacityAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }
          ]}
        >
          <Text style={styles.hintText}>Tap on the markers to explore Bukidnon's mountains</Text>
        </Animated.View>
      )}

      {/* Bukidnon Badge with scale animation */}
      <Animated.View 
        style={[
          styles.bukidnonBadge,
          {
            transform: [{ scale: badgeScaleAnim }]
          }
        ]}
      >
        <Text style={styles.bukidnonText}>BUKIDNON</Text>
        <Text style={styles.bukidnonSubtext}>Land of the Mountain People</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '800',
    alignItems: 'center',
    
    marginLeft: 75,
  },
  infoButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
  },
  mountainImage: {
    width: '100%',
    height: '100%',
  },
  arOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  gridLines: {
    ...StyleSheet.absoluteFillObject,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
  },
  verticalLine: {
    height: '100%',
    width: 1,
  },
  scanRing: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -150,
    marginTop: -150,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#FF0004',
  },
  centerTarget: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -40,
    marginTop: -40,
  },
  targetCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featurePinContainer: {
    position: 'absolute',
  },
  featurePin: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  pinIcon: {
    fontSize: 24,
    textAlign: 'center',
  },
  activePulse: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    opacity: 0.5,
    top: -10,
    left: -10,
  },
  scanButton: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    marginLeft: -105,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF0004',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    gap: 10,
    elevation: 8,
    shadowColor: '#FF0004',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  scanText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  instructionsPanel: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  instructionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  instructionsContent: {
    gap: 15,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  instructionNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF0004',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
  instructionText: {
    flex: 1,
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  instructionDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  instructionsFooter: {
    marginTop: 15,
    fontSize: 12,
    color: '#FF0004',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  infoCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: height * 0.65,
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#DADCE0',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  infoIconText: {
    fontSize: 24,
    textAlign: 'center',
  },
  infoTitleContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  infoMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoFact: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
    backgroundColor: '#FFF5F5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  infoElevation: {
    fontSize: 13,
    color: '#3498DB',
    fontWeight: '500',
  },
  infoScroll: {
    padding: 20,
  },
  infoDescription: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 20,
  },
  additionalInfo: {
    backgroundColor: '#FFF5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  additionalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0004',
    marginBottom: 8,
  },
  additionalText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  tipsContainer: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  tipBullet: {
    color: '#FF0004',
    fontSize: 16,
    marginRight: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    flex: 1,
  },
  learnMoreButton: {
    backgroundColor: '#FF0004',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  learnMoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomHint: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  hintText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  bukidnonBadge: {
    position: 'absolute',
    top: 100,
    right: 20,
    backgroundColor: 'rgba(255, 0, 4, 0.8)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  bukidnonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  bukidnonSubtext: {
    color: '#FFFFFF',
    fontSize: 9,
    opacity: 0.9,
  },
});

export default ARView;