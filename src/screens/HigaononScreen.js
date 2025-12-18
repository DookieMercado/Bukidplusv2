import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const HigaononScreen = ({ route, navigation }) => {
  // Get tribe data from navigation parameters
  const { tribeData } = route.params || {};
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Default data in case no tribeData is passed
  const defaultData = {
    primaryColor: '#8B4513',
    headerTitle: 'Higaonon Tribe',
    heroIcon: '🏔️',
    heroTitle: 'Guardians of the Northern Highlands',
    heroDescription: 'Indigenous people with deep spiritual connection to mountains and forests.',
    population: 'Approx. 85,000',
    territory: 'Highland forests of Bukidnon',
    language: 'Higaonon (Austronesian)',
    values: [
      { icon: '🤝', title: 'Paghiusa', text: 'Unity & Cooperation' },
      { icon: '🌿', title: 'Pangalagad', text: 'Environmental Care' },
      { icon: '👵', title: 'Pagtahod', text: 'Respect for Elders' },
    ],
    beliefs: [
      { icon: '🌄', title: 'Anito Worship', text: 'Nature spirits in mountains, rivers, forests' },
      { icon: '💀', title: 'Ancestral Spirits', text: 'Guidance from departed ancestors' },
      { icon: '⚖️', title: 'Cosmic Balance', text: 'Harmony between human, nature, spirit' },
    ],
    culturalPractices: [
      {
        id: 1,
        title: 'Panag-ampo (Prayer Rituals)',
        description: 'Spiritual ceremonies by the "Baylan" (shaman) to communicate with spirits',
        icon: '🌿',
        details: 'Offerings of rice, betel nut, and tobacco to ancestral spirits for guidance and protection.'
      },
      {
        id: 2,
        title: 'Pamuhat (Harvest Festival)',
        description: 'Celebration of rice harvest with traditional dances and feasting',
        icon: '🌾',
        details: 'Week-long celebration featuring traditional dances and community feasts.'
      },
      {
        id: 3,
        title: 'Panawagtawag (Healing Rituals)',
        description: 'Traditional healing using herbs and spiritual intervention',
        icon: '💫',
        details: 'Medicinal plants and incantations passed down through generations.'
      },
      {
        id: 4,
        title: 'Pangandam (Ancestral Worship)',
        description: 'Honoring ancestors through ceremonies and offerings',
        icon: '🕯️',
        details: 'Monthly rituals at ancestral sites with food offerings and traditional music.'
      },
    ],
    traditionalCrafts: [
      { id: 1, name: 'Basket Weaving', material: 'Rattan and Nito vine', icon: '🧺' },
      { id: 2, name: 'Textile Weaving', material: 'Abaca fiber and natural dyes', icon: '🧵' },
      { id: 3, name: 'Metal Work', material: 'Brass and silver', icon: '⚒️' },
      { id: 4, name: 'Wood Carving', material: 'Narra and Molave wood', icon: '🪵' },
    ],
    ecologicalKnowledge: [
      { id: 1, category: 'Medicinal Plants', count: '127 species', icon: '🌿' },
      { id: 2, category: 'Forest Management', count: '8 generations', icon: '🌳' },
      { id: 3, category: 'Water Sources', count: '42 sacred springs', icon: '💧' },
      { id: 4, category: 'Sacred Sites', count: '19 locations', icon: '⛰️' },
    ],
    sustainablePractices: [
      { icon: '🌱', text: 'Swidden Farming - Rotational farming' },
      { icon: '💧', text: 'Water Management - Protected watersheds' },
      { icon: '🛡️', text: 'Forest Guardianship - Sacred groves' },
      { icon: '🌿', text: 'Traditional Medicine - Native plant knowledge' },
    ],
    proverb: '"We do not inherit the earth from our ancestors; we borrow it from our children."',
  };

  // Use tribeData if provided, otherwise use default
  const data = tribeData || defaultData;

  useEffect(() => {
    // Set header based on tribe data
    navigation.setOptions({
      title: data.headerTitle,
      headerStyle: {
        backgroundColor: data.primaryColor,
      },
      headerTintColor: '#FFFFFF',
    });
  }, [data, navigation]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderOverview = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>📊 Cultural Identity</Text>
      
      <View style={[styles.infoCard, { borderLeftColor: data.primaryColor }]}>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>👥</Text>
          <View>
            <Text style={styles.infoLabel}>Population</Text>
            <Text style={styles.infoValue}>{data.population}</Text>
          </View>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>📍</Text>
          <View>
            <Text style={styles.infoLabel}>Territory</Text>
            <Text style={styles.infoValue}>{data.territory}</Text>
          </View>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>🗣️</Text>
          <View>
            <Text style={styles.infoLabel}>Language</Text>
            <Text style={styles.infoValue}>{data.language}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>❤️ Core Values</Text>
      <View style={styles.valuesContainer}>
        {data.values.map((value, index) => (
          <View key={index} style={styles.valueItem}>
            <Text style={styles.valueIcon}>{value.icon}</Text>
            <Text style={[styles.valueTitle, { color: data.primaryColor }]}>{value.title}</Text>
            <Text style={styles.valueText}>{value.text}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>🙏 Sacred Beliefs</Text>
      <View style={styles.beliefsList}>
        {data.beliefs.map((belief, index) => (
          <View key={index} style={styles.beliefItem}>
            <Text style={styles.beliefIcon}>{belief.icon}</Text>
            <View style={styles.beliefContent}>
              <Text style={[styles.beliefTitle, { color: data.primaryColor }]}>{belief.title}</Text>
              <Text style={styles.beliefText}>{belief.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderPractices = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🎭 Cultural Practices</Text>
      
      {data.culturalPractices.map((practice) => (
        <TouchableOpacity 
          key={practice.id} 
          style={[styles.practiceCard, { borderLeftColor: data.primaryColor }]}
          onPress={() => openModal(practice)}
        >
          <View style={styles.practiceHeader}>
            <Text style={styles.practiceIcon}>{practice.icon}</Text>
            <View style={styles.practiceText}>
              <Text style={[styles.practiceTitle, { color: data.primaryColor }]}>{practice.title}</Text>
              <Text style={styles.practiceDescription}>{practice.description}</Text>
            </View>
            <Icon name="chevron-forward" size={20} color={data.primaryColor} />
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>🎨 Traditional Crafts</Text>
      <View style={[styles.craftsContainer, { borderLeftColor: data.primaryColor }]}>
        {data.traditionalCrafts.map((craft) => (
          <View key={craft.id} style={styles.craftItem}>
            <Text style={styles.craftIcon}>{craft.icon}</Text>
            <View>
              <Text style={[styles.craftName, { color: data.primaryColor }]}>{craft.name}</Text>
              <Text style={styles.craftMaterial}>{craft.material}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderEcology = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>🌍 Ecological Wisdom</Text>
      
      <View style={[styles.ecologyStats, { borderLeftColor: data.primaryColor }]}>
        {data.ecologicalKnowledge.map((item) => (
          <View key={item.id} style={styles.ecologyItem}>
            <Text style={styles.ecologyIcon}>{item.icon}</Text>
            <Text style={[styles.ecologyCount, { color: data.primaryColor }]}>{item.count}</Text>
            <Text style={styles.ecologyCategory}>{item.category}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>♻️ Sustainable Practices</Text>
      <View style={[styles.sustainableList, { borderLeftColor: data.primaryColor }]}>
        {data.sustainablePractices.map((item, index) => (
          <View key={index} style={styles.sustainableItem}>
            <Text style={styles.sustainableIcon}>{item.icon}</Text>
            <Text style={styles.sustainableText}>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Dynamic Hero Section */}
      <View style={[styles.heroSection, { backgroundColor: data.primaryColor }]}>
        <View style={styles.heroContent}>
          <Text style={styles.heroIcon}>{data.heroIcon}</Text>
          <Text style={styles.heroTitle}>{data.heroTitle}</Text>
          <Text style={styles.heroDescription}>
            {data.heroDescription}
          </Text>
        </View>
      </View>

      {/* Dynamic Tabs */}
      <View style={[styles.tabContainer, { borderColor: data.primaryColor + '20' }]}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'overview' && [styles.activeTab, { backgroundColor: data.primaryColor }]]}
          onPress={() => setActiveTab('overview')}
        >
          <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>
            📋 Overview
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'practices' && [styles.activeTab, { backgroundColor: data.primaryColor }]]}
          onPress={() => setActiveTab('practices')}
        >
          <Text style={[styles.tabText, activeTab === 'practices' && styles.activeTabText]}>
            🎭 Practices
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'ecology' && [styles.activeTab, { backgroundColor: data.primaryColor }]]}
          onPress={() => setActiveTab('ecology')}
        >
          <Text style={[styles.tabText, activeTab === 'ecology' && styles.activeTabText]}>
            🌍 Ecology
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'practices' && renderPractices()}
        {activeTab === 'ecology' && renderEcology()}
        
        <View style={[styles.footer, { borderLeftColor: data.primaryColor }]}>
          <Text style={[styles.footerText, { color: data.primaryColor }]}>
            {data.proverb}
          </Text>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalIcon}>{selectedItem?.icon}</Text>
              <Text style={[styles.modalTitle, { color: data.primaryColor }]}>{selectedItem?.title}</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Icon name="close" size={24} color={data.primaryColor} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.modalBody}>
              <Text style={styles.modalDescription}>{selectedItem?.details}</Text>
            </View>
            
            <View style={styles.modalFooter}>
              <TouchableOpacity 
                style={[styles.modalButton, { backgroundColor: data.primaryColor }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// Styles remain mostly the same, just using dynamic colors
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heroSection: {
    padding: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroDescription: {
    fontSize: 14,
    color: '#FFE4B5',
    textAlign: 'center',
    lineHeight: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#8B4513',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderLeftWidth: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  valueItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  valueIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  valueTitle: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 4,
  },
  valueText: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  beliefsList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  beliefItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  beliefIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  beliefContent: {
    flex: 1,
  },
  beliefTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  beliefText: {
    fontSize: 12,
    color: '#666',
  },
  practiceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderLeftWidth: 4,
  },
  practiceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  practiceIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  practiceText: {
    flex: 1,
  },
  practiceTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  practiceDescription: {
    fontSize: 12,
    color: '#666',
  },
  craftsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderLeftWidth: 4,
  },
  craftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  craftIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  craftName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  craftMaterial: {
    fontSize: 12,
    color: '#666',
  },
  ecologyStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderLeftWidth: 4,
  },
  ecologyItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  ecologyIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  ecologyCount: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  ecologyCategory: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  sustainableList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderLeftWidth: 4,
  },
  sustainableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sustainableIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  sustainableText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderLeftWidth: 4,
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  closeButton: {
    padding: 4,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  modalFooter: {},
  modalButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HigaononScreen;