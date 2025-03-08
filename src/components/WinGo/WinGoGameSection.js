/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  battingButton,
  battingTableButton,
  gameBattingData,
  pullGameBallsData,
  winGoSecData,
} from '../../data/data';
import ClockIcon from '../../assets/svg/ClockIcon';
import {generateInitialId, incrementLastPart} from '../../utils/helper';
import Button from '../../common/Button';
import styles from './Wingo.style';
import GameHistoryTable from './GameHistoryTable';
import ChartTable from './ChartTable';
import MyHistoryTable from './MyHistoryTable';

const WinGoGameSection = () => {
  const [selectedItem, setSelectedItem] = useState(winGoSecData[0].time);
  const [timeLeft, setTimeLeft] = useState(30);
  const [randomId, setRandomId] = useState(generateInitialId());
  const [activeXTitle, setActiveXTitle] = useState(gameBattingData[0].title);
  const [activeTableBtn, setActiveTableBtn] = useState(
    battingTableButton[0].title,
  );

  useEffect(() => {
    if (timeLeft === 0) {
      setRandomId(incrementLastPart(randomId));
      setTimeLeft(30);
      return;
    }
    const timer = setInterval(
      () => setTimeLeft(prevTime => prevTime - 1),
      1000,
    );
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const getTableData = () => {
    switch (activeTableBtn) {
      case 'Game history':
        return <GameHistoryTable />;
      case 'Chart':
        return <ChartTable />;
      case 'My history':
        return <MyHistoryTable />;
      default:
        return <GameHistoryTable />;
    }
  };

  return (
    <View>
      {/* Time Selection Buttons */}
      <View style={styles.walletFlex}>
        {winGoSecData.map(item => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            onPress={() => setSelectedItem(item.time)}
            style={[
              styles.itemContainer,
              selectedItem === item.time && styles.activeItem,
            ]}>
            <ClockIcon />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemTime}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.marginTop}>
        <View style={styles.gameContainer}>
          <View>
            <Text style={styles.winGoText}>Win Go {selectedItem}</Text>
            <View style={styles.ballsContainer}>
              {pullGameBallsData.map((item, index) => (
                <View
                  key={item.id}
                  style={[
                    styles.ballMargin,
                    index === 0 && styles.noPaddingLeft,
                  ]}>
                  {item.icon}
                </View>
              ))}
            </View>
          </View>
          <View style={styles.borderCenterLine} />
          <View style={styles.alignEnd}>
            <Text style={styles.whiteItemTime}>Time remaining</Text>
            <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
            <Text style={styles.whiteItemTime}>{randomId}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.flexRowBetween}>
          <Button title="Green" customStyle={styles.greenButton} />
          <Button title="Violet" customStyle={styles.violetButton} />
          <Button title="Red" customStyle={styles.redButton} />
        </View>

        <View style={styles.textBackground}>
          <Text>Hello</Text>
        </View>

        {/* Betting Selection Buttons */}
        <View style={styles.flexRowBetween}>
          {gameBattingData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveXTitle(item.title)}
              activeOpacity={0.7}
              style={[
                styles.bettingButton,
                {
                  backgroundColor:
                    activeXTitle === item.title ? '#8C67F6' : 'transparent',
                },
              ]}>
              <Text
                style={[
                  styles.bettingText,
                  {
                    fontSize: 12,
                    color: activeXTitle === item.title ? 'white' : '#67696F',
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.flexRowBetween}>
          {battingButton.map((item, index) => (
            <Button
              key={index}
              title={item.title}
              customStyle={styles.button}
            />
          ))}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        {battingTableButton.map((item, index) => (
          <Button
            key={index}
            onPress={() => setActiveTableBtn(item.title)}
            title={item.title}
            customStyle={[
              styles.button,
              {
                width: 'auto',
                backgroundColor:
                  activeTableBtn === item.title ? '#8C67F6' : '#272932',
                marginLeft: index !== 0 ? 10 : 0,
              },
            ]}
            textStyle={{fontSize: 14}}
          />
        ))}
      </View>

      {getTableData()}
    </View>
  );
};

export default WinGoGameSection;
