import { StyleSheet } from 'react-native';

const HomeEstilo = StyleSheet.create({
  telaResumo: {
    flex: 1,
    height: '150%',
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    padding: 20,
  },
  table: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  addExpenseContainer: {
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius:8
  },
  addButton: {
    backgroundColor: '#ffa726',
    padding: 8,
    marginBottom: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  navigateToPaymentsButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  navigateToPaymentsText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeEstilo;
