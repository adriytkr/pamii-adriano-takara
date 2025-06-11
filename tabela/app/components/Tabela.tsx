import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type TabelaProps = {
  headers: string[];
  data: string[][];
};

const Tabela: React.FC<TabelaProps> = ({ headers, data }) => {
  return (
    <ScrollView horizontal>
      <View>
        <View style={styles.headerRow}>
          {headers.map((header, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.headerText}>{header}</Text>
            </View>
          ))}
        </View>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.dataRow}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={styles.cell}>
                <Text>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cell: {
    padding: 10,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default Tabela;
