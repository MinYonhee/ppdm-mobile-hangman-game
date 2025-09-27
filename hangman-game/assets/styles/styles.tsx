import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forcaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  letra: {
    fontSize: 32,
    marginHorizontal: 5,
  },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tentativasContainer: {
    marginVertical: 10,
  },
  resultadoContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#d1ffd6',
    borderRadius: 10,
  },
  resultadoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
