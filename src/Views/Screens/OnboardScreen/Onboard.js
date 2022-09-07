import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Animated,
} from "react-native";

// Components
import OnboardItem from "../../Components/OnboardItem";
import OnboardPaginator from "../../Components/OnboardPaginator";
import OnboardButton from "../../Components/OnboardButton";

// Constants
import data from "../../../Constants/dummyData";

const Onboard = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < data.slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // navigating user when he reaches last slide 😊
      navigation.navigate("Signup");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* List  */}
      <View style={{ flex: 3 }}>
        <FlatList
          ref={flatListRef}
          data={data.slides}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={false}
          keyExtractor={(item) => `item-${item.id}`}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          renderItem={({ item }) => <OnboardItem item={item} />}
        />
      </View>

      {/* Pagination  */}
      <OnboardPaginator data={data.slides} scrollX={scrollX} />

      {/* Animated Button */}
      <OnboardButton
        onPress={scrollTo}
        slideIndex={currentIndex}
        percentage={(currentIndex + 1) * (100 / data.slides.length)}
      />
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
