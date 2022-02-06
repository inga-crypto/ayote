import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const DropletIcon = (props) => <Icon {...props} name="droplet-outline" fill="#fe615a" />;

const BellIcon = (props) => <Icon {...props} name="home-outline" fill="#fe615a" />;

const UserIcon = (props) => <Icon {...props} name="bell-outline" fill="#fe615a" />;

const BottomNav = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      <TouchableHighlight style={styles.touchableStyle} onPress={() => navigation.navigate('WaterTrackScreen')}>
        <BottomNavigationTab icon={DropletIcon} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.touchableStyle}>
        <BottomNavigationTab icon={BellIcon} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.touchableStyle}>
        <BottomNavigationTab icon={UserIcon} />
      </TouchableHighlight>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-around',
    bottom: 0,
    paddingTop: 30,
    paddingBottom: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  touchableStyle: {
    paddingHorizontal: 25
  }
});

// import { StyleSheet, View } from 'react-native';
// import React from 'react';
// import { Text, BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

// const DropletIcon = (props) => <Icon {...props} name="droplet-outline" />;

// const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

// const UserIcon = (props) => <Icon {...props} name="person-outline" />;

// const BottomNav = () => {
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   return (
//     <BottomNavigation selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)} style={{ width: '100%', position: 'absolute', bottom: 0 }}>
//       <BottomNavigationTab icon={DropletIcon} />
//       <BottomNavigationTab icon={BellIcon} />
//       <BottomNavigationTab icon={UserIcon} />
//     </BottomNavigation>
//   );
// };

// export default BottomNav;

// const styles = StyleSheet.create({});
