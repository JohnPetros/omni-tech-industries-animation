import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  form: {
    borderWidth: 6,
    borderRadius: 5,
    borderColor: '#00a4a2',
    backgroundColor: '#006665',
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
  buntton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    width: "100%"
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 5,
    color: '#fff',
  },
});

export default styles;
