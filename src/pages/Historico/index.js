
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HistoricoScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá Cliente!</Text>
        <Text style={styles.balanceLabel}>Saldo em Conta</Text>
        <Text style={styles.balance}>R$ 450,00</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.totalLabel}>Total do mês</Text>
        <Text style={styles.total}>R$ 4.450,00</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.transactionsHeader}>Últimas Transações</Text>
        <View style={styles.transaction}>
          <Text>10/01</Text>
          <Text>Elektro</Text>
          <Text>R$ 200,00</Text>
        </View>
        <View style={styles.transaction}>
          <Text>20/01</Text>
          <Text>Casa dos doces</Text>
          <Text>R$ 60,00</Text>
        </View>
        <View style={styles.transaction}>
          <Text>22/01</Text>
          <Text>Casa dos kibi</Text>
          <Text>R$ 120,00</Text>
        </View>
        <View style={styles.transaction}>
          <Text>29/01</Text>
          <Text>Prever</Text>
          <Text>R$ 90,00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Assuming this is the orange color used in the image
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  balanceLabel: {
    fontSize: 18,
    color: '#fff',
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40, // Adjust this value to overlap correctly
  },
  totalLabel: {
    fontSize: 18,
    color: '#555',
  },
  total: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  footer: {
    flex: 2,
    marginTop: 20,
  },
  transactionsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HistoricoScreen;
