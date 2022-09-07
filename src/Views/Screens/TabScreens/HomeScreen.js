import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

// Icons
import { AntDesign } from "@expo/vector-icons";

// Async Storage Module
import AsyncStorage from "@react-native-async-storage/async-storage";

// Constants
import data from "../../../Constants/dummyData";
import COLORS from "../../../Constants/colors";

// Banner
import banner from "../../../../assets/Images/Home/banner.jpg";

// App Dimensions
const { height, width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [offers, setOffers] = useState([]);
  const [features, setFeatures] = useState([]);
  const [userName, setUserName] = useState(null);

  // Getting User's Name from Async Storage ⚡
  const fetchUserName = async () => {
    const userInfo = JSON.parse(await AsyncStorage.getItem("UserInfo"));

    if (userInfo?.name) {
      setUserName(userInfo.name);
    }
  };

  useEffect(() => {
    // Running when component mounts 🚀
    fetchUserName();

    setFeatures(data.ourFeatures);
    setOffers(data.weOffer);
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: COLORS.dark,
              fontSize: 25,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Hello!
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.lightgrey,
              fontFamily: "Poppins_500Medium",
            }}
          >
            {userName}
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={styles.bellIcon}>
            <AntDesign name="bells" size={22} />
            <View style={styles.redDot}></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderBanner = () => {
    return (
      <View style={{ height: 120, borderRadius: 20 }}>
        <Image
          source={banner}
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
        />
      </View>
    );
  };

  const renderFeatures = () => {
    const Header = () => {
      return (
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_600SemiBold",
              color: COLORS.primary,
            }}
          >
            Features
          </Text>
        </View>
      );
    };

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginBottom: 20,
            width: 60,
            alignItems: "center",
          }}
          // Passing data to Feature page to make an API call 🚀
          onPress={() =>
            navigation.navigate("Feature", {
              info: item.featureInfo,
            })
          }
        >
          <View
            style={{
              height: 50,
              width: 50,
              marginBottom: 5,
              borderRadius: 20,
              backgroundColor: item.backgroundColor,
              alignItems: "center",
              justifyContent: "center",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}
          >
            <AntDesign name={item.icon} size={23} color={item.color} />
          </View>
          <Text
            style={{
              color: COLORS.dark,
              textAlign: "center",
              flexWrap: "wrap",
              fontSize: 13,
              fontFamily: "Poppins_400Regular",
            }}
          >
            {item.description}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(feature) => feature.id}
        renderItem={renderItem}
        style={{ marginTop: 20 }}
      />
    );
  };

  const renderOffers = () => {
    const HeaderComponent = () => {
      return (
        <View>
          {renderHeader()}
          {renderBanner()}
          {renderFeatures()}
          {renderOffersHeader()}
        </View>
      );
    };

    const renderOffersHeader = () => {
      return (
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins_600SemiBold",
                color: COLORS.primary,
              }}
            >
              Offers
            </Text>
          </View>
          <TouchableOpacity style={{}} onPress={() => console.log("View All")}>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.lightgrey,
                fontFamily: "Poppins_500Medium",
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.listItem}
          onPress={() => console.log(item.title)}
        >
          <View style={styles.bannerContainer}>
            <Image source={item.img} resizeMode="cover" style={styles.banner} />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={offers}
        keyExtractor={(offer) => offer.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
      />
    );
  };

  return <SafeAreaView style={styles.container}>{renderOffers()}</SafeAreaView>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  listContainer: {
    paddingHorizontal: 30,
  },
  listItem: {
    marginVertical: 8,
    width: width / 2.5,
  },
  bannerContainer: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.lightgrey,
  },
  banner: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentContainer: {
    height: 150,
    padding: 10,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: COLORS.dark,
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: COLORS.lightgrey,
  },
  header: {
    flexDirection: "row",
    marginVertical: 20,
  },
  bellIcon: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.dark,
    backgroundColor: COLORS.white,
  },
  redDot: {
    position: "absolute",
    top: -5,
    right: -5,
    height: 10,
    width: 10,
    backgroundColor: COLORS.red,
    borderRadius: 5,
  },
});
