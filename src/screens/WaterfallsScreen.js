import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';  
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const WaterfallsScreen = () => {
  const navigation = useNavigation();
  const [selectedWaterfall, setSelectedWaterfall] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: 'Juan Dela Crocs',
    email: 'juandelacrocs@gmail.com',
    visitors: '2',
    date: new Date().toISOString().split('T')[0], // Today's date
    time: '09:00',
  });

  // Waterfall SVG Icon
  const WaterfallIcon = ({ size = 40 }) => (
    <Svg width={size} height={size} viewBox="0 0 60 60">
      <Circle cx="30" cy="30" r="28" fill="#2196F3" opacity="0.1" />
      <Path
        d="M18 12V48"
        stroke="#2196F3"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M30 10V48"
        stroke="#2196F3"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M42 14V48"
        stroke="#2196F3"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <Path
        d="M15 48H45"
        stroke="#2196F3"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );

  // Waterfalls Data - WITH ACTUAL WATERFALL IMAGES
  const waterfalls = [
  {
    id: 1,
    name: 'Alalum Falls',
    location: 'Sumilao, Bukidnon',
    description: 'Easily accessible falls beside the highway — perfect for a quick nature stop.',
    height: '45 m',
    difficulty: 'Easy',
    bestTime: 'All Year',
    entranceFee: '₱20 per person',
    image: require('../../assets/images/ALALUM.jpg'),
    features: ['Scenic View', 'Easy Access', 'Photo Spot'],
    bookingFee: '₱0'
  },
  {
    id: 2,
    name: 'CEDAR Waterfalls (Gantungan / Natigbasan / Dila)',
    location: 'Impasug-ong, Bukidnon',
    description: 'A nature-filled eco-park offering multiple waterfalls, trekking trails, and forest scenery.',
    height: 'Varies',
    difficulty: 'Moderate',
    bestTime: 'Dry Season',
    entranceFee: '₱40 per person',
    image: require('../../assets/images/CEDAR_FALLS.jpg'),
    features: ['Hiking', 'Forest Trail', 'Natural Pool', 'Adventure Spot'],
    bookingFee: '₱50'
  },
  {
    id: 3,
    name: 'Mindamora Falls',
    location: 'Talakag, Bukidnon / Iligan Border',
    description: 'A majestic two-tier waterfall known for its height and remote adventure trek.',
    height: '≈ 270 m (870 ft)',
    difficulty: 'Hard / Adventurous',
    bestTime: 'Dry Season',
    entranceFee: '₱80 per person',
    image: require('../../assets/images/MINDAMORA.png'),
    features: ['Cliff Falls', 'Deep Pool', 'Remote Trek', 'Nature Spot'],
    bookingFee: '₱100'
  },
];


  const handleBookVisit = (waterfall) => {
    setSelectedWaterfall(waterfall);
    setModalVisible(true);
  };

  const handleConfirmBooking = () => {
    // Calculate total
    const total = parseInt(selectedWaterfall.bookingFee.replace('₱', '')) * parseInt(bookingData.visitors);
    
    // Show success message
    alert(`Booking Confirmed!\n\n${selectedWaterfall.name}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\nVisitors: ${bookingData.visitors}\nTotal: ₱${total}`);
    
    // Close modal
    setModalVisible(false);
    
    // Reset booking data
    setBookingData({
      name: 'Juan Dela Crocs',
      email: 'juandelacrocs@gmail.com',
      visitors: '2',
      date: new Date().toISOString().split('T')[0],
      time: '09:00',
    });
  };

  const BookingModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Book Your Visit</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>
          
          {/* Waterfall Info */}
          {selectedWaterfall && (
            <View style={styles.waterfallInfo}>
              <Text style={styles.waterfallName}>{selectedWaterfall.name}</Text>
              <Text style={styles.waterfallLocation}>{selectedWaterfall.location}</Text>
              <View style={styles.feeContainer}>
                <Icon name="cash" size={18} color="#2196F3" />
                <Text style={styles.feeText}>Fee: {selectedWaterfall.bookingFee} per person</Text>
              </View>
            </View>
          )}
          
          {/* Booking Form */}
          <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={bookingData.name}
                  onChangeText={(text) => setBookingData({...bookingData, name: text})}
                  placeholder="Enter your name"
                />
              </View>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={bookingData.email}
                  onChangeText={(text) => setBookingData({...bookingData, email: text})}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                />
              </View>
            </View>
            
            <View style={styles.row}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                <Text style={styles.inputLabel}>Date</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={bookingData.date}
                    onChangeText={(text) => setBookingData({...bookingData, date: text})}
                    placeholder="YYYY-MM-DD"
                  />
                </View>
              </View>
              
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.inputLabel}>Time</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    value={bookingData.time}
                    onChangeText={(text) => setBookingData({...bookingData, time: text})}
                    placeholder="HH:MM"
                  />
                </View>
              </View>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Number of Visitors</Text>
              <View style={styles.visitorSelector}>
                <TouchableOpacity 
                  style={styles.visitorButton}
                  onPress={() => {
                    const visitors = parseInt(bookingData.visitors);
                    if (visitors > 1) {
                      setBookingData({...bookingData, visitors: (visitors - 1).toString()});
                    }
                  }}
                >
                  <Icon name="remove" size={20} color="#2196F3" />
                </TouchableOpacity>
                
                <Text style={styles.visitorCount}>{bookingData.visitors}</Text>
                
                <TouchableOpacity 
                  style={styles.visitorButton}
                  onPress={() => {
                    const visitors = parseInt(bookingData.visitors);
                    if (visitors < 10) {
                      setBookingData({...bookingData, visitors: (visitors + 1).toString()});
                    }
                  }}
                >
                  <Icon name="add" size={20} color="#2196F3" />
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Total Price */}
            {selectedWaterfall && (
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total Amount:</Text>
                <Text style={styles.totalPrice}>
                  ₱{parseInt(selectedWaterfall.bookingFee.replace('₱', '')) * parseInt(bookingData.visitors)}
                </Text>
              </View>
            )}
          </ScrollView>
          
          {/* Modal Actions */}
          <View style={styles.modalActions}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.confirmButton}
              onPress={handleConfirmBooking}
            >
              <Icon name="checkmark" size={20} color="#FFF" />
              <Text style={styles.confirmButtonText}>Confirm Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  const WaterfallCard = ({ waterfall }) => (
    <View style={styles.waterfallCard}>
      <View style={styles.waterfallImageContainer}>
        <Image source={waterfall.image} style={styles.waterfallImage} />

        <View style={styles.waterfallOverlay} />
        <View style={styles.waterfallBadge}>
          <Icon name="water" size={14} color="#FFF" />
          <Text style={styles.waterfallBadgeText}>WATERFALL</Text>
        </View>
      </View>
      
      <View style={styles.waterfallContent}>
        <Text style={styles.waterfallName}>{waterfall.name}</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={16} color="#2196F3" />
          <Text style={styles.waterfallLocation}>{waterfall.location}</Text>
        </View>
        
        <Text style={styles.waterfallDescription}>{waterfall.description}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="trending-up-outline" size={16} color="#666" />
            <Text style={styles.statValue}>{waterfall.height}</Text>
            <Text style={styles.statLabel}>Height</Text>
          </View>
          
          <View style={styles.statItem}>
            <Icon name="speedometer-outline" size={16} color="#666" />
            <Text style={styles.statValue}>{waterfall.difficulty}</Text>
            <Text style={styles.statLabel}>Difficulty</Text>
          </View>
          
          <View style={styles.statItem}>
            <Icon name="cash-outline" size={16} color="#666" />
            <Text style={styles.statValue}>{waterfall.entranceFee}</Text>
            <Text style={styles.statLabel}>Fee</Text>
          </View>
        </View>
        
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Features:</Text>
          <View style={styles.featuresList}>
            {waterfall.features.map((feature, index) => (
              <View key={index} style={styles.featureTag}>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => handleBookVisit(waterfall)}
        >
          <Icon name="calendar-outline" size={18} color="#FFF" />
          <Text style={styles.bookButtonText}>Book Visit</Text>
        </TouchableOpacity>
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
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <WaterfallIcon />
          <Text style={styles.headerTitle}>Waterfalls</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Intro Section */}
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Discover Majestic Falls</Text>
          <Text style={styles.introDescription}>
            Bukidnon is home to stunning waterfalls that showcase the natural beauty of the Philippines. 
            From easy-access falls to hidden gems, explore these wonders of nature.
          </Text>
        </View>

        {/* Stats Overview */}
        <View style={styles.overviewSection}>
          <View style={styles.overviewCard}>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>3</Text>
              <Text style={styles.overviewLabel}>Waterfalls</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>25-40m</Text>
              <Text style={styles.overviewLabel}>Height Range</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>Year-round</Text>
              <Text style={styles.overviewLabel}>Best Time</Text>
            </View>
          </View>
        </View>

        {/* Waterfalls List */}
        <View style={styles.waterfallsList}>
          {waterfalls.map((waterfall) => (
            <WaterfallCard key={waterfall.id} waterfall={waterfall} />
          ))}
        </View>

        {/* Tips Section */}
        <View style={styles.tipsSection}>
          <View style={styles.tipsHeader}>
            <Icon name="information-circle-outline" size={24} color="#2196F3" />
            <Text style={styles.tipsTitle}>Visitor Tips</Text>
          </View>
          <View style={styles.tipsList}>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Wear proper footwear for trekking</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Bring waterproof bags for electronics</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Check weather conditions before visiting</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Respect nature - no littering</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      {/* Booking Modal */}
      <BookingModal />
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
  },
  backButton: {
    padding: 4,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  introSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  introTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2196F3',
    marginBottom: 8,
  },
  introDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  overviewSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  overviewCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  overviewItem: {
    alignItems: 'center',
    flex: 1,
  },
  overviewNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2196F3',
    marginBottom: 4,
  },
  overviewLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  overviewDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#BBDEFB',
  },
  waterfallsList: {
    paddingHorizontal: 20,
  },
  waterfallCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  waterfallImageContainer: {
    height: 200,
    position: 'relative',
  },
  waterfallImage: {
    width: '100%',
    height: '100%',
  },
  waterfallOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  waterfallBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(33, 150, 243, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  waterfallBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  waterfallContent: {
    padding: 20,
  },
  waterfallName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  waterfallLocation: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '500',
  },
  waterfallDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  featuresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featureTag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  featureText: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '500',
  },
  bookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tipsSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  tipsList: {
    gap: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  waterfallInfo: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  feeText: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: '500',
  },
  formContainer: {
    maxHeight: 300,
    padding: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
  },
  input: {
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  visitorSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  visitorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  visitorCount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2196F3',
    marginHorizontal: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2196F3',
  },
  modalActions: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WaterfallsScreen;