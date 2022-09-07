import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";

// Linking
import * as Linking from "expo-linking";

// Constants
import COLORS from "../../../Constants/colors";

// Icons
import Icon from "@expo/vector-icons/AntDesign";

// Social Images
import profile from "../../../../assets/Images/me.jpg";
import youtube from "../../../../assets/Images/Social/youtube.png";
import linkedin from "../../../../assets/Images/Social/linkedin.png";
import twitter from "../../../../assets/Images/Social/twitter.png";
import github from "../../../../assets/Images/Social/github.png";

// Stack Images
import javascript from "../../../../assets/Images/TechStack/javascript.png";
import html from "../../../../assets/Images/TechStack/html.png";
import css from "../../../../assets/Images/TechStack/css.png";
import react from "../../../../assets/Images/TechStack/react.png";
import jwt from "../../../../assets/Images/TechStack/jwt.png";
import firebase from "../../../../assets/Images/TechStack/firebase.png";
import mongoDB from "../../../../assets/Images/TechStack/mongoDB.png";
import nodejs from "../../../../assets/Images/TechStack/nodejs.png";
import redux from "../../../../assets/Images/TechStack/redux.png";
import tailwind from "../../../../assets/Images/TechStack/tailwind.png";
import python from "../../../../assets/Images/TechStack/python.png";
import postgresql from "../../../../assets/Images/TechStack/postgresql.png";
import git from "../../../../assets/Images/TechStack/git.png";
import redis from "../../../../assets/Images/TechStack/redis.png";
import fastapi from "../../../../assets/Images/TechStack/fastapi.png";

// Components
import TechStack from "../../Components/TechStack";
import ImageButton from "../../Components/ImageButton";
import CopyrightBlock from "../../Components/CopyrightBlock";

const Aboutme = () => {
  // States ⭐
  const [isLiked, setIsLiked] = useState(false);

  // Accessing URL 🔗
  const openUrlHandler = (URL) => {
    Linking.openURL(URL);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.section}
        showsVerticalScrollIndicator={false}
      >
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={profile} style={styles.image} />
        </View>

        {/* Position */}
        <View style={styles.wrapper}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexBasis: "85%" }}>
              <Text style={styles.name}>Rohit Sunil Chavan</Text>
              <Text style={styles.position}>
                React Native Expo | Android & IOS | Full Stack DEV
              </Text>
            </View>

            <Icon
              name={isLiked ? "heart" : "hearto"}
              size={25}
              color={COLORS.primary}
              onPress={() => setIsLiked(!isLiked)}
            />
          </View>
        </View>

        {/* Info 1 */}
        <View style={styles.infoContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Experience</Text>
            <Text style={styles.subTitle}>6 Months</Text>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.title}>Type</Text>
            <Text style={styles.subTitle}>Internship</Text>
          </View>
        </View>

        {/* Info 2 */}
        <View style={styles.infoContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Birth Date</Text>
            <Text style={styles.subTitle}>01/02/2003</Text>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.title}>Education</Text>
            <Text style={styles.subTitle}>BCA (in progress)</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionHeading}>About Me</Text>
          <Text style={styles.description}>
            I am a full-stack devloper, I am familiar with the technologies that
            are required to build and deploy a Full-Stack application, web
            application or website. I've proficiency in code optimization to
            improving the performance, Responsive Web Design and analysing or
            fixing UI bugs quickly.
          </Text>
        </View>

        {/* Tech Stack */}
        <View style={styles.stackContainer}>
          <Text style={styles.sectionHeading}>Tech Stack</Text>

          <View style={styles.stackWrapper}>
            {/* Technologies */}
            <TechStack icon={javascript} title="Javascript" />
            <TechStack icon={html} title="HTML" />
            <TechStack icon={css} title="CSS" />
            <TechStack icon={jwt} title="JWT" />
            <TechStack icon={firebase} title="Firebase" />
            <TechStack icon={redis} title="Redis" />
            <TechStack icon={mongoDB} title="Mongo DB" />
            <TechStack icon={react} title="React" />
            <TechStack icon={nodejs} title="Node JS" />
            <TechStack icon={redux} title="Redux" />
            <TechStack icon={tailwind} title="Tailwind CSS" />
            <TechStack icon={python} title="Pyhton" />
            <TechStack icon={postgresql} title="PostgreSQL" />
            <TechStack icon={git} title="Github" />
            <TechStack icon={fastapi} title="FastAPI" />
          </View>
        </View>

        {/* Social Media */}
        <View style={styles.buttonContainer}>
          <Text style={styles.sectionHeading}>Social Media</Text>

          {/* Buttons */}
          <ImageButton
            image={youtube}
            title="Youtube"
            onPress={() =>
              openUrlHandler(
                "https://www.youtube.com/channel/UCCn_hk6vKrcrJCeyJBLJglA"
              )
            }
          />
          <ImageButton
            image={github}
            title="Github"
            onPress={() => openUrlHandler("https://github.com/roHIT-MAN-45")}
          />
          <ImageButton
            image={twitter}
            title="Twitter"
            onPress={() =>
              openUrlHandler("https://twitter.com/RohitCh05943009")
            }
          />
          <ImageButton
            image={linkedin}
            title="linkedin"
            onPress={() =>
              openUrlHandler(
                "https://www.linkedin.com/in/rohitchavan110116114/"
              )
            }
          />
        </View>

        {/* Copyright Block */}
        <CopyrightBlock />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Aboutme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  imageContainer: {
    width: 250,
    height: 250,
    marginTop: 35,
    alignSelf: "center",
    borderWidth: 5,
    borderColor: COLORS.primary,
    borderRadius: 125,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  wrapper: {
    marginTop: 20,
    padding: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: "Poppins_500Medium",
    color: COLORS.dark,
  },
  position: {
    fontSize: 17,
    fontFamily: "Poppins_500Medium",
    color: COLORS.primary,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  innerContainer: {
    flexBasis: "50%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: COLORS.dark,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: COLORS.lightgrey,
    letterSpacing: 0.5,
  },
  descriptionContainer: {
    borderRadius: 15,
    padding: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: COLORS.lightgrey,
  },
  sectionHeading: {
    fontSize: 17,
    fontFamily: "Poppins_600SemiBold",
    color: COLORS.dark,
  },
  stackContainer: {
    padding: 10,
  },
  stackWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 10,
    padding: 10,
  },
});
