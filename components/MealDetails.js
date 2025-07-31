import { StyleSheet, Text, View } from 'react-native';

const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={[styles.infoText, textStyle]}>Time: {duration}m</Text>
      <Text style={[styles.infoText, textStyle]}>
        Complexity: {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.infoText, textStyle]}>Cost: {affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 12,
  },
});
