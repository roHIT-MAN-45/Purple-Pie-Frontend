import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

// Bottomsheet Library
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet/src";

// GestureHandler
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Expo Image Picker
import * as ImagePicker from "expo-image-picker";

// Async Storage Module
import AsyncStorage from "@react-native-async-storage/async-storage";

// Constants
import COLORS from "../../../Constants/colors";

// Icons
import Ionicons from "@expo/vector-icons/Ionicons";

// Dummy Images
import profile from "../../../../assets/Images/Profile/profile.png";
import Offer1 from "../../../../assets/Images/Home/offer1.jpg";
import Offer2 from "../../../../assets/Images/Home/offer2.jpg";
import Offer3 from "../../../../assets/Images/Home/offer3.jpg";

// Hooks
import useMediaQueries from "../../../Hooks/MediaQueries";

// Utils
import { uploadProfile, getProfile } from "../../../../Firebase/utils";

// Components
import Top from "../../Components/Top";
import Button from "../../Components/Button";

const ProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  // Getting User's Name from Async Storage ⚡
  const fetchUserName = async () => {
    const userInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));

    if (userInfo?.name) {
      setUserName(userInfo.name);
    }
  };

  const fetchProfilePicture = async () => {
    // Getting Image URL ⚡
    const imageURL = await getProfile();

    // Checking If URL Is Not NULL 🛑
    if (imageURL) {
      setImage(imageURL);
    }
  };

  useEffect(() => {
    // Running when component mounts 🚀
    fetchUserName();

    fetchProfilePicture();
  }, []);

  // Using Custom Hook 🎣
  const { isDeviceWidth360_374 } = useMediaQueries();

  // BottomSheet Ref 🎯
  const bottomSheetRef = useRef();

  const handleBottomSheet = useCallback((index) => {
    bottomSheetRef.current.snapToIndex(index);
    setIsSheetOpen(true);
  }, []);

  // Camera 📌
  const takePhotoFromCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Setting State & Uploading Image ⚡
    if (!result.cancelled) {
      setImage(result.uri);

      // Uploading to storage 👍
      uploadProfile(result.uri);
    }
  };

  // Gallery 📌
  const choosePhotoFromGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Setting State & Uploading Image ⚡
    if (!result.cancelled) {
      setImage(result.uri);

      // Uploading to storage 👍
      uploadProfile(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: isDeviceWidth360_374 ? 60 : 50,
        }}
      >
        {/* Top Header */}
        <Top />

        {/* Profile */}
        <View style={{ alignSelf: "center" }}>
          {/* Profile Pic*/}
          <View style={styles.profileImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.profile} />
            ) : (
              <Image source={profile} style={styles.profile} />
            )}
          </View>

          {/* Update Or Add Pic Icon */}
          <TouchableOpacity
            style={styles.add}
            onPress={() => handleBottomSheet(0)}
          >
            <Ionicons
              name="ios-add"
              size={48}
              color={COLORS.white}
              style={{ marginLeft: 3 }}
            />
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{userName}</Text>
          {/* <Text style={[styles.details, { color: COLORS.primary }]}>
            Full Stack Developer
          </Text> */}
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={styles.text}>123</Text>
            <Text
              style={[
                styles.details,
                { fontSize: 14, textTransform: "uppercase" },
              ]}
            >
              Orders
            </Text>
          </View>

          <View
            style={[
              styles.statsBox,
              {
                borderColor: COLORS.grey,
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={styles.text}>12</Text>
            <Text
              style={[
                styles.details,
                { fontSize: 14, textTransform: "uppercase" },
              ]}
            >
              Regular
            </Text>
          </View>

          <View style={styles.statsBox}>
            <Text style={styles.text}>2</Text>
            <Text
              style={[
                styles.details,
                { fontSize: 14, textTransform: "uppercase" },
              ]}
            >
              Loved
            </Text>
          </View>
        </View>

        {/* Your Recommended */}
        <Text style={[styles.title, { paddingLeft: 15, marginTop: 10 }]}>
          Your Recommended
        </Text>
        <View style={{ marginVertical: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Later Map Images Here */}
            <View style={styles.imageContainer}>
              <Image source={Offer1} style={styles.image} />
            </View>

            <View style={styles.imageContainer}>
              <Image source={Offer2} style={styles.image} />
            </View>

            <View style={styles.imageContainer}>
              <Image source={Offer3} style={styles.image} />
            </View>
          </ScrollView>
        </View>

        {/* Recent Activity */}
        <View style={{ paddingHorizontal: 15, marginVertical: 15 }}>
          <Text style={styles.title}>Recent Activity</Text>
          <View style={styles.activityContainer}>
            <View style={styles.activityIndicator} />

            <View>
              <Text style={[styles.text, { fontSize: 16 }]}>
                Liked{" "}
                <Text
                  style={{
                    letterSpacing: 1,
                    color: COLORS.primary,
                  }}
                >
                  Cheese Burger
                </Text>{" "}
                From Popular Near You!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BottomSheet  */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[315]}
        index={-1}
        enablePanDownToClose={true}
        onClose={() => setIsSheetOpen(false)}
      >
        {/* Sheet Content */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetScrollView
            style={{ padding: 20, backgroundColor: COLORS.white }}
          >
            <BottomSheetView style={styles.sheet}>
              <Text style={styles.sheetTitle}>Upload Profile Picture</Text>
              <Text style={styles.sheetSubtitle}>
                Choose Your Profile Picture
              </Text>
            </BottomSheetView>

            {/* Buttons  */}
            <Button
              title="Take Photo"
              buttonStyle={{ marginVertical: 5, height: 50 }}
              onPress={takePhotoFromCamera}
            />

            <Button
              title="Choose From Gallery"
              buttonStyle={{ marginVertical: 5, height: 50 }}
              onPress={choosePhotoFromGallery}
            />
          </BottomSheetScrollView>
        </GestureHandlerRootView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    resizeMode: "cover",
    width: 190,
    height: 190,
    overflow: "hidden",
    borderRadius: 100,
  },
  add: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  text: {
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    color: COLORS.dark,
  },
  details: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: COLORS.lightgrey,
    letterSpacing: 1,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    width: 250,
    height: 180,
    borderRadius: 12,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    color: COLORS.primary,
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    letterSpacing: 0.3,
  },
  sheet: {
    marginBottom: 10,
  },
  sheetTitle: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    color: COLORS.dark,
  },
  sheetSubtitle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: COLORS.lightgrey,
  },
});
