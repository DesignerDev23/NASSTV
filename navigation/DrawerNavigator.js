import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import AboutUsScreen from '../screens/AboutUsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen'; 
import ContactUsScreen from '../screens/ContactUsScreen';
import TermsOfService from '../screens/TermsOfService';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={(props) => <Sidebar {...props} />} // Use Sidebar as drawer content
  >
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
    <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
    <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
    <Drawer.Screen name="TermsOfService" component={TermsOfService} />
    {/* No need to add additional screens unless required */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
