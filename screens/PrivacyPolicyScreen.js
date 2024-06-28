import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
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
        <Text style={styles.headerText}>Privacy Policy Information</Text>
      </View>

      {/* Dummy Container Section */}
      <View style={styles.dummyContainerSection}>
        {/* First Dummy Container */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content */}
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
            At BigTech Agency, we are committed to protecting your privacy and ensuring the security of your
            personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you
            access and use the NASSTV platform.
          </Text>
        </View>

        {/* Second Dummy Container (Duplicate) */}


        {/* Third Dummy Container (Duplicate) */}


        {/* Fourth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          a. Information Collection and Use:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
            We collect personal information, such as name, email address, and contact details, when you
            register an account on the NASSTV platform. We may also collect non-personal information, such as
            device information and usage data, to improve our services and user experience. Your personal information
            is used solely for the purpose of providing and improving the NASSTV platform and will not be shared with
            third parties without your consent.
          </Text>
        </View>

        {/* Fifth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          b. Data Security:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
            We implement appropriate security measures to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction. Despite our best efforts, no method of transmission
            over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
          </Text>
        </View>

        {/* Sixth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          c. Cookies:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
            The NASSTV platform may use cookies to enhance your user experience. You can configure your browser
            to refuse cookies or to indicate when a cookie is being sent.
          </Text>
        </View>

        {/* Seventh Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          c. Third-party Links:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
            The NASSTV platform may contain links to third-party websites or services. We are not responsible for
            the privacy practices or content of these third-party sites.
          </Text>
        </View>

        {/* Eighth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          c.  Changes to Privacy Policy:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective
            immediately upon posting on the NASSTV platform.
          </Text>
        </View>
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
    alignItems: "center", // Example header background color
    padding: 20,
  },
  headerText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: "bold",
    color: "#000", // Example header text color
    marginLeft: 25, // Example left margin
  },
  backButtonIcon: {
    width: 40,
    height: 40,
    tintColor: "rgba(0, 146, 63, 0.9)", // Example icon color
  },
  edithLayout: {
    width: 320,
    backgroundColor: "rgba(0, 146, 63, 0.2)", // Example background color
    borderRadius: 10,
    marginTop: 20, // Adjust margin between containers
    padding: 15, // Add padding for better spacing
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  dummyTypo1: {
    textAlign: "justify",
    color: "#696969", // Example text color
    fontSize: 13, // Example font size
    fontWeight: '500',
    lineHeight: 25, // Example line height
  },
  dummyContainerSection: {
    flexDirection: 'column', // Display containers in a column
    alignItems: 'center', // Center containers horizontally
    marginVertical: 20, // Adjust vertical margin between header and containers
  },
  dummyContainer: {
    width: '100%', // Make containers full width
  },
  dummyTextDummy: {
    marginTop: 10, // Example top margin
  },
});

export default PrivacyPolicyScreen;
