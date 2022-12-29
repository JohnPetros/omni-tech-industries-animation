import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  logo: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover'
  },
  text: {
    marginTop: 35,
    marginBottom: 35,
    color: '#B5E7FF',
    fontWeight: 'bold',
    fontSize: 22,
  },
  form: {
    borderWidth: 6,
    borderRadius: 5,
    borderColor: '#B5E7FF',
    backgroundColor: '#007CBB',
    width: '90%',
    padding: 20,
    shadowColor: '#00fffd',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 22,
  },
});

export default styles;
