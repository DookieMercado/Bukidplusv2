import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path, Circle, G, Rect, Polygon, Line, Defs, LinearGradient, Stop } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Custom SVG Icons for Tribes (fixed versions)
const MountainIcon = ({ color, size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3L3 21H21L12 3Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8L9 13L15 13L12 8Z"
      fill={color}
      fillOpacity="0.3"
    />
  </Svg>
);

const PaletteIcon = ({ color, size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Circle cx="6" cy="12" r="2" fill={color} />
    <Circle cx="12" cy="6" r="2" fill={color} />
    <Circle cx="18" cy="12" r="2" fill={color} />
    <Circle cx="12" cy="18" r="2" fill={color} />
    <Path
      d="M12 16L15 13L12 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LeafIcon = ({ color, size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C7.5 2 4 5.5 4 10C4 18.5 12 22 12 22C12 22 20 18.5 20 10C20 5.5 16.5 2 12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 12L11 14L15 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const WaterIcon = ({ color, size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2 16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V14C22 12.9 21.1 12 20 12H4C2.9 12 2 12.9 2 14V16Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M2 10C2 11.1 2.9 12 4 12H20C21.1 12 22 11.1 22 10V8C22 6.9 21.1 6 20 6H4C2.9 6 2 6.9 2 8V10Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M2 4C2 5.1 2.9 6 4 6H20C21.1 6 22 5.1 22 4V2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V4Z"
      stroke={color}
      strokeWidth="2"
    />
  </Svg>
);

const FlameIcon = ({ color, size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M12 12L8 16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M12 12L16 16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

const TrailIcon = ({ color, size = 40 }) => (
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
    <Circle cx="6" cy="12" r="2" fill={color} />
    <Circle cx="12" cy="6" r="2" fill={color} />
    <Circle cx="18" cy="18" r="2" fill={color} />
  </Svg>
);

const FishIcon = ({ color, size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
      stroke={color}
      strokeWidth="2"
    />
    <Path
      d="M12 8V16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M8 12H16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Circle cx="12" cy="12" r="1" fill={color} />
  </Svg>
);

const ShieldIcon = ({ color, size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11V17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M9 14H15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

// Fixed Background Pattern Component
const BackgroundPattern = () => {
  const patternSize = 200;
  
  return (
    <Svg 
      width="100%" 
      height="100%" 
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <Defs>
        <LinearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#8B0000" stopOpacity="0.05" />
          <Stop offset="100%" stopColor="#8B0000" stopOpacity="0.15" />
        </LinearGradient>
      </Defs>
      
      {/* Background Gradient */}
      <Rect width="100%" height="100%" fill="url(#bgGradient)" />
      
      {/* Tribal Pattern - Using actual numbers instead of width variable */}
      <G opacity="0.1">
        <Circle cx="20" cy="40" r="8" fill="#8B0000" />
        <Circle cx={screenWidth - 40} cy="100" r="6" fill="#8B0000" />
        <Circle cx="80" cy={screenHeight - 60} r="10" fill="#8B0000" />
        <Circle cx={screenWidth - 80} cy={screenHeight - 120} r="7" fill="#8B0000" />
        
        {/* Decorative Lines */}
        <Path
          d="M0,60 L100,60"
          stroke="#8B0000"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <Path
          d={`M${screenWidth - 100},200 L${screenWidth},200`}
          stroke="#8B0000"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <Path
          d="M50,0 L50,100"
          stroke="#8B0000"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      </G>
    </Svg>
  );
};

const Books = ({ navigation }) => {
  // COMPREHENSIVE TRIBE DATA - All data for each tribe
  const tribes = [
  {
    id: 1,
    name: 'Higaonon',
    subtitle: 'People of the Mountains',
    description: 'Guardians of the highland forests with rich spiritual traditions',
    color: '#8B4513',
    icon: 'mountain',
    svgIcon: MountainIcon,
    pattern: ['triangle', 'circle', 'line'],
    tribeData: {
      primaryColor: '#8B4513',
      headerTitle: 'Higaonon Tribe',
      heroIcon: '🏔️',
      heroTitle: 'Guardians of the Northern Highlands',
      heroDescription: 'Indigenous people with deep spiritual connection to mountains and forests. Their name means "people of the living mountains."',
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
          details: 'Week-long celebration featuring the "Sayaw sa Inandako" (Grandmother\'s Dance).'
        },
        {
          id: 3,
          title: 'Panawagtawag (Healing Rituals)',
          description: 'Traditional healing using herbs and spiritual intervention',
          icon: '💫',
          details: '127 different medicinal plants and incantations passed down through generations.'
        },
        {
          id: 4,
          title: 'Pangandam (Ancestral Worship)',
          description: 'Honoring ancestors through ceremonies and offerings',
          icon: '🕯️',
          details: 'Monthly rituals at ancestral gravesites with food offerings and traditional music.'
        },
      ],
      traditionalCrafts: [
        { id: 1, name: 'Binalay (Basket Weaving)', material: 'Rattan and Nito vine', icon: '🧺' },
        { id: 2, name: 'Habol (Textile Weaving)', material: 'Abaca fiber and natural dyes', icon: '🧵' },
        { id: 3, name: 'Panday (Metal Work)', material: 'Brass and silver', icon: '⚒️' },
        { id: 4, name: 'Larak (Wood Carving)', material: 'Narra and Molave wood', icon: '🪵' },
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
      proverb: '"We do not inherit the earth from our ancestors; we borrow it from our children." — Higaonon Proverb',
    },
  },
  {
    id: 2,
    name: 'Talaandig',
    subtitle: 'Artists & Soil Keepers',
    description: 'Master weavers and keepers of ancient agricultural wisdom',
    color: '#D2691E',
    icon: 'color-palette',
    svgIcon: PaletteIcon,
    pattern: ['diamond', 'wave', 'dot'],
    tribeData: {
      primaryColor: '#D2691E',
      headerTitle: 'Talaandig Tribe',
      heroIcon: '🎨',
      heroTitle: 'Artists of the Living Earth',
      heroDescription: 'Known as the "People of the Soil", master weavers and agricultural experts with deep connection to the land.',
      population: 'Approx. 80,000',
      territory: 'Bukidnon Province, Mindanao',
      language: 'Talaandig language (Austronesian)',
      values: [
        { icon: '🎨', title: 'Pangadew', text: 'Artistic Expression' },
        { icon: '🌱', title: 'Panguma', text: 'Agricultural Wisdom' },
        { icon: '🤲', title: 'Panag-ambit', text: 'Community Sharing' },
      ],
      beliefs: [
        { icon: '🌍', title: 'Earth Worship', text: 'Soil as living entity and source of life' },
        { icon: '🎭', title: 'Art as Prayer', text: 'Weaving and crafts as spiritual practice' },
        { icon: '🌾', title: 'Rice Deities', text: 'Reverence for rice spirits and agricultural cycles' },
      ],
      culturalPractices: [
        {
          id: 1,
          title: 'Pangampo (Traditional Healing)',
          description: 'Holistic healing using herbs, rituals, and spiritual guidance',
          icon: '🌿',
          details: 'Healing practices led by the Baylan using 89 documented medicinal plants.'
        },
        {
          id: 2,
          title: 'Pamalas (Agricultural Rituals)',
          description: 'Ceremonies for planting, harvesting, and soil blessings',
          icon: '🌾',
          details: 'Seasonal rituals to honor earth deities and ensure bountiful harvests.'
        },
        {
          id: 3,
          title: 'Pangadew (Weaving Ceremony)',
          description: 'Sacred weaving rituals with spiritual significance',
          icon: '🧵',
          details: 'Each woven pattern tells a story and carries ancestral wisdom.'
        },
        {
          id: 4,
          title: 'Binanog Dance Ritual',
          description: 'Hawk-inspired dance for important ceremonies',
          icon: '🦅',
          details: 'Performance imitating hawk movements to communicate with sky spirits.'
        },
      ],
      traditionalCrafts: [
        { id: 1, name: 'Abaca Weaving', material: 'Abaca fiber with natural dyes', icon: '🧵' },
        { id: 2, name: 'Bamboo Crafts', material: 'Bamboo and rattan', icon: '🎋' },
        { id: 3, name: 'Clay Pottery', material: 'Local clay and minerals', icon: '🏺' },
        { id: 4, name: 'Beadwork', material: 'Seeds, shells, and beads', icon: '📿' },
      ],
      ecologicalKnowledge: [
        { id: 1, category: 'Soil Types', count: '12 varieties', icon: '🌱' },
        { id: 2, category: 'Rice Varieties', count: '34 strains', icon: '🌾' },
        { id: 3, category: 'Weaving Plants', count: '18 species', icon: '🌿' },
        { id: 4, category: 'Sacred Sites', count: '27 locations', icon: '⛰️' },
      ],
      sustainablePractices: [
        { icon: '🌱', text: 'Organic Farming - Chemical-free agriculture' },
        { icon: '💧', text: 'Water Conservation - Traditional irrigation' },
        { icon: '🌳', text: 'Agroforestry - Mixed crop systems' },
        { icon: '♻️', text: 'Zero Waste - Complete utilization of resources' },
      ],
      proverb: '"Panguma ta Manidew" - Let us preserve our heritage and cultivate wisdom. — Talaandig Saying',
    },
  },
  {
    id: 3,
    name: 'Bukidnon',
    subtitle: 'Plains People',
    description: 'Original inhabitants of the vast lowland plains',
    color: '#CD853F',
    icon: 'leaf',
    svgIcon: LeafIcon,
    pattern: ['leaf', 'circle', 'line'],
    tribeData: {
      primaryColor: '#CD853F',
      headerTitle: 'Bukidnon Tribe',
      heroIcon: '🌾',
      heroTitle: 'Guardians of the Plains',
      heroDescription: 'Original inhabitants of the vast lowland plains, known for their agricultural expertise and warrior traditions.',
      population: 'Approx. 110,000',
      territory: 'Bukidnon Province plains',
      language: 'Binukid (Austronesian)',
      values: [
        { icon: '⚔️', title: 'Bagani', text: 'Warrior Spirit & Protection' },
        { icon: '🌾', title: 'Panguma', text: 'Agricultural Excellence' },
        { icon: '🏛️', title: 'Pagtahod', text: 'Respect for Tradition' },
      ],
      beliefs: [
        { icon: '🗡️', title: 'Bagani Warriors', text: 'Spiritually empowered warriors protecting communities' },
        { icon: '🌌', title: 'Sky Deities', text: 'Worship of celestial beings and weather gods' },
        { icon: '🛡️', title: 'Ancestral Valor', text: 'Honoring warrior ancestors and their legacy' },
      ],
      culturalPractices: [
        {
          id: 1,
          title: 'Bagani Rituals',
          description: 'Warrior initiation and empowerment ceremonies',
          icon: '⚔️',
          details: 'Rituals to become a Bagani (warrior-leader) involving tests of strength and spiritual communion.'
        },
        {
          id: 2,
          title: 'Panihapon Festival',
          description: 'Harvest celebration with traditional games and feasting',
          icon: '🎪',
          details: 'Annual festival featuring native games, traditional dances, and community feasts.'
        },
        {
          id: 3,
          title: 'Tigum-tigum',
          description: 'Council of elders for conflict resolution',
          icon: '👥',
          details: 'Traditional court system led by Datus and elders to resolve community disputes.'
        },
        {
          id: 4,
          title: 'Pag-ampo sa Yuta',
          description: 'Earth blessing ceremonies before planting',
          icon: '🌱',
          details: 'Rituals to bless the soil and ensure successful harvests, led by tribal priests.'
        },
      ],
      traditionalCrafts: [
        { id: 1, name: 'Kalasag Making', material: 'Wood, carabao hide', icon: '🛡️' },
        { id: 2, name: 'Kampilan Forging', material: 'Iron and brass', icon: '⚔️' },
        { id: 3, name: 'Sinalapid Weaving', material: 'Rattan and bamboo', icon: '🧺' },
        { id: 4, name: 'Tinalak Weaving', material: 'Abaca and natural dyes', icon: '🧵' },
      ],
      ecologicalKnowledge: [
        { id: 1, category: 'Rice Varieties', count: '28 traditional strains', icon: '🌾' },
        { id: 2, category: 'Forest Products', count: '65 useful species', icon: '🌳' },
        { id: 3, category: 'Soil Conservation', count: '5 traditional methods', icon: '🌱' },
        { id: 4, category: 'Sacred Grounds', count: '15 warrior sites', icon: '🗡️' },
      ],
      sustainablePractices: [
        { icon: '🌾', text: 'Rice Terraces - Traditional irrigation systems' },
        { icon: '⚔️', text: 'Hunting Regulation - Seasonal restrictions' },
        { icon: '🌳', text: 'Grove Protection - Sacred forest areas' },
        { icon: '💧', text: 'Spring Conservation - Protected water sources' },
      ],
      proverb: '"Ang tawo nga walay gigikanan, sama sa kahoy nga walay gamot." (A person without origin is like a tree without roots.) — Bukidnon Proverb',
    },
  },
  {
    id: 4,
    name: 'Manobo',
    subtitle: 'River People',
    description: 'Keepers of river ecosystems and aquatic traditions',
    color: '#4682B4',
    icon: 'water',
    svgIcon: WaterIcon,
    pattern: ['wave', 'fish', 'circle'],
    tribeData: {
      primaryColor: '#4682B4',
      headerTitle: 'Manobo Tribe',
      heroIcon: '🌊',
      heroTitle: 'Keepers of the River Ways',
      heroDescription: 'River-dwelling people with profound knowledge of aquatic ecosystems and unique river-based spiritual practices.',
      population: 'Approx. 95,000',
      territory: 'River systems of Bukidnon',
      language: 'Manobo languages (Austronesian)',
      values: [
        { icon: '🌊', title: 'Kasubay', text: 'River Harmony' },
        { icon: '🎣', title: 'Pangisda', text: 'Fishing Wisdom' },
        { icon: '🚣', title: 'Pagsakay', text: 'Navigation Skills' },
      ],
      beliefs: [
        { icon: '💧', title: 'Water Spirits', text: 'Reverence for river and water deities' },
        { icon: '🐟', title: 'Fish Ancestors', text: 'Belief in ancestral connection to aquatic life' },
        { icon: '🌧️', title: 'Rain Deities', text: 'Worship of weather and rainfall gods' },
      ],
      culturalPractices: [
        {
          id: 1,
          title: 'Pag-uli sa Suba',
          description: 'River cleansing and blessing ceremonies',
          icon: '🌊',
          details: 'Annual ritual to cleanse and bless the river, ensuring abundance and protection.'
        },
        {
          id: 2,
          title: 'Pangisda Ritual',
          description: 'Fishing ceremony before major fishing seasons',
          icon: '🎣',
          details: 'Ceremony to honor river spirits before the fishing season begins.'
        },
        {
          id: 3,
          title: 'Sakayan Making',
          description: 'Traditional boat building with spiritual rites',
          icon: '🛶',
          details: 'Ritualistic construction of traditional boats with blessings for safe voyages.'
        },
        {
          id: 4,
          title: 'Sayaw sa Tubig',
          description: 'Water dance rituals for community celebrations',
          icon: '💃',
          details: 'Traditional dances performed in or near water during important ceremonies.'
        },
      ],
      traditionalCrafts: [
        { id: 1, name: 'Bangka Making', material: 'Hollowed logs and bamboo', icon: '🛶' },
        { id: 2, name: 'Fish Trap Weaving', material: 'Bamboo and rattan', icon: '🎣' },
        { id: 3, name: 'Net Making', material: 'Abaca fiber and vines', icon: '🕸️' },
        { id: 4, name: 'Shell Crafts', material: 'River shells and beads', icon: '🐚' },
      ],
      ecologicalKnowledge: [
        { id: 1, category: 'Fish Species', count: '52 varieties', icon: '🐟' },
        { id: 2, category: 'Aquatic Plants', count: '38 medicinal species', icon: '🌿' },
        { id: 3, category: 'River Systems', count: '12 major rivers known', icon: '🌊' },
        { id: 4, category: 'Sacred Pools', count: '9 spiritual sites', icon: '💧' },
      ],
      sustainablePractices: [
        { icon: '🎣', text: 'Sustainable Fishing - Seasonal fishing bans' },
        { icon: '🌊', text: 'River Protection - Sacred no-fishing zones' },
        { icon: '🛶', text: 'Eco-friendly Boats - Natural materials only' },
        { icon: '🐟', text: 'Fish Conservation - Selective fishing methods' },
      ],
      proverb: '"Ang suba maoy kinabuhi; atong ampingan sama sa atong mga anak." (The river is life; we must protect it like our children.) — Manobo Wisdom',
    },
  },
  {
    id: 5,
    name: 'Matigsalug',
    subtitle: 'Forest Dwellers',
    description: 'Protectors of deep forest ecosystems and wildlife',
    color: '#228B22',
    icon: 'tree',
    svgIcon: TrailIcon,
    pattern: ['tree', 'leaf', 'circle'],
    tribeData: {
      primaryColor: '#228B22',
      headerTitle: 'Matigsalug Tribe',
      heroIcon: '🌳',
      heroTitle: 'Guardians of the Deep Forest',
      heroDescription: 'Forest-dwelling people with unparalleled knowledge of jungle ecosystems, medicinal plants, and wildlife.',
      population: 'Approx. 70,000',
      territory: 'Dense forests of Bukidnon',
      language: 'Matigsalug (Austronesian)',
      values: [
        { icon: '🌳', title: 'Pagbantay', text: 'Forest Guardianship' },
        { icon: '🌿', title: 'Pag-ayo', text: 'Healing Wisdom' },
        { icon: '🦌', title: 'Pagrespeto', text: 'Respect for Wildlife' },
      ],
      beliefs: [
        { icon: '🌲', title: 'Forest Spirits', text: 'Worship of tree and forest deities' },
        { icon: '🐆', title: 'Animal Totems', text: 'Spiritual connection to forest animals' },
        { icon: '🌿', title: 'Plant Spirits', text: 'Belief in consciousness of medicinal plants' },
      ],
      culturalPractices: [
        {
          id: 1,
          title: 'Pag-ampo sa Lasang',
          description: 'Forest blessing and protection rituals',
          icon: '🌳',
          details: 'Ceremonies to seek permission from forest spirits before gathering resources.'
        },
        {
          id: 2,
          title: 'Panambal',
          description: 'Traditional healing using forest medicines',
          icon: '🌿',
          details: 'Complex healing system using over 200 documented forest plants.'
        },
        {
          id: 3,
          title: 'Pangayam Ritual',
          description: 'Hunting ceremonies with spiritual guidance',
          icon: '🏹',
          details: 'Rituals before hunting to ensure success and maintain ecological balance.'
        },
        {
          id: 4,
          title: 'Sayaw sa Kahoy',
          description: 'Tree planting and blessing ceremony',
          icon: '🌱',
          details: 'Annual tree planting ritual with dances and offerings to forest spirits.'
        },
      ],
      traditionalCrafts: [
        { id: 1, name: 'Bows and Arrows', material: 'Bamboo and hardwoods', icon: '🏹' },
        { id: 2, name: 'Herbal Bundles', material: 'Medicinal plants and roots', icon: '🌿' },
        { id: 3, name: 'Bark Cloth', material: 'Tree bark and natural dyes', icon: '🧵' },
        { id: 4, name: 'Wooden Tools', material: 'Forest hardwoods', icon: '🪓' },
      ],
      ecologicalKnowledge: [
        { id: 1, category: 'Medicinal Plants', count: '215 species', icon: '🌿' },
        { id: 2, category: 'Animal Tracking', count: '38 animal signs', icon: '🐾' },
        { id: 3, category: 'Forest Types', count: '8 distinct ecosystems', icon: '🌳' },
        { id: 4, category: 'Sacred Groves', count: '23 protected areas', icon: '🌲' },
      ],
      sustainablePractices: [
        { icon: '🏹', text: 'Balanced Hunting - Take only what is needed' },
        { icon: '🌿', text: 'Herbal Harvesting - Sustainable plant gathering' },
        { icon: '🔥', text: 'Controlled Burns - Traditional fire management' },
        { icon: '🌳', text: 'Seed Keeping - Preserving native plant varieties' },
      ],
      proverb: '"Ang tawo nga makigsulti sa lasang, dunay kasingkasing alang sa tanan nga buhi." (One who speaks with the forest has a heart for all living things.) — Matigsalug Teaching',
    },
  },
  {
    id: 6,
    name: 'Tigwahanon',
    subtitle: 'Fire Keepers',
    description: 'Masters of fire rituals and metal craftsmanship',
    color: '#DC143C',
    icon: 'flame',
    svgIcon: FlameIcon,
    pattern: ['fire', 'triangle', 'circle'],
    tribeData: {
      primaryColor: '#DC143C',
      headerTitle: 'Tigwahanon Tribe',
      heroIcon: '🔥',
      heroTitle: 'Keepers of the Sacred Flame',
      heroDescription: 'Known for their mastery of fire rituals, metal craftsmanship, and as traditional blacksmiths of the highlands.',
      population: 'Approx. 65,000',
      territory: 'Highland areas of Bukidnon',
      language: 'Tigwahanon (Austronesian)',
      values: [
        { icon: '🔥', title: 'Pagdilaab', text: 'Fiery Spirit & Passion' },
        { icon: '⚒️', title: 'Pandayan', text: 'Craftsmanship Excellence' },
        { icon: '🤝', title: 'Pagtinabangay', text: 'Community Cooperation' },
      ],
      beliefs: [
        { icon: '🔥', title: 'Fire Deities', text: 'Worship of fire gods and spirits' },
        { icon: '⚒️', title: 'Metal Spirits', text: 'Belief in spirits within metals and minerals' },
        { icon: '🌋', title: 'Volcanic Beings', text: 'Reverence for volcanic deities' },
      ],
      culturalPractices: [
        {
          id: 1,
          title: 'Panday Ritual',
          description: 'Blacksmith ceremony before forging tools',
          icon: '⚒️',
          details: 'Spiritual ceremony to awaken the spirit within metals before forging begins.'
        },
        {
          id: 2,
          title: 'Pagdilaab Festival',
          description: 'Fire festival celebrating life and renewal',
          icon: '🔥',
          details: 'Annual fire festival with torch processions and fire dances.'
        },
        {
          id: 3,
          title: 'Panagang Firewalking',
          description: 'Ritual firewalking for spiritual purification',
          icon: '👣',
          details: 'Ceremonial walking on hot coals to demonstrate faith and spiritual strength.'
        },
        {
          id: 4,
          title: 'Pagpanday sa Galamiton',
          description: 'Tool blessing ceremony',
          icon: '🛠️',
          details: 'Ritual to bless newly forged tools and weapons for effectiveness and protection.'
        },
      ],
      traditionalCrafts: [
        { id: 1, name: 'Metal Forging', material: 'Iron and copper', icon: '⚒️' },
        { id: 2, name: 'Jewelry Making', material: 'Gold, silver, brass', icon: '💍' },
        { id: 3, name: 'Tool Making', material: 'Iron and hardwood', icon: '🛠️' },
        { id: 4, name: 'Ceremonial Items', material: 'Mixed metals', icon: '🔥' },
      ],
      ecologicalKnowledge: [
        { id: 1, category: 'Ore Sources', count: '15 known locations', icon: '⛏️' },
        { id: 2, category: 'Firewood Types', count: '27 preferred species', icon: '🔥' },
        { id: 3, category: 'Forge Sites', count: '8 sacred forges', icon: '⚒️' },
        { id: 4, category: 'Mineral Springs', count: '12 healing springs', icon: '♨️' },
      ],
      sustainablePractices: [
        { icon: '🔥', text: 'Controlled Burning - Traditional fire management' },
        { icon: '⛏️', text: 'Sustainable Mining - Small-scale extraction' },
        { icon: '🌳', text: 'Fuel Management - Selective tree harvesting' },
        { icon: '💧', text: 'Water Recycling - Forge water reuse systems' },
      ],
      proverb: '"Ang kalayo nagdala ug kagubot, apan usab nagdala ug kahimayaan." (Fire brings destruction, but also brings renewal.) — Tigwahanon Wisdom',
    },
  },
  {
    id: 7,
    name: 'Umayamnon',
    subtitle: 'River Fisherfolk',
    description: 'Specialists in river fishing and aquatic traditions',
    color: '#1E90FF',
    icon: 'fish',
    svgIcon: FishIcon,
    pattern: ['fish', 'wave', 'dot'],
    tribeData: {
      primaryColor: '#1E90FF',
      headerTitle: 'Umayamnon Tribe',
      heroIcon: '🐟',
      heroTitle: 'Masters of River and Stream',
      heroDescription: 'River specialists with exceptional knowledge of aquatic life, fishing techniques, and river navigation.',
      population: 'Approx. 60,000',
      territory: 'Umayam River basin and tributaries',
      language: 'Umayamnon (Austronesian)',
      values: [
        { icon: '🐟', title: 'Pangisda', text: 'Fishing Excellence' },
        { icon: '🌊', title: 'Pagpaubos', text: 'Humility to Nature' },
        { icon: '🛶', title: 'Paglawig', text: 'Navigation Mastery' },
      ],
      beliefs: [
        { icon: '🐠', title: 'Fish Spirits', text: 'Reverence for ancestral fish deities' },
        { icon: '🌊', title: 'River Guardians', text: 'Belief in protective river spirits' },
        { icon: '🌧️', title: 'Water Cycle Deities', text: 'Worship of rain and water cycle gods' },
      ],
      culturalPractices: [
        {
          id: 1,
          title: 'Pangisda Ritual',
          description: 'Annual fishing ceremony to honor river spirits',
          icon: '🎣',
          details: 'Elaborate ceremony asking permission from river spirits for bountiful fishing season.'
        },
        {
          id: 2,
          title: 'Panagtagbo sa Suba',
          description: 'River confluence ceremony',
          icon: '🌊',
          details: 'Ritual at river confluences to honor the meeting of waters and spirits.'
        },
        {
          id: 3,
          title: 'Pagbangka Ritual',
          description: 'Boat blessing ceremony',
          icon: '🛶',
          details: 'Ceremony to bless new boats for safety and successful fishing.'
        },
        {
          id: 4,
          title: 'Panag-uli sa Isda',
          description: 'Fish release ceremony for conservation',
          icon: '🐟',
          details: 'Ritual release of fish to ensure continued abundance in the rivers.'
        },
      ],
      traditionalCrafts: [
        { id: 1, name: 'Fish Net Weaving', material: 'Abaca and vines', icon: '🕸️' },
        { id: 2, name: 'Fish Trap Making', material: 'Bamboo and rattan', icon: '🎣' },
        { id: 3, name: 'Boat Building', material: 'Hollowed logs', icon: '🛶' },
        { id: 4, name: 'Fish Preservation', material: 'Salt and herbs', icon: '🐟' },
      ],
      ecologicalKnowledge: [
        { id: 1, category: 'Fish Species', count: '47 varieties', icon: '🐟' },
        { id: 2, category: 'Fishing Methods', count: '22 techniques', icon: '🎣' },
        { id: 3, category: 'River Knowledge', count: '8 major rivers', icon: '🌊' },
        { id: 4, category: 'Aquatic Plants', count: '31 edible species', icon: '🌿' },
      ],
      sustainablePractices: [
        { icon: '🎣', text: 'Seasonal Fishing - Respect breeding seasons' },
        { icon: '🐟', text: 'Size Limits - Only take mature fish' },
        { icon: '🌊', text: 'River Cleanliness - No waste in waterways' },
        { icon: '🌿', text: 'Natural Baits - Use only organic materials' },
      ],
      proverb: '"Ang isda nagpuyo sa tubig; ang tubig magpuyo sulod sa atong kasingkasing." (Fish live in water; water lives within our hearts.) — Umayamnon Teaching',
    },
  },
  
];

  // Tribal Pattern Component
  const TribalPattern = ({ type, color }) => {
    switch (type) {
      case 'circle':
        return <Circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.3" />;
      case 'triangle':
        return <Polygon points="12,6 18,18 6,18" fill={color} fillOpacity="0.3" />;
      case 'diamond':
        return <Polygon points="12,6 18,12 12,18 6,12" fill={color} fillOpacity="0.3" />;
      case 'wave':
        return (
          <Path
            d="M6,12 C9,9 15,9 18,12"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.3"
          />
        );
      case 'leaf':
        return (
          <Path
            d="M12,6 C10,8 8,10 12,14 C16,10 14,8 12,6 Z"
            fill={color}
            fillOpacity="0.3"
          />
        );
      case 'fire':
        return (
          <Path
            d="M12,6 L15,10 L12,14 L9,10 Z"
            fill={color}
            fillOpacity="0.3"
          />
        );
      case 'tree':
        return (
          <Path
            d="M12,6 L10,10 L14,10 L12,6 Z M12,10 L9,14 L15,14 L12,10 Z"
            fill={color}
            fillOpacity="0.3"
          />
        );
      case 'fish':
        return (
          <Path
            d="M8,12 C10,10 14,10 16,12 C14,14 10,14 8,12 Z"
            fill={color}
            fillOpacity="0.3"
          />
        );
      case 'shield':
        return (
          <Path
            d="M12,4 L8,8 L8,12 L12,16 L16,12 L16,8 L12,4 Z"
            fill={color}
            fillOpacity="0.3"
          />
        );
      case 'dot':
        return <Circle cx="12" cy="12" r="1" fill={color} fillOpacity="0.3" />;
      case 'line':
        return <Line x1="6" y1="12" x2="18" y2="12" stroke={color} strokeWidth="2" strokeOpacity="0.3" />;
      default:
        return null;
    }
  };

  // TribeCard Component - UPDATED
  const TribeCard = ({ tribe, index, navigation }) => {
    const IconComponent = tribe.svgIcon;
    
    return (
      <TouchableOpacity 
        style={[styles.card, { backgroundColor: tribe.color }]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('TribeDetail', { 
          tribeData: tribe.tribeData || tribes[0].tribeData // Fallback to Higaonon if no data
        })}
      >
        {/* Card Pattern Background */}
        <View style={styles.cardPattern}>
          <Svg width="100%" height="100%" opacity={0.1}>
            {tribe.pattern.map((patternType, i) => (
              <G key={i} transform={`translate(${i * 25}, ${i * 15})`}>
                <TribalPattern type={patternType} color="#FFFFFF" />
              </G>
            ))}
          </Svg>
        </View>

        {/* Card Header */}
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <IconComponent color="#FFFFFF" size={32} />
            <View style={styles.cardNumber}>
              <Text style={styles.cardNumberText}>#{index + 1}</Text>
            </View>
          </View>
          <Icon name="chevron-forward" size={20} color="#fff" />
        </View>

        {/* Card Content */}
        <View style={styles.cardContent}>
          <Text style={styles.tribeName}>{tribe.name}</Text>
          <Text style={styles.tribeSubtitle}>{tribe.subtitle}</Text>
          <Text style={styles.tribeDescription}>{tribe.description}</Text>
        </View>

        {/* Card Footer */}
        <View style={styles.cardFooter}>
          <View style={styles.readMoreButton}>
            <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              <Path
                d="M12 16V12"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <Path
                d="M12 8H12.01"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </Svg>
            <Text style={styles.readMoreText}>Explore Story</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Pattern */}
      <BackgroundPattern />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>Cultural Heritage</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <View style={styles.heroBadge}>
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M12 2L3 21H21L12 2Z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text style={styles.heroBadgeText}>7 Indigenous Tribes</Text>
            </View>
            <Text style={styles.heroTitle}>Discover Bukidnon's{'\n'}Living Heritage</Text>
            <Text style={styles.heroSubtitle}>
              Journey through the stories, traditions, and wisdom of eight remarkable indigenous communities
            </Text>
          </View>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={styles.sectionIcon}>
              <Circle cx="12" cy="12" r="10" stroke="#8B0000" strokeWidth="2" />
              <Path
                d="M12 8V12L16 14"
                stroke="#8B0000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </Svg>
            <View>
              <Text style={styles.sectionTitle}>Indigenous Communities</Text>
              <Text style={styles.sectionSubtitle}>Tap any card to learn more</Text>
            </View>
          </View>
        </View>

        {/* Tribe Cards */}
        <View style={styles.cardsContainer}>
          {tribes.map((tribe, index) => (
            <TribeCard 
              key={tribe.id} 
              tribe={tribe} 
              index={index} 
              navigation={navigation}
            />
          ))}
        </View>

        {/* Fixed Footer Decoration */}
        <View style={styles.footerDecoration}>
          <Svg width="100%" height={60}>
            <Path
              d={`M0,20 Q50,0 ${screenWidth},20 T${screenWidth * 2},20`}
              stroke="#8B0000"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <Circle cx="50" cy="30" r="4" fill="#8B0000" opacity="0.3" />
            <Circle cx={screenWidth - 50} cy="30" r="4" fill="#8B0000" opacity="0.3" />
          </Svg>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles remain exactly the same...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(139, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    paddingLeft: 75,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#ff0000ff',
    fontWeight: '500',
    marginTop: 2,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(139, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  heroSection: {
    height: 340,
    backgroundColor: '#ff0000ff',
    overflow: 'hidden',
  },
  heroContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 8,
  },
  heroBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  heroTitle: {
    fontSize: 46,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 42,
    marginTop: 20,
  },
  heroSubtitle: {
    fontSize: 15,
    color: '#ffcccb',
    lineHeight: 22,
    marginTop: 12,
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    gap: 8,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: '#ffcccb',
    fontWeight: '500',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sectionIcon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  cardsContainer: {
    paddingHorizontal: 20,
  },
  card: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12,
    overflow: 'hidden',
  },
  cardPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardIconContainer: {
    position: 'relative',
  },
  cardNumber: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  cardNumberText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  cardContent: {
    marginBottom: 20,
  },
  tribeName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  tribeSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: 12,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  tribeDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 10,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  footerDecoration: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Books;