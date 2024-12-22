import { useRouter, useSearchParams } from "expo-router";
import { StyleSheet, View, Text, useColorScheme } from "react-native";

export default function BookDetail() {
  const { id, bookName, language, pageNo, rating } = useSearchParams(); // Get the book details from params
  const scheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        scheme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <Text
        style={[
          styles.title,
          scheme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        {bookName}
      </Text>
      <Text
        style={[
          styles.detail,
          scheme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Language: {language}
      </Text>
      <Text
        style={[
          styles.detail,
          scheme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Pages: {pageNo}
      </Text>
      <Text
        style={[
          styles.detail,
          scheme === "dark" ? styles.darkText : styles.lightText,
        ]}
      >
        Rating: {rating}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  lightContainer: {
    backgroundColor: "#E6E6FA",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginTop: 8,
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#FFF",
  },
});
