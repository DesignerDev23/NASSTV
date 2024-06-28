import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ContactUsScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:admin@bigtechagency.com');
  };

  const handleEmailPress2 = () => {
    Linking.openURL('mailto:info@bigtechagency.com');
  };

  const handlePhoneCallPress = () => {
    Linking.openURL('tel:+2347046660010');
  };

  const handleWebsitePress = () => {
    Linking.openURL('https://bigtechagency.com');
  };

  const handleFacebookPress = () => {
    Linking.openURL(`https://www.facebook.com/profile.php?id=100084
    743025362&mibextid=LQQJ4d`);
  };

  const handleTwitterPress = () => {
    Linking.openURL(`https://twitter.com/bigtech_agency?s=21&t=GJ9Q
    K15QDY2R3CHwV8-1Iw
    `);
  };

  const handleLinkedInPress = () => {
    Linking.openURL(`https://www.linkedin.com/company/bigtech-agency
    `);
  };

  const handleInstagramPress = () => {
    Linking.openURL(`https://www.instagram.com/bigtech_agency/`);
  };

  const handleWhatsAppPress = () => {
    Linking.openURL('https://wa.me/447503124604');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            style={styles.backButtonIcon}
            resizeMode="cover"
            source={require("../assets/back-button.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact</Text>
      </View>

      {/* Email Container */}
      <TouchableOpacity style={styles.touchableContainer} onPress={handleEmailPress}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="email" size={24} color="#00923F" />
        </View>
        <Text style={styles.emailText}>admin@bigtechagency.com</Text>
        <Image
          style={styles.forwardIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
      </TouchableOpacity>

      {/* Email Container 2 */}
      <TouchableOpacity style={styles.touchableContainer} onPress={handleEmailPress2}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="email" size={24} color="#00923F" />
        </View>
        <Text style={styles.emailText}>info@bigtechagency.com</Text>
        <Image
          style={styles.forwardIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
      </TouchableOpacity>

      {/* Phone Call Container */}
      <TouchableOpacity style={styles.touchableContainer} onPress={handlePhoneCallPress}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="phone" size={24} color="#00923F" />
        </View>
        <Text style={styles.emailText}> +234 704 666 0010,</Text>
        <Image
          style={styles.forwardIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
      </TouchableOpacity>

      {/* Website Container */}
      <TouchableOpacity style={styles.touchableContainer} onPress={handleWebsitePress}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="web" size={24} color="#00923F" />
        </View>
        <Text style={styles.emailText}>bigtechagency.com</Text>
        <Image
          style={styles.forwardIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
      </TouchableOpacity>

      {/* Social Media Icons */}
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity onPress={handleFacebookPress}>
          <MaterialCommunityIcons name="facebook" size={30} color="#00923F" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTwitterPress}>
          <MaterialCommunityIcons name="twitter" size={30} color="#00923F" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkedInPress}>
          <MaterialCommunityIcons name="linkedin" size={30} color="#00923F" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress}>
          <MaterialCommunityIcons name="instagram" size={30} color="#00923F" style={styles.socialMediaIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWhatsAppPress}>
          <MaterialCommunityIcons name="whatsapp" size={30} color="#00923F" style={styles.socialMediaIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginLeft: '30%',
  },
  backButtonIcon: {
    width: 40,
    height: 40,
    tintColor: "rgba(0, 146, 63, 0.9)",
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 146, 63, 0.2)",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  iconContainer: {
    backgroundColor: "rgba(6, 171, 250, 0.1)",
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    marginRight: 10,
    width: 40,
    height: 40,
    tintColor: "#000",
  },
  emailText: {
    color: "#00923F",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 15,
    textAlign: "left",
  },
  forwardIcon: {
    width: 30,
    height: 30,
    tintColor: "#00923F",
  },
  socialMediaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: '10%',
  },
  socialMediaIcon: {
    marginVertical: 5,
    marginLeft: 25,
  },
});

export default ContactUsScreen;
