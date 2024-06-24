import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importação necessária
import HomeEstilo from './style';
import { PieChart } from 'react-native-chart-kit';

const HomeScreen = () => {
  const navigation = useNavigation(); // Hook useNavigation para acessar a navegação

  const [saldo, setSaldo] = useState(0);
  const [expenses, setExpenses] = useState([
    { category: 'Alimentação', amount: 0 },
    { category: 'Casa', amount: 0 },
    { category: 'Viagens', amount: 0 },
    { category: 'Compras', amount: 0 },
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [novoSaldo, setNovoSaldo] = useState(''); // Estado para o novo saldo

  const adicionarDespesa = () => {
    if (newCategory && newAmount) {
      // Verifica se há saldo disponível para a nova despesa
      if (parseFloat(newAmount) > saldo) {
        alert('Saldo insuficiente para esta despesa.');
        return;
      }

      const index = expenses.findIndex(expense => expense.category === newCategory);
      if (index !== -1) {
        const updatedExpenses = [...expenses];
        updatedExpenses[index].amount += parseFloat(newAmount);
        setExpenses(updatedExpenses);
      } else {
        setExpenses([...expenses, { category: newCategory, amount: parseFloat(newAmount) }]);
      }

      // Subtrai o valor da despesa do saldo atual
      setSaldo(prevSaldo => prevSaldo - parseFloat(newAmount));

      setNewCategory('');
      setNewAmount('');
    }
  };

  const alterarSaldo = () => {
    if (novoSaldo) {
      setSaldo(parseFloat(novoSaldo));
      setNovoSaldo('');
    }
  };

  const adicionarSaldo = () => {
    if (novoSaldo) {
      setSaldo(prevSaldo => prevSaldo + parseFloat(novoSaldo));
      setNovoSaldo('');
    }
  };

  const pieData = expenses.filter(expense => expense.amount > 0).map(expense => ({
    name: expense.category,
    amount: expense.amount,
    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'),
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  const VoltaHome = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={HomeEstilo.telaResumo}>
      <Text>Olá Cliente!</Text>
      <Text>Saldo em Conta: R$ {saldo.toFixed(2)}</Text>
      <Text>DESPESAS RENDA</Text>
      <View style={HomeEstilo.table}>
        <View style={HomeEstilo.tableRow}>
          <Text style={HomeEstilo.tableHeader}>Categoria</Text>
          <Text style={HomeEstilo.tableHeader}>Valor</Text>
        </View>
        {expenses.map((expense, index) => (
          <View style={HomeEstilo.tableRow} key={index}>
            <Text>{expense.category}</Text>
            <Text>{expense.amount.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={HomeEstilo.addExpenseContainer}>
        <TextInput
          style={HomeEstilo.input}
          placeholder="Categoria"
          value={newCategory}
          onChangeText={text => setNewCategory(text)}
        />
        <TextInput
          style={HomeEstilo.input}
          placeholder="Valor"
          value={newAmount}
          onChangeText={text => setNewAmount(text)}
        />
        <TouchableOpacity style={HomeEstilo.addButton} onPress={adicionarDespesa}>
          <Text style={HomeEstilo.addButtonText}>Adicionar Despesa</Text>
        </TouchableOpacity>
      </View>

      <View style={HomeEstilo.addExpenseContainer}>
        <TextInput
          style={HomeEstilo.input}
          placeholder="Novo Saldo"
          value={novoSaldo}
          onChangeText={text => setNovoSaldo(text)}
        />
        <TouchableOpacity style={HomeEstilo.addButton} onPress={alterarSaldo}>
          <Text style={HomeEstilo.addButtonText}>Alterar Saldo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeEstilo.addButton} onPress={adicionarSaldo}>
          <Text style={HomeEstilo.addButtonText}>Adicionar Saldo</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={HomeEstilo.navigateToPaymentsButton} // Estilo do botão
        onPress={() => navigation.navigate('Pagamentos')} // Navegação para a rota 'Pagamentos'
      >
        <Text style={HomeEstilo.navigateToPaymentsText}>Adicionar Nota Fiscal</Text>
      </TouchableOpacity>
      
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <PieChart
          data={pieData}
          width={300}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </View>
  );
};

export default HomeScreen;
