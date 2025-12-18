import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// CUSTOM SVG ICONS FOR MARKETSCREEN (keeping only essential ones)
const HeritageIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L20 7V21H4V7L12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 22V12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 12H15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const MountainIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 20L8 14L11 17L16 11L21 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 20H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M8 14L12 8L16 11"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AdventureIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8H20C21.1046 8 22 8.89543 22 10V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V10C2 8.89543 2.89543 8 4 8H6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M12 19V12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M9 15L12 12L15 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ScenicIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="8" cy="8" r="4" stroke={color} strokeWidth="2" />
    <Circle cx="16" cy="16" r="4" stroke={color} strokeWidth="2" />
    <Path
      d="M8 20L16 4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M8 12L12 8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const LakeIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M12 2V22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M2 12H22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" />
  </Svg>
);

const CultureIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="6" r="3" stroke={color} strokeWidth="2" />
    <Path
      d="M12 9C8.68629 9 6 11.2386 6 14C6 16.7614 8.68629 19 12 19C15.3137 19 18 16.7614 18 14C18 11.2386 15.3137 9 12 9Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M3 14H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const MenuIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 12H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M3 6H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M3 18H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const SearchIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" />
    <Path
      d="M21 21L16.65 16.65"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const MicIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M19 12V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M12 20V23"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const LayersIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 17L12 22L22 17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 12L12 17L22 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LocateIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 8V12L15 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="2"
    />
    <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
  </Svg>
);

const CloseIcon = ({ color, size = 24 }) => (
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

const StarIcon = ({ color, size = 24, filled = false }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L14.09 8.26L21 9.27L16 13.14L17.18 20L12 16.77L6.82 20L8 13.14L3 9.27L9.91 8.26L12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled ? color : "none"}
    />
  </Svg>
);

const TimeIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Path
      d="M12 6V12L16 14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const CashIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="2" y="6" width="20" height="12" rx="2" stroke={color} strokeWidth="2" />
    <Circle cx="12" cy="12" r="2" stroke={color} strokeWidth="2" />
    <Path d="M6 12H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

const NavigateIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L19 21L12 17L5 21L12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ClockIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Path
      d="M12 6V12L16 14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const CallIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C15.49 21 11.81 18.56 9 15C6.19 11.44 4.51 8.56 4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H8.07C8.5 2 8.89 2.24 9.07 2.63L10.43 5.82C10.59 6.16 10.56 6.55 10.36 6.86L9 9C10.45 11.82 12.18 13.55 15 15L17.14 13.64C17.45 13.44 17.84 13.41 18.18 13.57L21.37 14.93C21.76 15.11 22 15.5 22 15.93Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ShareIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M8.59 13.51L15.42 17.49"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M15.41 6.51L8.59 10.49"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const BookmarkIcon = ({ color, size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17L5 21V5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const MarketScreen = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(height * 0.3)).current;
  const cardSlideAnim = useRef(new Animated.Value(height)).current;
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const places = [
    {
      id: 1,
      name: 'Monastery of Transfiguration',
      type: 'Heritage Site',
      description: 'A modern architectural masterpiece featuring a pyramid-shaped church in Malaybalay City.',
      price: 'FREE',
      rating: 4.8,
      reviews: 234,
      status: 'Open now',
      latitude: 8.1543,
      longitude: 125.1295,
      position: { top: '32%', left: '58%' },
      icon: HeritageIcon,
      color: '#E74C3C',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Mt. Kitanglad Range',
      type: 'Mountain',
      description: 'UNESCO World Heritage Site, one of the highest peaks in the Philippines.',
      price: '₱150',
      rating: 4.9,
      reviews: 567,
      status: 'Open now',
      latitude: 8.1333,
      longitude: 124.9833,
      position: { top: '42%', left: '45%' },
      icon: MountainIcon,
      color: '#27AE60',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Dahilayan Adventure Park',
      type: 'Adventure Park',
      description: 'Experience the longest dual zipline in Asia and various adventure activities.',
      price: '₱350 - ₱1,200',
      rating: 4.7,
      reviews: 892,
      status: 'Open now',
      latitude: 8.2667,
      longitude: 124.9000,
      position: { top: '28%', left: '42%' },
      icon: AdventureIcon,
      color: '#3498DB',
      image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Suarez Hills',
      type: 'Tourist Attraction',
      description: 'Scenic viewpoint with rolling hills and picturesque landscapes.',
      price: '₱20',
      rating: 4.5,
      reviews: 320,
      status: 'Open now',
      latitude: 8.0542,
      longitude: 125.1295,
      position: { top: '48%', left: '52%' },
      icon: ScenicIcon,
      color: '#F39C12',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Lake Apo',
      type: 'Crater Lake',
      description: 'Serene volcanic crater lake surrounded by lush forest.',
      price: '₱50',
      rating: 4.6,
      reviews: 445,
      status: 'Open now',
      latitude: 7.9500,
      longitude: 125.2500,
      position: { top: '58%', left: '62%' },
      icon: LakeIcon,
      color: '#1ABC9C',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Kaamulan Festival Grounds',
      type: 'Cultural Site',
      description: 'Annual festival venue celebrating the seven tribes of Bukidnon.',
      price: 'FREE',
      rating: 4.4,
      reviews: 178,
      status: 'Opens 8:00 AM',
      latitude: 8.1500,
      longitude: 125.1300,
      position: { top: '35%', left: '60%' },
      icon: CultureIcon,
      color: '#9B59B6',
      image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&auto=format&fit=crop',
    },
  ];

  // Initialize marker animations
  const markerScaleAnims = useRef(places.map(() => new Animated.Value(0))).current;

  // Start animations on component mount
  useEffect(() => {
    // Fade in the entire screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Slide up map elements
    Animated.spring(slideUpAnim, {
      toValue: 0,
      tension: 50,
      friction: 8,
      useNativeDriver: true,
      delay: 300,
    }).start();

    // Search bar slide in
    Animated.spring(searchBarAnim, {
      toValue: 1,
      tension: 60,
      friction: 7,
      useNativeDriver: true,
      delay: 500,
    }).start();

    // Staggered marker animations
    const markerAnimations = places.map((_, index) =>
      Animated.spring(markerScaleAnims[index], {
        toValue: 1,
        tension: 30,
        friction: 3,
        useNativeDriver: true,
        delay: 600 + (index * 100),
      })
    );
    
    Animated.stagger(100, markerAnimations).start();

    // Continuous pulse animation for selected marker
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Animate card when place is selected
  useEffect(() => {
    if (selectedPlace) {
      Animated.spring(cardSlideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
      
      // Bounce the selected marker
      const markerIndex = places.findIndex(p => p.id === selectedPlace.id);
      if (markerIndex >= 0) {
        Animated.sequence([
          Animated.spring(markerScaleAnims[markerIndex], {
            toValue: 1.3,
            tension: 100,
            friction: 3,
            useNativeDriver: true,
          }),
          Animated.spring(markerScaleAnims[markerIndex], {
            toValue: 1,
            tension: 100,
            friction: 3,
            useNativeDriver: true,
          }),
        ]).start();
      }
    } else {
      Animated.spring(cardSlideAnim, {
        toValue: height,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  }, [selectedPlace]);

  const handleMarkerPress = (place) => {
    setSelectedPlace(place);
  };

  const handleCloseCard = () => {
    setSelectedPlace(null);
  };

  // Pulse ring animation for selected marker
  const pulseRingScale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1.5],
  });

  const pulseRingOpacity = pulseAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.3, 0.7, 0],
  });

  // Search bar transform
  const searchBarTranslateY = searchBarAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0],
  });

  const searchBarOpacity = searchBarAnim;

  // Animated marker component
  const AnimatedMarker = ({ place, index }) => {
    const IconComponent = place.icon;
    
    return (
      <Animated.View
        style={[
          styles.markerContainer,
          place.position,
          {
            opacity: markerScaleAnims[index],
            transform: [
              { scale: markerScaleAnims[index] },
              { translateY: slideUpAnim }
            ]
          }
        ]}
      >
        <TouchableOpacity
          onPress={() => handleMarkerPress(place)}
          activeOpacity={0.7}
          style={styles.markerTouchable}
        >
          <Animated.View 
            style={[
              styles.marker,
              { backgroundColor: place.color }
            ]}
          >
            <IconComponent color="#FFFFFF" size={18} />
          </Animated.View>
          <View style={[styles.markerShadow, { backgroundColor: place.color }]} />
          
          {/* Pulse ring for selected marker */}
          {selectedPlace?.id === place.id && (
            <Animated.View 
              style={[
                styles.markerRipple, 
                { 
                  borderColor: place.color,
                  transform: [{ scale: pulseRingScale }],
                  opacity: pulseRingOpacity,
                }
              ]} 
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Clean Grid Map Interface */}
      <View style={styles.mapContainer}>
        {/* Clean Grid Background */}
        <Animated.View 
          style={[
            styles.mapBackground, 
            { 
              opacity: fadeAnim,
              transform: [{ translateY: slideUpAnim }]
            }
          ]}
        >
          {/* Simple grid lines */}
          <View style={styles.gridOverlay}>
            {[...Array(15)].map((_, i) => (
              <View 
                key={`h-${i}`} 
                style={[
                  styles.gridLineHorizontal, 
                  { top: `${(i + 1) * 6.66}%` }
                ]} 
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <View 
                key={`v-${i}`} 
                style={[
                  styles.gridLineVertical, 
                  { left: `${(i + 1) * 6.66}%` }
                ]} 
              />
            ))}
          </View>

          {/* Grid coordinates (optional) */}
          <View style={styles.gridCoordinates}>
            {[...Array(4)].map((_, row) => (
              [...Array(4)].map((_, col) => (
                <Text 
                  key={`${row}-${col}`} 
                  style={[
                    styles.coordinateText,
                    { 
                      top: `${row * 25 + 12.5}%`, 
                      left: `${col * 25 + 12.5}%` 
                    }
                  ]}
                >
                  {`${col + 1},${row + 1}`}
                </Text>
              ))
            ))}
          </View>
        </Animated.View>

        {/* Place Markers with staggered animations */}
        {places.map((place, index) => (
          <AnimatedMarker key={place.id} place={place} index={index} />
        ))}

        {/* Search Bar with slide animation */}
        <Animated.View 
          style={[
            styles.searchOverlay,
            {
              transform: [{ translateY: searchBarTranslateY }],
              opacity: searchBarOpacity,
            }
          ]}
        >
          <View style={styles.searchBar}>
            <TouchableOpacity style={styles.menuButton}>
              <MenuIcon color="#5F6368" size={24} />
            </TouchableOpacity>
            <SearchIcon color="#5F6368" size={20} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Bukidnon"
              placeholderTextColor="#80868B"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity>
              <MicIcon color="#4285F4" size={20} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Simple Map Controls */}
        <Animated.View 
          style={[
            styles.mapControls,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideUpAnim }]
            }
          ]}
        >
          <TouchableOpacity style={styles.controlButton}>
            <LayersIcon color="#5F6368" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <LocateIcon color="#5F6368" size={22} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Place Detail Card with slide animation */}
      <Animated.View 
        style={[
          styles.detailCard,
          {
            transform: [{ translateY: cardSlideAnim }]
          }
        ]}
      >
        {selectedPlace && (
          <>
            <View style={styles.dragHandle} />
            
            <ScrollView 
              showsVerticalScrollIndicator={false}
              style={styles.scrollView}
            >
              {/* Place Image with fade animation */}
              <Animated.View 
                style={[
                  styles.imageContainer,
                  { opacity: fadeAnim }
                ]}
              >
                <Image 
                  source={{ uri: selectedPlace.image }}
                  style={styles.placeImage}
                />
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={handleCloseCard}
                >
                  <CloseIcon color="#5F6368" size={22} />
                </TouchableOpacity>
              </Animated.View>

              {/* Place Info with staggered animations */}
              <View style={styles.placeInfo}>
                <Animated.Text 
                  style={[
                    styles.placeName,
                    { opacity: fadeAnim }
                  ]}
                >
                  {selectedPlace.name}
                </Animated.Text>
                
                {/* Rating Row */}
                <Animated.View 
                  style={[
                    styles.ratingRow,
                    { opacity: fadeAnim }
                  ]}
                >
                  <Text style={styles.ratingText}>{selectedPlace.rating}</Text>
                  <View style={styles.stars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon 
                        key={star}
                        color="#FBBC04"
                        size={14}
                        filled={star <= Math.floor(selectedPlace.rating)}
                      />
                    ))}
                  </View>
                  <Text style={styles.reviewCount}>({selectedPlace.reviews})</Text>
                </Animated.View>

                {/* Type and Status */}
                <Animated.View 
                  style={[
                    styles.metaRow,
                    { opacity: fadeAnim }
                  ]}
                >
                  <Text style={styles.placeType}>{selectedPlace.type}</Text>
                  <Text style={styles.separator}>•</Text>
                  <TimeIcon color="#188038" size={14} />
                  <Text style={styles.statusText}>{selectedPlace.status}</Text>
                </Animated.View>

                {/* Price Badge with scale animation */}
                <Animated.View 
                  style={[
                    styles.priceBadge, 
                    { 
                      backgroundColor: `${selectedPlace.color}15`,
                      transform: [{
                        scale: fadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.8, 1]
                        })
                      }]
                    }
                  ]}
                >
                  <CashIcon color={selectedPlace.color} size={18} />
                  <Text style={[styles.priceText, { color: selectedPlace.color }]}>
                    {selectedPlace.price}
                  </Text>
                </Animated.View>

                {/* Description */}
                <Animated.Text 
                  style={[
                    styles.description,
                    { opacity: fadeAnim }
                  ]}
                >
                  {selectedPlace.description}
                </Animated.Text>

                {/* Action Buttons with staggered animations */}
                <Animated.View 
                  style={[
                    styles.actionRow,
                    { opacity: fadeAnim }
                  ]}
                >
                  <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.actionIconContainer}>
                      <NavigateIcon color="#FFFFFF" size={24} />
                    </View>
                    <Text style={styles.actionText}>Directions</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.actionIconContainer}>
                      <ClockIcon color="#FFFFFF" size={24} />
                    </View>
                    <Text style={styles.actionText}>Start</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.actionIconContainer}>
                      <CallIcon color="#FFFFFF" size={24} />
                    </View>
                    <Text style={styles.actionText}>Call</Text>
                  </TouchableOpacity>
                </Animated.View>

                {/* Additional Info with fade animation */}
                <Animated.View 
                  style={[
                    styles.additionalInfo,
                    { opacity: fadeAnim }
                  ]}
                >
                  <Text style={styles.sectionTitle}>Additional Information</Text>
                  <View style={styles.infoRow}>
                    <TimeIcon color="#5F6368" size={18} />
                    <Text style={styles.infoText}>Best time to visit: Morning</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <CashIcon color="#5F6368" size={18} />
                    <Text style={styles.infoText}>Payment: Cash only</Text>
                  </View>
                  <View style={styles.infoRow}>
                    <NavigateIcon color="#5F6368" size={18} />
                    <Text style={styles.infoText}>Parking available</Text>
                  </View>
                </Animated.View>
              </View>
            </ScrollView>

            {/* Bottom Action Bar */}
            <Animated.View 
              style={[
                styles.bottomActions,
                { opacity: fadeAnim }
              ]}
            >
              <TouchableOpacity style={styles.bookmarkButton}>
                <BookmarkIcon color="#5F6368" size={24} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareButton}>
                <ShareIcon color="#5F6368" size={24} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.visitButton}>
                <Text style={styles.visitButtonText}>Start Visit</Text>
              </TouchableOpacity>
            </Animated.View>
          </>
        )}
      </Animated.View>

      {/* Bottom Navigation */}
      {!selectedPlace && (
        <Animated.View 
          style={[
            styles.bottomNav,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideUpAnim }]
            }
          ]}
        >
          <Text style={styles.navTitle}>Bukidnon Tourist Spots</Text>
          <Text style={styles.navSubtitle}>Tap on markers to explore places</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  // Clean Grid Background
  mapBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  gridOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gridLineHorizontal: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#E8EAED', // Light gray grid lines
  },
  gridLineVertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#E8EAED', // Light gray grid lines
  },
  gridCoordinates: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  coordinateText: {
    position: 'absolute',
    fontSize: 10,
    color: '#B0B0B0',
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  // Marker Styles
  markerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    zIndex: 2,
  },
  markerShadow: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    opacity: 0.2,
    zIndex: 1,
  },
  markerRipple: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    zIndex: 0,
  },
  // Search Bar
  searchOverlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  menuButton: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
    fontSize: 16,
    color: '#202124',
  },
  // Map Controls
  mapControls: {
    position: 'absolute',
    right: 20,
    bottom: 140,
    alignItems: 'center',
  },
  controlButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  // Detail Card
  detailCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.75,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 20,
    zIndex: 20,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#DADCE0',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: 'hidden',
  },
  placeImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  placeInfo: {
    padding: 20,
  },
  placeName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#202124',
    marginRight: 6,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  reviewCount: {
    fontSize: 14,
    color: '#5F6368',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  placeType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5F6368',
    marginRight: 8,
  },
  separator: {
    fontSize: 14,
    color: '#DADCE0',
    marginHorizontal: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#188038',
    marginLeft: 6,
  },
  priceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3C4043',
    marginBottom: 24,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    width: (width - 80) / 3,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#5F6368',
    fontWeight: '500',
  },
  additionalInfo: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#202124',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#5F6368',
    marginLeft: 12,
  },
  bottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F4',
  },
  bookmarkButton: {
    marginRight: 20,
  },
  shareButton: {
    marginRight: 'auto',
  },
  visitButton: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 24,
  },
  visitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 4,
  },
  navSubtitle: {
    fontSize: 14,
    color: '#5F6368',
  },
});

export default MarketScreen;