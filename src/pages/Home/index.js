import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,00",
    date: "17/09/2023",
    type: 0, // despesas
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "3.000,00",
    date: "22/09/2023",
    type: 1, // entradas
  },
  {
    id: 3,
    label: "Salario",
    value: "7.200,00",
    date: "130/09/2023",
    type: 1, // entradas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gabrielly Thaís"></Header>
      <Balance saldo="15.000,00" gasto="390,00" />

      <Actions />
      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
