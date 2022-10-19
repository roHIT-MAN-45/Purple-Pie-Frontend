import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// env
import envs from "../../../../Config/env";

// Axios Module
import axios from "axios";

// Components
import Search from "../../Components/Search";
import Section from "../../Components/Section";
import HorizontalFoodCard from "../../Components/HorizontalFoodCard";
import VerticalFoodCard from "../../Components/VerticalFoodCard";
import FilterModal from "../../Components/FilterModal";
import Loader from "../../Components/Loader";

// Constants
import COLORS from "../../../Constants/colors";
import dummyData from "../../../Constants/dummyData";

// Dimensions
const { width, height } = Dimensions.get("window");

const SearchScreen = ({ navigation }) => {
  // Can't manipulate menu state because currently storing all items init ⚡
  const [menu, setMenu] = useState([]);

  // State to store filtered items according to which tab is active 😉
  const [filteredMenu, setFilteredMenu] = useState([]);

  const [popular, setPopular] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedFoodItemIndex, setSelectedFoodItemIndex] = useState(0);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${envs.url}/menuitems/`);

      if (response.status == 200) {
        setLoading(false);
        setMenu(response.data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handleChangeCategory = (categoryIndex, typeIndex) => {
    const filteredItems = menu.filter(
      (a) =>
        a.category == dummyData.categories[categoryIndex]?.name &&
        dummyData.foodTypes[typeIndex]?.name == a.itemType
    );

    setFilteredMenu(filteredItems);
  };

  const handleFoodItemType = (typeIndex, categoryIndex) => {
    const filteredItems = menu.filter(
      (a) =>
        a.itemType == dummyData.foodTypes[typeIndex]?.name &&
        dummyData.categories[categoryIndex]?.name == a.category
    );

    setFilteredMenu(filteredItems);
  };

  const handlePopularAndRecommends = (typeIndex) => {
    const popularItems = menu.filter(
      (a) =>
        a.category == "Popular" &&
        a.itemType == dummyData.foodTypes[typeIndex]?.name
    );

    const recommendedItems = menu.filter(
      (a) =>
        a.category == "Recommended" &&
        a.itemType == dummyData.foodTypes[typeIndex]?.name
    );

    setPopular(popularItems);
    setRecommends(recommendedItems);
  };

  // Running once when the component mounts ⚡
  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Running some functions to filter menu 😉
  useEffect(() => {
    if (menu.length > 0) {
      handleFoodItemType(selectedFoodItemIndex, selectedCategoryIndex);

      handleChangeCategory(selectedCategoryIndex, selectedFoodItemIndex);

      // Handles Popular and Recommends according to Selected Food Item ⚡
      handlePopularAndRecommends(selectedFoodItemIndex);
    }
  }, [selectedCategoryIndex, selectedFoodItemIndex, menu]);

  const renderFoodTypes = () => {
    return (
      <FlatList
        data={dummyData.foodTypes}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 55,
                marginTop: 15,
                marginLeft: index == 0 ? 24 : 12,
                marginRight: index == dummyData.foodTypes.length - 1 ? 24 : 0,
                paddingHorizontal: 8,
                borderRadius: 5,
                backgroundColor:
                  selectedFoodItemIndex == index
                    ? COLORS.primary
                    : COLORS.white,
                marginBottom: 10,

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}
              onPress={() => {
                setSelectedFoodItemIndex(index);

                handleFoodItemType(index, selectedCategoryIndex);
              }}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={30}
                color={
                  selectedFoodItemIndex == index ? item.color : COLORS.black
                }
              />

              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 15,
                  alignSelf: "center",
                  marginHorizontal: 8,
                  paddingTop: 5,
                  color:
                    selectedFoodItemIndex == index
                      ? COLORS.white
                      : COLORS.lightgrey,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderPopularNearYou = () => {
    return (
      <Section
        title="Popular Near You"
        onPress={() => console.log("Show All Popular Near You")}
      >
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <VerticalFoodCard
                containerStyle={{
                  marginLeft: index == 0 ? 24 : 18,
                  marginRight: index == popular.length - 1 ? 24 : 0,
                  backgroundColor: COLORS.white,
                }}
                item={item}
                onPress={() => navigation.navigate("Order", { foodItem: item })}
              />
            );
          }}
        />
      </Section>
    );
  };

  const renderRecommended = () => {
    return (
      <Section
        title="Recommended"
        onPress={() => console.log("Show All Recommended")}
      >
        <FlatList
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  flexDirection: "row",
                  height: 180,
                  width: width * 0.85,
                  marginLeft: index == 0 ? 24 : 18,
                  marginRight: index == recommends.length - 1 ? 24 : 0,
                  paddingRight: 12,
                  alignItems: "center",
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  marginBottom: 10, // important ⭐

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 6,
                }}
                imageStyle={{ height: 120, width: 120, margin: 10 }}
                item={item}
                onPress={() => navigation.navigate("Order", { foodItem: item })}
              />
            );
          }}
        />
      </Section>
    );
  };

  const renderMenuCategories = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 30, marginBottom: 20 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: 18,
                marginRight: index == dummyData.categories.length - 1 ? 18 : 0,
              }}
              onPress={() => {
                setSelectedCategoryIndex(index);

                handleChangeCategory(index, selectedFoodItemIndex);
              }}
            >
              <Text
                style={{
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.dark,
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 16,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Loader  */}
      <Loader visible={loading} />

      {/* Search Header */}
      <Search handleFilterModal={setShowFilterModal} />

      {/* Filter Modal */}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}

      {/* List */}
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Food Categories Section */}
            {renderFoodTypes()}

            {/* Popular Near You */}
            {renderPopularNearYou()}

            {/* Recommended */}
            {renderRecommended()}

            {/* Menu Category */}
            {renderMenuCategories()}
          </View>
        }
        ListFooterComponent={<View style={{ marginBottom: 70 }}></View>}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                flexDirection: "row",
                alignItems: "center",
                height: 130,
                marginHorizontal: 10,
                marginBottom: 15,
                borderRadius: 5,
                backgroundColor: COLORS.milky,

                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 5,
              }}
              imageStyle={{
                height: 90,
                width: 90,
              }}
              item={item}
              onPress={() => navigation.navigate("Order", { foodItem: item })}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
