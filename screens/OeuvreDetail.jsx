import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

function OeuvreDetail({ route }) {
  const { oeuvre } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: oeuvre.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{oeuvre.nom}</Text>
        <View style={styles.authorContainer}>
          <Image
            source={{ uri: oeuvre?.auteur?.image }}
            style={styles.authorAvatar}
          />
          <Text style={styles.authorName}>{oeuvre?.auteur?.name}</Text>
          <Text style={styles.creationDate}>{formatDate(oeuvre.dt_creation)}</Text>
        </View>
        <Text style={styles.description}>{oeuvre.description}</Text>
      </View>
    </ScrollView>
  );
}
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return `Published on ${new Date(date).toLocaleDateString(undefined, options)}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creationDate: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default OeuvreDetail;