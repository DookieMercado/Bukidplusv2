import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const BookHistoryScreen = () => {
  const navigation = useNavigation();

  // Custom SVG Icons for different booking types
  const MountainIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx="20" cy="20" r="18" fill="#FF0000" opacity="0.1" />
      <Path
        d="M12 28L20 12L28 28H12Z"
        stroke="#FF0000"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <Path
        d="M16 20L20 16L24 20L20 24L16 20Z"
        fill="#FF0000"
        fillOpacity="0.3"
      />
    </Svg>
  );

  const TempleIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx="20" cy="20" r="18" fill="#4CAF50" opacity="0.1" />
      <Rect x="15" y="10" width="10" height="20" fill="#4CAF50" />
      <Path
        d="M10 30H30"
        stroke="#4CAF50"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path d="M13 10L20 5L27 10" stroke="#4CAF50" strokeWidth="2" fill="none" />
    </Svg>
  );

  const WaterfallIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx="20" cy="20" r="18" fill="#2196F3" opacity="0.1" />
      <Path
        d="M15 12V28"
        stroke="#2196F3"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M20 10V28"
        stroke="#2196F3"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M25 14V28"
        stroke="#2196F3"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M12 28H28"
        stroke="#2196F3"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );

  const ForestIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx="20" cy="20" r="18" fill="#8BC34A" opacity="0.1" />
      <Path
        d="M15 25L20 15L25 25L20 30L15 25Z"
        fill="#8BC34A"
        fillOpacity="0.7"
      />
      <Path
        d="M12 18L20 10L28 18L20 26L12 18Z"
        fill="#8BC34A"
        fillOpacity="0.5"
      />
    </Svg>
  );

  const MuseumIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx="20" cy="20" r="18" fill="#FF9800" opacity="0.1" />
      <Rect x="12" y="15" width="16" height="12" fill="#FF9800" />
      <Path d="M12 15L20 10L28 15" fill="#FF9800" />
      <Rect x="16" y="18" width="2" height="6" fill="#FFF" />
      <Rect x="22" y="18" width="2" height="6" fill="#FFF" />
    </Svg>
  );

  const VillageIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx="20" cy="20" r="18" fill="#795548" opacity="0.1" />
      <Rect x="12" y="20" width="6" height="8" fill="#795548" />
      <Rect x="22" y="20" width="6" height="8" fill="#795548" />
      <Path d="M10 20L20 12L30 20" fill="#795548" />
      <Circle cx="15" cy="24" r="1" fill="#FFF" />
      <Circle cx="25" cy="24" r="1" fill="#FFF" />
    </Svg>
  );

  // Booking History Data
  const bookingHistory = [
    {
      id: 1,
      title: 'Mount Dulang-dulang Trek',
      date: 'March 15, 2024',
      status: 'Completed',
      location: 'Bukidnon Highlands',
      price: '₱1,200',
      icon: <MountainIcon />,
      color: '#FF0000',
    },
    {
      id: 2,
      title: 'Talaandig Heritage Tour',
      date: 'February 28, 2024',
      status: 'Completed',
      location: 'Talaandig Village',
      price: '₱850',
      icon: <TempleIcon />,
      color: '#4CAF50',
    },
    {
      id: 3,
      title: 'Lake Apo Waterfall Visit',
      date: 'February 10, 2024',
      status: 'Completed',
      location: 'Lake Apo, Valencia',
      price: '₱650',
      icon: <WaterfallIcon />,
      color: '#2196F3',
    },
    {
      id: 4,
      title: 'Rainforest Exploration',
      date: 'January 22, 2024',
      status: 'Completed',
      location: 'Bukidnon Rainforest',
      price: '₱950',
      icon: <ForestIcon />,
      color: '#8BC34A',
    },
    {
      id: 5,
      title: 'Bukidnon Museum Tour',
      date: 'January 5, 2024',
      status: 'Completed',
      location: 'Malaybalay City',
      price: '₱350',
      icon: <MuseumIcon />,
      color: '#FF9800',
    },
    {
      id: 6,
      title: 'Higaonon Village Stay',
      date: 'December 18, 2023',
      status: 'Completed',
      location: 'Higaonon Community',
      price: '₱1,500',
      icon: <VillageIcon />,
      color: '#795548',
    },
  ];

  const BookingCard = ({ booking }) => (
    <TouchableOpacity style={styles.bookingCard} activeOpacity={0.9}>
      <View style={styles.bookingCardHeader}>
        <View style={styles.bookingIconContainer}>
          {booking.icon}
        </View>
        <View style={styles.bookingTitleContainer}>
          <Text style={styles.bookingTitle}>{booking.title}</Text>
          <Text style={styles.bookingLocation}>{booking.location}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: `${booking.color}20` }]}>
          <Text style={[styles.statusText, { color: booking.color }]}>{booking.status}</Text>
        </View>
      </View>
      
      <View style={styles.bookingCardBody}>
        <View style={styles.dateContainer}>
          <Icon name="calendar-outline" size={16} color="#666" />
          <Text style={styles.dateText}>{booking.date}</Text>
        </View>
        
        <View style={styles.priceContainer}>
          <Icon name="cash-outline" size={16} color="#666" />
          <Text style={styles.priceText}>{booking.price}</Text>
        </View>
      </View>
      
      <View style={styles.bookingCardFooter}>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rebookButton}>
          <Text style={styles.rebookButtonText}>Re-book</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header - Moved outside SafeAreaView */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking History</Text>
      </View>

      <SafeAreaView style={styles.safeArea}>
        {/* Stats Summary */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Total Bookings</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>₱5,500</Text>
            <Text style={styles.statLabel}>Total Spent</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        <ScrollView 
          style={styles.content} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Filter Options */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.filterContainer}
          >
            <TouchableOpacity style={[styles.filterButton, styles.filterActive]}>
              <Text style={[styles.filterText, styles.filterTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Recent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>2024</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>2023</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Nature</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Cultural</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Booking List */}
          <View style={styles.bookingsList}>
            {bookingHistory.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </View>

          {/* Bottom Info */}
          <View style={styles.bottomInfo}>
            <Icon name="information-circle-outline" size={20} color="#666" />
            <Text style={styles.bottomInfoText}>
              All bookings are confirmed and completed. Contact support for any issues.
            </Text>
          </View>

          <View style={{ height: 30 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40, // Added padding for status bar
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginLeft: 93,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginBottom: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF0000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#e0e0e0',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterActive: {
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#fff',
  },
  bookingsList: {
    paddingHorizontal: 20,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  bookingCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookingIconContainer: {
    marginRight: 12,
  },
  bookingTitleContainer: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  bookingLocation: {
    fontSize: 14,
    color: '#666',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  bookingCardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  bookingCardFooter: {
    flexDirection: 'row',
    gap: 12,
  },
  detailsButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  rebookButton: {
    flex: 1,
    backgroundColor: '#FF0000',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  rebookButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  bottomInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 16,
    gap: 12,
  },
  bottomInfoText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 14,
  },
});

export default BookHistoryScreen;