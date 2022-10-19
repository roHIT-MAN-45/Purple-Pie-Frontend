import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";

// Icons
import { Octicons, AntDesign } from "@expo/vector-icons";

// Map
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// Components
import Top from "../../Components/Top";
import TextIconButton from "../../Components/TextIconButton";
import TextButton from "../../Components/TextButton";
import Ratings from "../../Components/Ratings";
import StepperInput from "../../Components/StepperInput";

// Data
import dummyData from "../../../Constants/dummyData";

// Constants
import COLORS from "../../../Constants/colors";

const OrderScreen = ({ route, navigation }) => {
  // States ⭐
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [coordinates, setCoordinates] = useState({
    latitude: 36.102371,
    longitude: -115.174553,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Destructuring params
  const { foodItem } = route.params;

  // Price state
  const [price, setPrice] = useState(foodItem?.price);

  const renderDetails = () => {
    return (
      <View style={styles.detailsContainer}>
        {/* Food Item Card  */}
        <View style={styles.card}>
          {/* Wrapper  */}
          <View style={styles.wrapper}>
            {/* Calories */}
            <View style={styles.calories}>
              <Octicons name="flame" size={18} color={COLORS.primary} />
              <Text style={styles.caloriesText}>
                {foodItem?.calories} Calories
              </Text>
            </View>

            {/* Favourite */}
            <AntDesign
              name={isLiked ? "heart" : "hearto"}
              size={18}
              color={COLORS.primary}
              onPress={() => setIsLiked(!isLiked)}
            />
          </View>

          {/* Food Item Image */}
          <Image
            source={{ uri: foodItem?.image.toString() }}
            style={styles.image}
          />
        </View>

        {/* Food Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{foodItem?.name}</Text>

          <Text style={styles.infoSubText}>{foodItem?.description}</Text>
        </View>

        {/* Icon Button With Text */}
        <View style={styles.featuresContainer}>
          {dummyData.foodItemFeatures.map((item, index) => {
            return (
              <TextIconButton
                key={`icon-${index}`}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  marginRight:
                    index == dummyData.foodItemFeatures.length - 1 ? 0 : 5,
                  alignItems: "center",
                  borderRadius: 5,
                  backgroundColor: COLORS.primary,
                }}
                label={item.label}
                labelStyle={{
                  fontSize: 15,
                  color: COLORS.white,
                }}
                icon={item.icon}
                iconStyle={{
                  color: COLORS.white,
                }}
              />
            );
          })}
        </View>

        {/* Map  */}
        <Text style={styles.heading}>Restaurant</Text>
        <View style={styles.mapContainer} pointerEvents="none">
          <MapView
            style={styles.map}
            initialRegion={coordinates}
            provider={PROVIDER_GOOGLE}
            mapStyle={Platform.OS == "android" ? "none" : "standard"}
          >
            <Marker coordinate={coordinates} pinColor={COLORS.lightred} />
          </MapView>
        </View>
      </View>
    );
  };

  const renderRestaurant = () => {
    return (
      <View style={styles.restaurantContainer}>
        {/* Restaurant Image  */}
        <Image
          source={{ uri: foodItem.image }}
          style={styles.restaurantImage}
        />

        {/* Restaurant Info */}
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantInfoText}>Dominos</Text>
          <Text style={styles.restaurantInfoSubText}>2 KM away from you</Text>
        </View>

        {/* Restaurant Ratings */}
        <View style={styles.restaurantRatings}>
          <Ratings ratings={3} iconStyle={{ marginLeft: 5 }} />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <StepperInput
          containerStyle={{ marginRight: 10 }}
          value={quantity}
          onPlus={() => setQuantity(quantity + 1)}
          onMinus={() => {
            // Preventing minus value
            if (quantity === 0) return;

            setQuantity(quantity - 1);
          }}
        />

        {/* Buy Button */}
        <TextButton
          label={`$${(price * quantity).toFixed(2)} - Place Order`}
          labelStyle={{
            fontSize: 15,
            paddingTop: 5,
            color: COLORS.white,
          }}
          buttonContainerStyle={{
            flex: 1,
            height: 50,
            paddingHorizontal: 14,
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => {}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Component */}
      <Top onBackPress={() => navigation.goBack()} />

      {/* Body  */}
      <ScrollView>
        {/* Food Item Details */}
        {renderDetails()}

        {/* Line Devider  */}
        <View style={styles.lineDivider} />

        {/* Restaurant  */}
        {renderRestaurant()}

        {/* Line Devider  */}
        <View style={styles.lineDivider} />

        {/* Footer Section  */}
        {renderFooter()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    marginTop: 12,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  card: {
    height: 215,
    borderRadius: 15,
    backgroundColor: COLORS.white,

    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 12,
  },
  calories: {
    flexDirection: "row",
  },
  caloriesText: {
    color: COLORS.lightgrey,
    fontFamily: "Poppins_500Medium",
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 170,
    resizeMode: "contain",
  },
  infoContainer: {
    marginTop: 24,
  },
  infoText: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
  },
  infoSubText: {
    marginTop: 8,
    color: COLORS.lightgrey,
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    textAlign: "justify",
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "Poppins_600SemiBold",
  },
  mapContainer: {
    height: 250,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 12,
    backgroundColor: COLORS.white,

    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  lineDivider: {
    height: 2,
    width: "100%",
    backgroundColor: COLORS.grey,
    marginVertical: 5,
  },
  restaurantContainer: {
    flexDirection: "row",
    marginVertical: 24,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  restaurantImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  restaurantInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  restaurantInfoText: {
    fontSize: 16,
    color: COLORS.dark,
    fontFamily: "Poppins_600SemiBold",
  },
  restaurantInfoSubText: {
    fontSize: 14,
    color: COLORS.lightgrey,
    fontFamily: "Poppins_400Regular",
  },
  restaurantRatings: {
    flexDirection: "row",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 24,
  },
});
