import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const TermsOfService = () => {
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
        <Text style={styles.headerText}>Terms Of Service</Text>
      </View>

      {/* Dummy Container Section */}
      <View style={styles.dummyContainerSection}>
        {/* First Dummy Container */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content */}
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
          By accessing or using the NASSTV platform, you agree to comply with the following terms and conditions:
          </Text>
        </View>

        {/* Second Dummy Container (Duplicate) */}


        {/* Third Dummy Container (Duplicate) */}


        {/* Fourth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          a. Use Of the Platform:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
          You must use the NASSTV platform only for lawful purposes and in accordance with these Terms
        of Service.You are responsible for maintaining the confidentiality of your account credentials and for all
        activities that occur under your account.
          </Text>
        </View>

        {/* Fifth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          b. Intellectual Property:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
          The NASSTV platform and its content, including but not limited to text, graphics, logos, images,
            and software, are the property of BigTech Agency and are protected by copyright and other
            intellectual property laws.
          </Text>
        </View>

        {/* Sixth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          c. Disclaimer of Warranty
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
          The NASSTV platform is provided on an "as is" and "as available" basis without any warranties,
            express or implied. BigTech Agency does not warrant that the NASSTV platform will be uninterrupted, error-free, or
            free of viruses or other harmful components.
          </Text>
        </View>

        {/* Seventh Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          c. Limitation of Liability:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
          In no event shall BigTech Agency be liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or in connection with your use of the NASSTV platform.
          </Text>
        </View>

        {/* Eighth Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.tittle]}>
          c.   Indemnification:
          </Text>
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
          You agree to indemnify and hold BigTech Agency harmless from any claims, damages, losses,
            liabilities, costs, and expenses arising out of or in connection with your use of the NASSTV
            platform.
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

export default TermsOfService;
