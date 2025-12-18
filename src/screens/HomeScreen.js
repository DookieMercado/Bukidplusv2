import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, { Path, Circle, Rect, G, Defs, ClipPath } from 'react-native-svg';

const { width } = Dimensions.get('window');

// CUSTOM SVG ICONS FOR HOME SCREEN
const WaterfallIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 12L10 9L13 12L16 9L19 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 20L7 16L10 19L13 16L16 19L19 16L21 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 3V9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const FestivalIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2V6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M12 12V14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M7 8L5 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M17 8L19 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M4 16L8 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M16 20L20 16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M3 14C3 14 5 16 7 16C9 16 11 14 12 14C13 14 15 16 17 16C19 16 21 14 21 14"
      stroke={color}
      strokeWidth="2"
    />
  </Svg>
);

const HeritageIcon = ({ color, size = 28 }) => (
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

const AdventureIcon = ({ color, size = 28 }) => (
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

const MountainIcon = ({ color, size = 28 }) => (
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

const CultureIcon = ({ color, size = 28 }) => (
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

const FoodIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 8V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M8 12V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M16 12V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M3 3H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M3 8H21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Circle cx="12" cy="3" r="1" fill={color} />
    <Circle cx="8" cy="7" r="1" fill={color} />
    <Circle cx="16" cy="7" r="1" fill={color} />
  </Svg>
);

const HotelIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="8" width="18" height="13" rx="2" stroke={color} strokeWidth="2" />
    <Path d="M7 8V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V8" stroke={color} strokeWidth="2" />
    <Path d="M7 12H17" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M7 16H17" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Circle cx="10" cy="14" r="1" fill={color} />
    <Circle cx="14" cy="14" r="1" fill={color} />
  </Svg>
);

// QUICK ACCESS SVG ICONS
const ARTourIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" />
    <Path d="M3 9H21" stroke={color} strokeWidth="2" />
    <Path d="M9 21V9" stroke={color} strokeWidth="2" />
    <Circle cx="7" cy="7" r="1" fill={color} />
    <Circle cx="12" cy="7" r="1" fill={color} />
    <Circle cx="17" cy="7" r="1" fill={color} />
  </Svg>
);

const BookTourIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M8 16L16 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M8 12L16 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M8 8L12 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" />
    <Path d="M3 9H21" stroke={color} strokeWidth="2" />
  </Svg>
);

const EventsIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="2" />
    <Path d="M3 10H21" stroke={color} strokeWidth="2" />
    <Path d="M8 2V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M16 2V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Circle cx="12" cy="15" r="1" fill={color} />
    <Circle cx="16" cy="15" r="1" fill={color} />
    <Circle cx="8" cy="15" r="1" fill={color} />
  </Svg>
);

const MapIconQuick = ({ color, size = 28 }) => (
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
    <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
  </Svg>
);

const HomeScreen = ({ navigation }) => {
  const featuredDestinations = [
  {
    id: 1,
    name: 'Monastery of Transfiguration',
    location: 'Malaybalay, Bukidnon',
    rating: 4.8,
    image: require('../../assets/images/MONASTERY.jpg'),
    type: 'Heritage Site',
  },
  {
    id: 2,
    name: 'Mt. Kitanglad',
    location: 'Lantapan, Bukidnon',
    rating: 4.9,
    image: require('../../assets/images/KITANGLAD.jpg'),
    type: 'Mountain',
  },
  {
    id: 3,
    name: 'Dahilayan Forest',
    location: 'Manolo Fortich, Bukidnon',
    rating: 4.7,
    image: require('../../assets/images/DAHILAYAN.jpg'),
    type: 'Adventure Park',
  },
  {
    id: 4,
    name: 'Kaamulan Grounds',
    location: 'Bukidnon Capitol',
    rating: 4.6,
    image: require('../../assets/images/KAAMULAN.jpg'),
    type: 'Cultural Site',
  },
];

  // EXPLORE CATEGORIES WITH SVG ICONS
  const exploreCategories = [
    { 
      id: 1, 
      title: 'Waterfalls', 
      icon: WaterfallIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
    { 
      id: 2, 
      title: 'Festivals', 
      icon: FestivalIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
    { 
      id: 3, 
      title: 'Heritage', 
      icon: HeritageIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
    { 
      id: 4, 
      title: 'Adventure', 
      icon: AdventureIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
    { 
      id: 5, 
      title: 'Mountains', 
      icon: MountainIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
    { 
      id: 6, 
      title: 'Culture', 
      icon: CultureIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
    { 
      id: 7, 
      title: 'Food', 
      icon: FoodIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
    { 
      id: 8, 
      title: 'Hotels', 
      icon: HotelIcon, 
      color: '#FF0004',
      bgColor: '#FFF5F5'
    },
  ];

  // QUICK ACCESS WITH SVG ICONS
  const quickActions = [
    { 
      id: 1, 
      title: 'AR Tour', 
      icon: ARTourIcon, 
      color: '#FF0004' 
    },
    { 
      id: 2, 
      title: 'Book Tour', 
      icon: BookTourIcon, 
      color: '#FF0004' 
    },
    { 
      id: 3, 
      title: 'History', 
      icon: EventsIcon, 
      color: '#FF0004' 
    },
    { 
      id: 4, 
      title: 'Map', 
      icon: MapIconQuick, 
      color: '#FF0004' 
    },
  ];

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSearch = () => {
    alert('Search functionality');
  };

  const handleARLaunch = () => {
    navigation.navigate('ARView');
  };

  const handleLearnMore = () => {
    alert('Learn more about Kaamulan Festival');
  };

  const handleDestination = (destination) => {
  switch(destination.id) {
    case 1: // Monastery of Transfiguration
      // navigation.navigate('Heritage');
      alert(`Navigate to ${destination.name}`);
      break;
    case 2: // Mt. Kitanglad
      navigation.navigate('Mountains');
      break;
    case 3: // Dahilayan Forest
      // navigation.navigate('Adventure');
      alert(`Navigate to ${destination.name}`);
      break;
    case 4: // Kaamulan Grounds
      // navigation.navigate('Culture');
      alert(`Navigate to ${destination.name}`);
      break;
    default:
      alert(`Navigate to ${destination.name}`);
  }
};

  // UPDATE THIS FUNCTION:
const handleCategory = (category) => {
  if (category.title === 'Waterfalls') {
    navigation.navigate('Waterfalls');
  } else if (category.title === 'Mountains') {
    navigation.navigate('Mountains');
  } else {
    alert(`Explore ${category.title}`);
  }
};








  const handleQuickAction = (action) => {
  if (action.title === 'AR Tour') {
    navigation.navigate('ARView');

  } else if (action.title === 'Map') {
    navigation.navigate('Maps');

  } else if (action.title === 'Book Tour') {
    navigation.navigate('Book'); 
    
  }
   else {
    alert(`Open ${action.title}`);
  }
};






  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar}>
            <Icon name="account" size={40} color="#FF0004" />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.userName}>Good Morning, Explorer</Text>
            <Text style={styles.greeting}>Discover the Province of Excellence</Text>

          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Icon name="bell" size={24} color="#333" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Icon name="magnify" size={22} color="#95a5a6" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search destinations, culture, food..."
              placeholderTextColor="#999"
              onFocus={handleSearch}
            />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <TouchableOpacity 
                  key={action.id} 
                  style={styles.quickActionCard}
                  onPress={() => handleQuickAction(action)}
                >
                  <View style={styles.quickActionIcon}>
                    <IconComponent color={action.color} size={28} />
                  </View>
                  <Text style={styles.quickActionText}>{action.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* AR Feature Card */}
        <TouchableOpacity style={styles.arCard} onPress={handleARLaunch}>
          <View style={styles.arContent}>
            <View style={styles.arHeader}>
              <View style={styles.arBadge}>
                <Icon name="star" size={16} color="#FFFFFF" />
                <Text style={styles.arBadgeText}>FEATURED</Text>
              </View>
              <Icon name="camera" size={32} color="#FFFFFF" style={styles.arMainIcon} />
            </View>
            <Text style={styles.arTitle}>Discover Mountain Legends</Text>
            <Text style={styles.arDescription}>
              Use AR to unveil stories behind landmarks
            </Text>
            <View style={styles.arButton}>
              <Text style={styles.arButtonText}>Launch AR</Text>
              <Icon name="arrow-right" size={20} color="#FF0004" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Featured Destinations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Featured Destinations</Text>
              <Text style={styles.sectionSubtitle}>Popular places in Bukidnon</Text>
            </View>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.destinationsScroll}
            contentContainerStyle={styles.destinationsContainer}
          >
            {featuredDestinations.map((destination) => (
              <TouchableOpacity 
                key={destination.id} 
                style={styles.destinationCard}
                onPress={() => handleDestination(destination)}
              >
                <View style={styles.destinationImageContainer}>
                  <Image source={destination.image} style={styles.destinationImage} />
                  <View style={styles.destinationOverlay} />
                  <View style={styles.destinationContent}>
                    <View style={styles.destinationType}>
                      <Text style={styles.typeText}>{destination.type}</Text>
                    </View>
                    <Text style={styles.destinationName}>{destination.name}</Text>
                    <View style={styles.destinationFooter}>
                      <View style={styles.locationContainer}>
                        <Icon name="map-marker" size={14} color="#FFFFFF" />
                        <Text style={styles.destinationLocation}>{destination.location}</Text>
                      </View>
                      <View style={styles.ratingContainer}>
                        <Icon name="star" size={14} color="#FFD700" />
                        <Text style={styles.ratingText}>{destination.rating}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Explore Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Explore Categories</Text>
              <Text style={styles.sectionSubtitle}>Find what interests you</Text>
            </View>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>All Categories</Text>
              <Icon name="chevron-right" size={20} color="#FF0004" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.categoriesGrid}>
            {exploreCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TouchableOpacity 
                  key={category.id} 
                  style={styles.categoryCard}
                  onPress={() => handleCategory(category)}
                >
                  <View style={[styles.categoryIcon, { backgroundColor: category.bgColor }]}>
                    <IconComponent color={category.color} size={28} />
                  </View>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Festival Banner */}
        <View style={styles.festivalSection}>
          <View style={styles.festivalCard}>
            <View style={styles.festivalContent}>
              <View style={styles.festivalBadge}>
                <Icon name="calendar" size={16} color="#FFFFFF" />
                <Text style={styles.festivalBadgeText}>UPCOMING EVENT</Text>
              </View>
              <Text style={styles.festivalTitle}>KAAMULAN FESTIVAL 2026</Text>
              <Text style={styles.festivalSubtitle}>
                Experience the Gathering of Tribes • Feb 20-28
              </Text>
              <TouchableOpacity style={styles.festivalButton} onPress={handleLearnMore}>
                <Text style={styles.festivalButtonText}>Learn More</Text>
                <Icon name="arrow-right" size={18} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.festivalIcon}>
              <Icon name="calendar-star" size={60} color="#FF0004" />
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

// KEEP ALL YOUR EXISTING STYLES EXACTLY AS THEY ARE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0004',
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: 0,
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FF0004',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActionsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quickActionCard: {
    alignItems: 'center',
    width: (width - 60) / 4,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFF5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  arCard: {
    backgroundColor: '#FF0004',
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  arContent: {
    flex: 1,
  },
  arHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  arBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#391111ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    gap: 1,
  },
  arBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  arMainIcon: {
    opacity: 0.9,
  },
  arTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  arDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
    marginBottom: 20,
  },
  arButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start',
    gap: 8,
  },
  arButtonText: {
    color: '#FF0004',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllText: {
    color: '#FF0004',
    fontSize: 14,
    fontWeight: '600',
  },
  destinationsScroll: {
    marginHorizontal: -20,
  },
  destinationsContainer: {
    paddingHorizontal: 20,
  },
  destinationCard: {
    width: width * 0.7,
    marginRight: 15,
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
  },
  destinationImageContainer: {
    flex: 1,
  },
  destinationImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  destinationOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  destinationContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  destinationType: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 0, 4, 0.9)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 10,
  },
  typeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  destinationName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 24,
  },
  destinationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  destinationLocation: {
    color: '#FFFFFF',
    fontSize: 12,
    opacity: 0.9,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  categoryCard: {
    width: (width - 60) / 4,
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  festivalSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  festivalCard: {
    backgroundColor: '#FFF5F5',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  festivalContent: {
    flex: 1,
  },
  festivalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF0004',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    gap: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  festivalBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  festivalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  festivalSubtitle: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 15,
  },
  festivalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF0004',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginLeft: 170,
    borderRadius: 10,
    alignSelf: 'flex-start',
    gap: 6,
    
  },
  festivalButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8
  },
  festivalIcon: {
    marginLeft: 15,
  },
  bottomSpacer: {
    height: 1,
  },
});

export default HomeScreen;