import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

// Constants
import COLORS from "../../Constants/colors";

// Icons
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.lightgrey
              : COLORS.white,
          },
        ]}
      >
        <Icon name={iconName} style={styles.icon} />
        <TextInput
          secureTextEntry={hidePassword}
          {...props}
          style={styles.input}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {password && (
          <Icon
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={[styles.icon, { marginRight: 0 }]}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: COLORS.primary,
    fontFamily: "Poppins_400Regular",
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 5,
  },
  icon: {
    fontSize: 22,
    color: COLORS.dark,
    marginRight: 10,
  },
  input: {
    color: COLORS.dark,
    flex: 1,
    fontFamily: "Poppins_400Regular",
    letterSpacing: 0.5,
  },
  errorMessage: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 7,
    fontFamily: "Poppins_400Regular",
    letterSpacing: 0.5,
  },
});
