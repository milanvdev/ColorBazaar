import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {chartTableData} from '../../data/data';
import styles from './Wingo.style';

const ChartTable = () => {
  const renderItem = ({item}) => {
    const periodNumber = parseInt(item.period, 10);
    const minRange = Math.max(0, periodNumber - 5);
    const maxRange = Math.min(9, periodNumber + 4);
    const range = Array.from(
      {length: maxRange - minRange + 1},
      (_, i) => minRange + i,
    );
    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{item.number}</Text>
        {range.map((num, index) => (
          <Text
            key={index}
            style={[
              styles.cell,
              num === periodNumber ? styles.highlightedCell : {},
            ]}>
            {num}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.cell, styles.headerText]}>Period</Text>
        <Text style={[styles.cell, styles.headerText]}>Number</Text>
      </View>

      <FlatList
        data={chartTableData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ChartTable;
