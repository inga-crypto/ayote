import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Tab, TabBar } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const PersonIcon = (props) => <Icon {...props} fill="#fff" name={'person-outline'} />;
const BellIcon = (props) => <Icon {...props} fill="#fff" name="bell-outline" />;

const routes = ['UserProfileScreen', 'HomeScreen'];

const TopNav = () => {
  const navigation = useNavigation();
  const [personIconName, setPersonIconName] = useState('person-outline');
  const [bellIconName, setBellIconName] = useState('bell-outline');
  return (
    <TabBar
      style={styles.topTabBar}
      selectedIndex=""
      onSelect={(index) => {
        navigation.navigate(routes[index]);
      }}
    >
      <Tab style={styles.profileIconStyle} icon={PersonIcon} />
      <Tab style={styles.bellIcon} icon={BellIcon} />
    </TabBar>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  topTabBar: {
    backgroundColor: "#151515",
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    marginBottom: 10
  },
  profileIconStyle: {
    alignItems: 'flex-start',
    marginRight: 30,
    marginTop: 20
  },
  bellIcon: {
    marginTop: 20,
    alignItems: 'flex-end'
  }
});
