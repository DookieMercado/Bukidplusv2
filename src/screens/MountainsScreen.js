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
import Svg, { Circle, Path, G, Rect, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const MountainsScreen = () => {
  const navigation = useNavigation();
  const [selectedMountain, setSelectedMountain] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@gmail.com',
    visitors: '2',
    date: new Date().toISOString().split('T')[0],
    time: '06:00',
    guide: 'With Guide',
  });

  // Enhanced Mountain SVG Icon with Bukidnon landscape
  const MountainIcon = ({ size = 60 }) => (
    <Svg width={size} height={size} viewBox="0 0 80 80">
      <Defs>
        <LinearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#2E7D32" stopOpacity="0.8" />
          <Stop offset="50%" stopColor="#4CAF50" stopOpacity="0.6" />
          <Stop offset="100%" stopColor="#81C784" stopOpacity="0.4" />
        </LinearGradient>
        <LinearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#87CEEB" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#E3F2FD" stopOpacity="0.4" />
        </LinearGradient>
      </Defs>
      
      {/* Background circle */}
      <Circle cx="40" cy="40" r="38" fill="url(#skyGradient)" />
      
      {/* Mountains */}
      <Path
        d="M10 50 L40 15 L70 50 Z"
        fill="url(#mountainGradient)"
        stroke="#2E7D32"
        strokeWidth="1.5"
      />
      
      {/* Smaller peaks */}
      <Path
        d="M20 45 L30 30 L40 45 Z"
        fill="#2E7D32"
        fillOpacity="0.6"
      />
      
      <Path
        d="M45 45 L55 35 L65 45 Z"
        fill="#2E7D32"
        fillOpacity="0.7"
      />
      
      {/* Cloud */}
      <G opacity="0.7">
        <Circle cx="25" cy="25" r="6" fill="#FFFFFF" />
        <Circle cx="30" cy="23" r="5" fill="#FFFFFF" />
        <Circle cx="35" cy="25" r="5" fill="#FFFFFF" />
      </G>
      
      {/* Sun */}
      <Circle cx="65" cy="25" r="8" fill="#FFD700" opacity="0.9" />
      
      {/* Mountain details */}
      <Path
        d="M35 40 L40 35 L45 40"
        stroke="#FFFFFF"
        strokeWidth="0.5"
        strokeOpacity="0.5"
      />
      
      {/* Base terrain */}
      <Rect x="5" y="50" width="70" height="25" fill="#5D4037" />
      <Rect x="10" y="55" width="60" height="5" fill="#8D6E63" />
    </Svg>
  );

  // Mountains Data
  const mountains = [
    {
      id: 1,
      name: 'Mount Kitanglad',
      location: 'Bukidnon Province',
      description: 'The second highest mountain in the Philippines, home to diverse flora and fauna.',
      elevation: '2,899 meters',
      difficulty: 'Difficult',
      bestTime: 'November to April',
      entranceFee: '₱500',
      image: require('../../assets/images/KITANGLAD.jpg'),
      features: ['Summit Trail', 'Wildlife', 'Cloud Forest', 'Camping'],
      bookingFee: '₱500',
      hikeDuration: '2-3 days',
      guideRequired: true,
    },
    {
      id: 2,
      name: 'Mount Kalatungan',
      location: 'Bukidnon Highlands',
      description: 'The fifth highest peak with breathtaking views and challenging trails.',
      elevation: '2,860 meters',
      difficulty: 'Difficult',
      bestTime: 'December to March',
      entranceFee: '₱400',
      image: require('../../assets/images/KALATUNGAN.jpg'),
      features: ['Peak Climbing', 'Scenic Views', 'Bird Watching', 'Photography'],
      bookingFee: '₱400',
      hikeDuration: '2 days',
      guideRequired: true,
    },
    {
      id: 3,
      name: 'Mount Dulang-dulang',
      location: 'Bukidnon Mountains',
      description: 'Known for its mossy forest and challenging ascent, perfect for experienced hikers.',
      elevation: '2,938 meters',
      difficulty: 'Expert',
      bestTime: 'January to May',
      entranceFee: '₱600',
      image: require('../../assets/images/DULANG.jpg'),
      features: ['Mossy Forest', 'Technical Climb', 'Biodiversity', 'Summit Camp'],
      bookingFee: '₱600',
      hikeDuration: '3 days',
      guideRequired: true,
    },
  ];

  const handleBookTrek = (mountain) => {
    setSelectedMountain(mountain);
    setModalVisible(true);
  };

  const handleConfirmBooking = () => {
    // Calculate base total
    let baseFee = parseInt(selectedMountain.bookingFee.replace('₱', ''));
    let guideFee = bookingData.guide === 'With Guide' ? 500 : 0;
    const total = (baseFee + guideFee) * parseInt(bookingData.visitors);
    
    // Show success message
    alert(`Trekking Booking Confirmed!\n\n${selectedMountain.name}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\nVisitors: ${bookingData.visitors}\nGuide: ${bookingData.guide}\nTotal: ₱${total}`);
    
    // Close modal
    setModalVisible(false);
    
    // Reset booking data
    setBookingData({
      name: 'Juan Dela Cruz',
      email: 'juan.delacruz@gmail.com',
      visitors: '2',
      date: new Date().toISOString().split('T')[0],
      time: '06:00',
      guide: 'With Guide',
    });
  };

  // Custom Landscape SVG for the header section
  const MountainsLandscape = () => (
    <Svg width={width} height={180} style={styles.landscapeSvg}>
      <Defs>
        <LinearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#E3F2FD" />
          <Stop offset="100%" stopColor="#C8E6C9" />
        </LinearGradient>
        <LinearGradient id="mountainGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#388E3C" />
          <Stop offset="100%" stopColor="#4CAF50" />
        </LinearGradient>
        <LinearGradient id="mountainGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#2E7D32" />
          <Stop offset="100%" stopColor="#43A047" />
        </LinearGradient>
        <LinearGradient id="mountainGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#1B5E20" />
          <Stop offset="100%" stopColor="#2E7D32" />
        </LinearGradient>
      </Defs>
      
      {/* Background */}
      <Rect width={width} height={180} fill="url(#bgGradient)" />
      
      {/* Distant mountains */}
      <Path
        d="M-100 180 L100 80 L300 180 Z"
        fill="url(#mountainGrad3)"
        opacity="0.6"
      />
      
      {/* Middle mountains */}
      <Path
        d="M-50 180 L150 60 L350 180 Z"
        fill="url(#mountainGrad2)"
        opacity="0.8"
      />
      
      {/* Foreground mountains */}
      <Path
        d="M0 180 L200 40 L400 180 Z"
        fill="url(#mountainGrad1)"
      />
      
      {/* Cloud 1 */}
      <G opacity="0.9">
        <Circle cx="60" cy="60" r="12" fill="#FFFFFF" />
        <Circle cx="70" cy="55" r="10" fill="#FFFFFF" />
        <Circle cx="80" cy="60" r="10" fill="#FFFFFF" />
        <Circle cx="85" cy="65" r="8" fill="#FFFFFF" />
      </G>
      
      {/* Cloud 2 */}
      <G opacity="0.7" transform="translate(200, 40)">
        <Circle cx="0" cy="0" r="15" fill="#FFFFFF" />
        <Circle cx="15" cy="-5" r="12" fill="#FFFFFF" />
        <Circle cx="30" cy="0" r="12" fill="#FFFFFF" />
        <Circle cx="35" cy="10" r="10" fill="#FFFFFF" />
      </G>
      
      {/* Sun */}
      <Circle cx={width - 80} cy="60" r="25" fill="#FFD700" />
      
      {/* Sun rays */}
      <G opacity="0.3">
        {[...Array(8)].map((_, i) => (
          <Path
            key={i}
            d={`M${width - 80} 60 L${width - 80 + Math.cos((i * 45 * Math.PI) / 180) * 40} ${
              60 + Math.sin((i * 45 * Math.PI) / 180) * 40
            }`}
            stroke="#FFA000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </G>
      
      {/* Birds */}
      <Path
        d="M100 100 Q110 90 120 100"
        stroke="#795548"
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M130 110 Q140 100 150 110"
        stroke="#795548"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Foreground terrain */}
      <Rect x="0" y="150" width={width} height="30" fill="#5D4037" />
      <Rect x="0" y="160" width={width} height="20" fill="#8D6E63" />
      
      {/* Trees */}
      {[50, 100, 180, 220, 280, 330].map((x) => (
        <G key={x}>
          <Rect x={x} y="140" width="5" height="20" fill="#5D4037" />
          <Path
            d={`M${x - 10} 140 Q${x} 120 ${x + 10} 140 Z`}
            fill="#2E7D32"
          />
        </G>
      ))}
    </Svg>
  );

  // Mountain SVG Card Badge
  const MountainCardBadge = () => (
    <Svg width={24} height={24} style={styles.cardBadge}>
      <Path
        d="M2 17L12 5L22 17H2Z"
        fill="#4CAF50"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Circle cx="12" cy="14" r="1.5" fill="#FFFFFF" />
    </Svg>
  );

  // Elevation Chart
  const ElevationChart = ({ mountain }) => (
    <Svg width={width - 80} height={60} style={styles.elevationChart}>
      <Defs>
        <LinearGradient id="elevationGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#4CAF50" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#4CAF50" stopOpacity="0.2" />
        </LinearGradient>
      </Defs>
      
      {/* Base line */}
      <Path
        d="M0 40 L40 25 L80 20 L120 15 L160 30 L200 10 L240 25"
        fill="none"
        stroke="#4CAF50"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Fill under line */}
      <Path
        d="M0 40 L40 25 L80 20 L120 15 L160 30 L200 10 L240 25 L240 40 L0 40 Z"
        fill="url(#elevationGrad)"
      />
      
      {/* Start point */}
      <Circle cx="0" cy="40" r="3" fill="#4CAF50" />
      
      {/* Summit point */}
      <Circle cx="120" cy="15" r="5" fill="#FF5722" />
      
      {/* End point */}
      <Circle cx="240" cy="25" r="3" fill="#4CAF50" />
      
      {/* Labels */}
      <G>
        <SvgText x="0" y="55" fill="#666" fontSize="10" textAnchor="start">
          Base
        </SvgText>
        <SvgText x="120" y="10" fill="#FF5722" fontSize="10" textAnchor="middle">
          Summit
        </SvgText>
        <SvgText x="240" y="55" fill="#666" fontSize="10" textAnchor="end">
          End
        </SvgText>
      </G>
    </Svg>
  );

  const MountainCard = ({ mountain }) => (
    <View style={styles.mountainCard}>
      <View style={styles.mountainImageContainer}>
        <Image source={mountain.image} style={styles.mountainImage} />
        <View style={styles.mountainOverlay} />
        
        {/* Custom SVG Badge */}
        <View style={styles.mountainBadge}>
          <MountainCardBadge />
          <Text style={styles.mountainBadgeText}>PEAK</Text>
        </View>
        
        <View style={styles.difficultyBadge}>
          <Icon name="trending-up" size={12} color="#FFF" />
          <Text style={styles.difficultyText}>{mountain.difficulty}</Text>
        </View>
      </View>
      
      <View style={styles.mountainContent}>
        <Text style={styles.mountainName}>{mountain.name}</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={16} color="#4CAF50" />
          <Text style={styles.mountainLocation}>{mountain.location}</Text>
        </View>
        
        <Text style={styles.mountainDescription}>{mountain.description}</Text>
        
        {/* Add Elevation Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Trail Elevation Profile</Text>
          <ElevationChart mountain={mountain} />
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Icon name="trending-up-outline" size={16} color="#666" />
            <Text style={styles.statValue}>{mountain.elevation}</Text>
            <Text style={styles.statLabel}>Elevation</Text>
          </View>
          
          <View style={styles.statItem}>
            <Icon name="speedometer-outline" size={16} color="#666" />
            <Text style={styles.statValue}>{mountain.difficulty}</Text>
            <Text style={styles.statLabel}>Difficulty</Text>
          </View>
          
          <View style={styles.statItem}>
            <Icon name="cash-outline" size={16} color="#666" />
            <Text style={styles.statValue}>{mountain.entranceFee}</Text>
            <Text style={styles.statLabel}>Fee</Text>
          </View>
        </View>
        
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Features:</Text>
          <View style={styles.featuresList}>
            {mountain.features.map((feature, index) => (
              <View key={index} style={styles.featureTag}>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => handleBookTrek(mountain)}
        >
          <Icon name="walk-outline" size={18} color="#FFF" />
          <Text style={styles.bookButtonText}>Book Trek</Text>
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
          <MountainIcon />
          <Text style={styles.headerTitle}>Bukidnon Peaks</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Landscape SVG Header */}
        <View style={styles.landscapeContainer}>
          <MountainsLandscape />
          <View style={styles.landscapeTextContainer}>
            <Text style={styles.landscapeTitle}>Conquer The Peaks</Text>
            <Text style={styles.landscapeSubtitle}>Bukidnon's Majestic Mountains</Text>
          </View>
        </View>

        {/* Intro Section */}
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Summit Adventures</Text>
          <Text style={styles.introDescription}>
            Challenge yourself with Bukidnon's legendary peaks. Each mountain offers unique trails, breathtaking views, and an unforgettable trekking experience for adventure seekers.
          </Text>
        </View>

        {/* Stats Overview */}
        <View style={styles.overviewSection}>
          <View style={styles.overviewCard}>
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>3</Text>
              <Text style={styles.overviewLabel}>Major Peaks</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>2,800m+</Text>
              <Text style={styles.overviewLabel}>Avg. Elevation</Text>
            </View>
            <View style={styles.overviewDivider} />
            <View style={styles.overviewItem}>
              <Text style={styles.overviewNumber}>Expert</Text>
              <Text style={styles.overviewLabel}>Difficulty Level</Text>
            </View>
          </View>
        </View>

        {/* Mountains List */}
        <View style={styles.mountainsList}>
          {mountains.map((mountain) => (
            <MountainCard key={mountain.id} mountain={mountain} />
          ))}
        </View>

        {/* Safety Tips */}
        <View style={styles.tipsSection}>
          <View style={styles.tipsHeader}>
            <Icon name="shield-checkmark-outline" size={24} color="#4CAF50" />
            <Text style={styles.tipsTitle}>Safety Guidelines</Text>
          </View>
          <View style={styles.tipsList}>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Always hire a certified guide</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Check weather forecast before climbing</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Bring proper climbing gear and supplies</Text>
            </View>
            <View style={styles.tipItem}>
              <Icon name="checkmark-circle-outline" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>Register at the tourism office before trek</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      {/* Booking Modal */}
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
              <Text style={styles.modalTitle}>Book Mountain Trek</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            
            {/* Mountain Info */}
            {selectedMountain && (
              <View style={styles.mountainInfo}>
                <Text style={styles.mountainName}>{selectedMountain.name}</Text>
                <Text style={styles.mountainLocation}>{selectedMountain.location}</Text>
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Icon name="trending-up" size={16} color="#4CAF50" />
                    <Text style={styles.infoText}>{selectedMountain.elevation}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Icon name="time" size={16} color="#4CAF50" />
                    <Text style={styles.infoText}>{selectedMountain.hikeDuration}</Text>
                  </View>
                </View>
                <View style={styles.feeContainer}>
                  <Icon name="cash" size={18} color="#4CAF50" />
                  <Text style={styles.feeText}>Fee: {selectedMountain.bookingFee} per person</Text>
                  {selectedMountain.guideRequired && (
                    <Text style={styles.guideNote}>(Guide required +₱500)</Text>
                  )}
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
                <Text style={styles.inputLabel}>Number of Hikers</Text>
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
                    <Icon name="remove" size={20} color="#4CAF50" />
                  </TouchableOpacity>
                  
                  <Text style={styles.visitorCount}>{bookingData.visitors}</Text>
                  
                  <TouchableOpacity 
                    style={styles.visitorButton}
                    onPress={() => {
                      const visitors = parseInt(bookingData.visitors);
                      if (visitors < 8) { // Max 8 for mountain trek
                        setBookingData({...bookingData, visitors: (visitors + 1).toString()});
                      }
                    }}
                  >
                    <Icon name="add" size={20} color="#4CAF50" />
                  </TouchableOpacity>
                </View>
              </View>
              
              {selectedMountain?.guideRequired && (
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>Guide Service</Text>
                  <View style={styles.guideOptions}>
                    <TouchableOpacity 
                      style={[
                        styles.guideOption,
                        bookingData.guide === 'With Guide' && styles.guideOptionSelected
                      ]}
                      onPress={() => setBookingData({...bookingData, guide: 'With Guide'})}
                    >
                      <Text style={[
                        styles.guideOptionText,
                        bookingData.guide === 'With Guide' && styles.guideOptionTextSelected
                      ]}>
                        With Guide (+₱500)
                      </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[
                        styles.guideOption,
                        bookingData.guide === 'Without Guide' && styles.guideOptionSelected
                      ]}
                      onPress={() => setBookingData({...bookingData, guide: 'Without Guide'})}
                    >
                      <Text style={[
                        styles.guideOptionText,
                        bookingData.guide === 'Without Guide' && styles.guideOptionTextSelected
                      ]}>
                        Without Guide
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              
              {/* Total Price */}
              {selectedMountain && (
                <View style={styles.totalContainer}>
                  <View style={styles.totalDetails}>
                    <Text style={styles.totalLabel}>Base Fee:</Text>
                    <Text style={styles.totalDetail}>
                      {selectedMountain.bookingFee} × {bookingData.visitors} = ₱
                      {parseInt(selectedMountain.bookingFee.replace('₱', '')) * parseInt(bookingData.visitors)}
                    </Text>
                    
                    {bookingData.guide === 'With Guide' && selectedMountain.guideRequired && (
                      <>
                        <Text style={styles.totalLabel}>Guide Fee:</Text>
                        <Text style={styles.totalDetail}>
                          ₱500 × {bookingData.visitors} = ₱{500 * parseInt(bookingData.visitors)}
                        </Text>
                      </>
                    )}
                  </View>
                  
                  <View style={styles.totalDivider} />
                  
                  <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total Amount:</Text>
                    <Text style={styles.totalPrice}>
                      ₱{
                        (parseInt(selectedMountain.bookingFee.replace('₱', '')) + 
                        (bookingData.guide === 'With Guide' && selectedMountain.guideRequired ? 500 : 0)) 
                        * parseInt(bookingData.visitors)
                      }
                    </Text>
                  </View>
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
                <Text style={styles.confirmButtonText}>Book Trek</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  // New styles for SVG components
  landscapeContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  landscapeSvg: {
    width: '100%',
  },
  landscapeTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  landscapeTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1B5E20',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  landscapeSubtitle: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '600',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
    color: '#4CAF50',
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
    backgroundColor: '#E8F5E9',
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
    color: '#4CAF50',
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
    backgroundColor: '#C8E6C9',
  },
  mountainsList: {
    paddingHorizontal: 20,
  },
  mountainCard: {
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
  mountainImageContainer: {
    height: 200,
    position: 'relative',
  },
  mountainImage: {
    width: '100%',
    height: '100%',
  },
  mountainOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  mountainBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  cardBadge: {
    marginRight: 4,
  },
  mountainBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  difficultyBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(244, 67, 54, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  difficultyText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  mountainContent: {
    padding: 20,
  },
  mountainName: {
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
  mountainLocation: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  mountainDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  chartContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  elevationChart: {
    marginTop: 8,
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
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  featureText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  bookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
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
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '100%',
    maxHeight: '90%',
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
  mountainInfo: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
  },
  feeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  feeText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  guideNote: {
    fontSize: 12,
    color: '#F44336',
    marginLeft: 8,
  },
  formContainer: {
    maxHeight: 350,
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
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  visitorCount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4CAF50',
    marginHorizontal: 20,
  },
  guideOptions: {
    flexDirection: 'row',
    gap: 10,
  },
  guideOption: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  guideOptionSelected: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  guideOptionText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  guideOptionTextSelected: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  totalContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalDetails: {
    gap: 8,
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  totalDetail: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  totalDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4CAF50',
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
    borderColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
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

export default MountainsScreen;