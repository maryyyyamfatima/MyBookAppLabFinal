import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { ThemedView } from "@/app-example/components/ThemedView";
import { ThemedText } from "@/app-example/components/ThemedText";
import { useRouter } from "expo-router";

export default function BookList({ books, loading }) {
  const router = useRouter();
  const scheme = useColorScheme();

  return (
    <ThemedView
      style={[
        styles.container,
        scheme === "dark" ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <ThemedText style={[styles.urduText, { writingDirection: "rtl" }]}>
        یہ ایک اردو جملہ ہے
      </ThemedText>

      {loading ? (
        <ActivityIndicator size="large" color="#FF6347" />
      ) : books.length === 0 ? (
        <ThemedText style={styles.noDataText}>No books available</ThemedText>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: `/[id]`,
                  params: {
                    id: item.id,
                    bookName: item.bookName,
                    language: item.language,
                    pageNo: item.pageNo,
                    rating: item.rating,
                  },
                })
              }
            >
              <ThemedView
                style={[
                  styles.bookCard,
                  scheme === "dark"
                    ? styles.darkBookCard
                    : styles.lightBookCard,
                ]}
              >
                <ThemedText
                  style={[
                    styles.bookTitle,
                    scheme === "dark" ? styles.darkText : styles.lightText,
                  ]}
                >
                  {item.bookName}
                </ThemedText>
                <ThemedText
                  style={[
                    styles.bookInfo,
                    scheme === "dark" ? styles.darkText : styles.lightText,
                  ]}
                >
                  Language: {item.language}
                </ThemedText>
                <ThemedText
                  style={[
                    styles.bookInfo,
                    scheme === "dark" ? styles.darkText : styles.lightText,
                  ]}
                >
                  Pages: {item.pageNo}
                </ThemedText>
                <ThemedText
                  style={[
                    styles.bookInfo,
                    scheme === "dark" ? styles.darkText : styles.lightText,
                  ]}
                >
                  Rating: {item.rating}
                </ThemedText>
              </ThemedView>
            </TouchableOpacity>
          )}
        />
      )}
    </ThemedView>
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
  bookCard: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 12,
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    transform: [{ scale: 1.02 }],
  },
  lightBookCard: {
    backgroundColor: "#FFF",
    borderColor: "#D3D3D3",
  },
  darkBookCard: {
    backgroundColor: "#444",
    borderColor: "#666",
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  bookInfo: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: "Arial",
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#FFF",
  },
  noDataText: {
    fontSize: 18,
    color: "#FF6347",
    textAlign: "center",
    marginTop: 20,
  },
  urduText: {
    fontSize: 18,
    fontFamily: "NotoNastaliqUrdu",
    textAlign: "center",
  },
});
