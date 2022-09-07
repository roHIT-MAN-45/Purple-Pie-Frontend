// Async Storage Module
import AsyncStorage from "@react-native-async-storage/async-storage";

// Required functions
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

// Storage Instance
import storage from "./firebase";

// Upload Profile Pic To Firebase Storage 🚀
const uploadProfile = async (imageURI) => {
  try {
    // Accessing Async Storage 📦
    const userInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));

    // Returns Promise 📌
    const response = await fetch(imageURI);

    const file = await response.blob();

    const storageRef = ref(storage, `Pictures/${userInfo.user_id}`);

    // Uploading Profile 🚀
    const snapshot = await uploadBytes(storageRef, file);
  } catch (error) {
    console.log(error.message);
  }
};

// Get Profile Picture From Firebase Storage 😉
const getProfile = async () => {
  try {
    // Accessing Async Storage 📦
    const userInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));

    const imageURL = await getDownloadURL(
      ref(storage, `Pictures/${userInfo.user_id}`)
    );

    // Setting image after fetching 👍
    return imageURL;
  } catch (error) {
    console.log(error.message);
    return null; // Returning null when catch block catches error 👋
  }
};

export { uploadProfile, getProfile };
