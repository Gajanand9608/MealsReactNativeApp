import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function FavoritesScreen() {
  const favoritesMealCtx = useContext(FavoritesContext);
  const favoritesMeals = MEALS.filter((mealItem) =>
    favoritesMealCtx.ids.includes(mealItem.id)
  );
  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Nothing added</Text>
      </View>
    );
  } else {
    return <MealList items={favoritesMeals} />;
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
