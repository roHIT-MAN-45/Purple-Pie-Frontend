import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

// Icons
import { Octicons, AntDesign } from "@expo/vector-icons";

// Constants
import COLORS from "../../Constants/colors";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.verticalContainer, { ...containerStyle }]}
      onPress={onPress}
    >
      {/* Calories and Favourites */}
      <View style={{ flexDirection: "row" }}>
        {/* Calories */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Octicons name="flame" size={18} color={COLORS.primary} />

          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              color: COLORS.lightgrey,
              fontSize: 13,
              marginLeft: 5,
            }}
          >
            {item.calories} Calories
          </Text>
        </View>

        {/* Favourites */}
        <AntDesign
          name="heart"
          size={20}
          color={item.isFavourite ? COLORS.red : COLORS.lightgrey}
        />
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image.toString() }} style={styles.image} />
      </View>

      {/* Info */}
      <View style={styles.infoContainer}>
        {/* Name */}
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Poppins_600SemiBold",
            color: COLORS.dark,
          }}
        >
          {item.name}
        </Text>

        {/* Description */}
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 15,
            color: COLORS.lightgrey,
            textAlign: "center",
          }}
        >
          {item.description}
        </Text>

        {/* Price */}
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
            color: COLORS.dark,
            marginTop: 12,
          }}
        >
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;

const styles = StyleSheet.create({
  verticalContainer: {
    width: 200,
    padding: 12,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  imageContainer: {
    height: 140,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  infoContainer: {
    alignItems: "center",
  },
});
