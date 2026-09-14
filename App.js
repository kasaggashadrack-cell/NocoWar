import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
export default function App() {
  const [balance, setBalance] = useState(1000);
  const [staked, setStaked] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>NOCO WAR 🔥</Text>
        <Text style={styles.balance}>Balance: {balance} NC</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome Warrior!</Text>
          <Text style={styles.cardText}>Stake NC, Battle, Earn</Text>
          <TouchableOpacity style={styles.button} onPress={() => setBalance(balance + 10)}>
            <Text style={styles.buttonText}>CLAIM BONUS +10 NC</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Staking Pool</Text>
          <Text style={styles.stat}>You Staked: {staked} NC</Text>
          <TouchableOpacity style={styles.buttonGreen} onPress={() => {setStaked(staked+100); setBalance(balance-100)}}>
            <Text style={styles.buttonText}>STAKE 100 NC</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Battle Arena ⚔️</Text>
          <TouchableOpacity style={styles.buttonRed}>
            <Text style={styles.buttonText}>ENTER BATTLE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  header: { padding: 20, backgroundColor: '#1a1a1a', alignItems: 'center' },
  logo: { color: '#ff4444', fontSize: 28, fontWeight: 'bold' },
  balance: { color: '#fff', marginTop: 10, fontSize: 18 },
  content: { padding: 15 },
  card: { backgroundColor: '#1e1e1e', padding: 20, borderRadius: 15, marginBottom: 15 },
  cardTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  cardText: { color: '#aaa', marginBottom: 15 },
  stat: { color: '#ffcc00', fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#ff4444', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonGreen: { backgroundColor: '#00aa00', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonRed: { backgroundColor: '#880000', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
