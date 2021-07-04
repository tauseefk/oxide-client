import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import styles from "./styles"

export const Loader = () => {
  return (
    <SafeAreaView style={styles.loader}>
      <View style={styles.loader}>
      </View>
    </SafeAreaView>
  )
}