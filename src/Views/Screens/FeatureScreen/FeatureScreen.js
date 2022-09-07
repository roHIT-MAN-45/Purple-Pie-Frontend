import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
} from "react-native";

// Bottomsheet Library
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet/src";

// GestureHandler
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Constants
import COLORS from "../../../Constants/colors";

// Components
import Top from "../../Components/Top";
import Feedback from "../../Components/Feedback";
import Button from "../../Components/Button";
import CopyrightSmallBlock from "../../Components/CopyrightSmallBlock";

// Custom Constants
const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const DOT_SIZE = 8;

const FeatureScreen = ({ route, navigation }) => {
  // Getting data from params ⭐
  const { info } = route.params;

  // Scrolo Y for animation 🎉
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <Top />

      <View style={styles.listContainer}>
        {/* Images Or GIF's */}
        <Animated.FlatList
          data={info.images}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginTop: -15,
                }}
              >
                <Image source={item} style={styles.image} />
              </View>
            );
          }}
        />
        {/* Pagination */}
        <View style={styles.pagination}>
          {info.images.map((_, index) => {
            return <View style={styles.dot} key={`dot-${index}`} />;
          })}

          {/* Active Dot Indicator */}
          <Animated.View
            style={[
              styles.indicator,
              {
                // Actual Animation 😊
                transform: [
                  {
                    translateY: Animated.divide(
                      scrollY,
                      ITEM_HEIGHT
                    ).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_SIZE * 2],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>

      {/* BottomSheet */}
      <BottomSheet
        initialSnapIndex={0}
        snapPoints={[height - ITEM_HEIGHT, height]}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          {/* Sheet Content  */}
          <BottomSheetScrollView
            style={{ backgroundColor: COLORS.white }}
            contentContainerStyle={{ padding: 20 }}
          >
            <Text style={styles.title}>{info.title}</Text>
            <Text style={styles.price}>{info.subTitle}</Text>
            <View style={{ marginVertical: 10 }}>
              {info.description.map((text, index) => {
                return (
                  <Text key={index} style={styles.text}>
                    {text}
                  </Text>
                );
              })}
            </View>

            {/* Button */}
            <Button title="Know More" />

            {/* Feedback Section */}
            <View style={styles.feedbackContainer}>
              <Feedback />
            </View>

            {/* Copyright Small Block  */}
            <CopyrightSmallBlock />
          </BottomSheetScrollView>
        </GestureHandlerRootView>
      </BottomSheet>
    </View>
  );
};

export default FeatureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    height: ITEM_HEIGHT,
    overflow: "hidden",
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "contain",
  },
  pagination: {
    position: "absolute",
    // top: ITEM_HEIGHT / 2, // Use this if you want pagination in middle 👍
    top: ITEM_HEIGHT / 1.3,
    left: 20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: COLORS.lightgrey,
    marginBottom: DOT_SIZE,
  },
  indicator: {
    position: "absolute",
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
    width: DOT_SIZE * 2,
    height: DOT_SIZE * 2,
    borderRadius: DOT_SIZE * 2,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    color: COLORS.primary,
  },
  price: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    color: COLORS.dark,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
    color: COLORS.lightgrey,
  },
  feedbackContainer: {
    marginTop: 20,
  },
});
