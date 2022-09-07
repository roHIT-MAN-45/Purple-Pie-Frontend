import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

// Icons
import { FontAwesome, Feather } from "@expo/vector-icons";

// Constants
import COLORS from "../../Constants/colors";

const Search = ({ handleFilterModal }) => {
  return (
    <View style={styles.search}>
      <FontAwesome name="search" size={20} color={COLORS.primary} />
      <TextInput style={styles.input} placeholder="Search..." />
      <TouchableOpacity onPress={() => handleFilterModal(true)}>
        <Feather name="filter" size={20} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.grey,
    backgroundColor: COLORS.white,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingTop: 5,
    fontFamily: "Poppins_400Regular",
  },
});
