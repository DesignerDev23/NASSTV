import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AboutUsScreen = () => {
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
        <Text style={styles.headerText}>About BigTech Agency Limited</Text>
      </View>

      {/* Dummy Container Section */}
      <View style={styles.dummyContainerSection}>
        {/* First Dummy Container */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content */}
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
            BigTech Agency is a leading software development firm headquartered in Nigeria, with a reputation for
            delivering innovative and cutting-edge solutions to clients worldwide. Our team comprises highly skilled
            professionals with expertise in various areas of software development, including web development,
            mobile app development, UI/UX design, and more.

            {'\n'}{'\n'}

            At BigTech Agency, we are committed to leveraging the latest technologies and best practices to create
            tailored solutions that address the unique needs and challenges of our clients. Whether it's developing a
            custom website, building a mobile app from scratch, or enhancing existing software systems, we strive to
            deliver high-quality, scalable, and user-friendly solutions that drive business growth and success.
          </Text>
        </View>

        {/* Second Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
          Our approach to software development is collaborative and client-focused. We work closely with our
          clients to understand their goals, requirements, and vision, ensuring that we deliver solutions that align
          with their objectives and exceed their expectations. From conceptualization to deployment and beyond,
          we are dedicated to providing exceptional service and support at every stage of the development process.
          At BigTech Agency, we pride ourselves on our commitment to innovation, quality, and customer
          satisfaction. With our expertise, experience, and passion for technology, we empower businesses to
          thrive in today's digital world and achieve their full potential.

            {'\n'}{'\n'}


          </Text>
        </View>
        {/* Second Dummy Container (Duplicate) */}
        <View style={[styles.dummyContainer, styles.edithLayout]}>
          {/* Dummy Text Content (Duplicate) */}
          <Text style={[styles.dummyTextDummy, styles.dummyTypo1]}>
 
          NASSTV, on the other hand, stands for the National Assembly of the Federal Republic of Nigeria
            Television. It is a platform developed by BigTech Agency for the National Assembly of Nigeria.
            {'\n'}{'\n'}

            As the developers of NASSTV, BigTech Agency's role is to design, build, and maintain the platform
according to the specifications and requirements. We ensure that NASSTV functions smoothly, delivers
content effectively, and meets the needs of its users. Additionally, we may provide technical support,
updates, and enhancements to NASSTV as necessary to ensure its optimal performance.


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

export default AboutUsScreen;
