import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";

// Constants
import COLORS from "../../Constants/colors";

// Components
import IconButton from "./IconButton";
import RangeSlider from "./RangeSlider";
import TextButton from "./TextButton";
import TextIconButton from "./TextIconButton";

// Hooks
import useMediaQueries from "../../Hooks/MediaQueries";

// Dummy Data
import dummyData from "../../Constants/dummyData";

const { height, width } = Dimensions.get("window");

const Section = ({ containerStyle, title, children }) => {
  return (
    <View style={[styles.section, { ...containerStyle }]}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_500Medium",
          color: COLORS.dark,
        }}
      >
        {title}
      </Text>

      {children}
    </View>
  );
};

const FilterModal = ({ isVisible, onClose }) => {
  /* States ⚡ */
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const [showFilterModal, setShowFilterModal] = useState(isVisible);

  const [deliveryTime, setDeliveryTime] = useState("");

  const [ratings, setRatings] = useState("");

  const [tags, setTags] = useState("");

  // Using Custom Hook 🎣
  const { isDeviceWidth360_374 } = useMediaQueries();

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height, height - (isDeviceWidth360_374 ? 580 : 600)],
  });

  const renderDistance = () => {
    return (
      <Section title="Distance">
        <View style={{ alignItems: "center" }}>
          <RangeSlider
            values={[3, 10]}
            min={1}
            max={20}
            postfix="km"
            onValuesChange={(values) => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderPriceRange = () => {
    return (
      <Section title="Pricing Range">
        <View style={{ alignItems: "center" }}>
          <RangeSlider
            values={[20, 70]}
            min={1}
            max={100}
            prefix="$"
            postfix=""
            onValuesChange={(values) => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderDeliveryTime = () => {
    return (
      <Section title="Delivery Time" containerStyle={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 12 }}>
          {dummyData.deliveryTime.map((item, index) => {
            return (
              <TextButton
                key={`time-${index}`}
                label={item.label}
                labelStyle={{
                  color:
                    item.id == deliveryTime ? COLORS.white : COLORS.lightgrey,
                }}
                buttonContainerStyle={{
                  width: "30%",
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: 5,
                  backgroundColor:
                    item.id == deliveryTime ? COLORS.primary : COLORS.grey,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderRatings = () => {
    return (
      <Section title="Ratings" containerStyle={{ marginTop: 40 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {dummyData.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`Rating-${index}`}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: 5,
                  backgroundColor:
                    item.id == ratings ? COLORS.primary : COLORS.grey,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.lightgrey,
                }}
                icon={item.id == ratings ? "star" : "staro"}
                iconStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.lightgrey,
                }}
                onPress={() => setRatings(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderTags = () => {
    return (
      <Section title="Tags">
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {dummyData.tags.map((item, index) => {
            return (
              <TextButton
                key={`Tag-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.lightgrey,
                }}
                buttonContainerStyle={{
                  height: 50,
                  margin: 5,
                  paddingHorizontal: 24,
                  alignItems: "center",
                  borderRadius: 5,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.grey,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  return (
    <Modal animationType="Fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        {/* Transparent Background */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.animatedView, { top: modalY }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontFamily: "Poppins_600SemiBold",
                color: COLORS.dark,
              }}
            >
              Filter Your Search
            </Text>

            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.grey,
              }}
              icon="cross"
              iconStyle={{ color: COLORS.primary }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: isDeviceWidth360_374 ? 200 : 250,
            }}
          >
            {/* Distance */}
            {renderDistance()}

            {/* Delivery Time */}
            {renderDeliveryTime()}

            {/* Price Range */}
            {renderPriceRange()}

            {/* Ratings */}
            {renderRatings()}

            {/* Tags */}
            {renderTags()}
          </ScrollView>
          {/* Apply Filter Button */}
          <View
            style={
              isDeviceWidth360_374
                ? styles.applyFilterResponsive
                : styles.applyFilter
            }
          >
            <TextButton
              label="Apply Filter"
              labelStyle={{
                color: COLORS.white,
                fontFamily: "Poppins_600SemiBold",
              }}
              buttonContainerStyle={{
                height: 50,
                borderRadius: 5,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => console.log("Filter Applied")}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.transparentBackground,
  },
  animatedView: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "100%",
    padding: 24,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginTop: 24,
  },
  applyFilter: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    height: 100,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },

  /* Responsive Style for Small Device ⚡ */
  applyFilterResponsive: {
    position: "absolute",
    bottom: 110,
    left: 0,
    right: 0,
    height: 80,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },
});
