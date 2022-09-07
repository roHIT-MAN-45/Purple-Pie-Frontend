import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// Constants
import COLORS from "../../Constants/colors";

const Section = ({ title, onPress, children }) => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <Text
          style={{
            flex: 1,
            fontFamily: "Poppins_600SemiBold",
            fontSize: 18,
            color: COLORS.primary,
          }}
        >
          {title}
        </Text>

        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              color: COLORS.lightgrey,
              fontSize: 13,
              fontFamily: "Poppins_500Medium",
            }}
          >
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {children}
    </SafeAreaView>
  );
};

export default Section;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 25,
    marginBottom: 20,
  },
});
