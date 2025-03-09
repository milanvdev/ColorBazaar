/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  battingButton,
  battingTableButton,
  gameBattingData,
  pullGameBallsData,
  winGoSecData,
} from '../../data/data';
import {generateInitialId, incrementLastPart} from '../../utils/helper';
import Button from '../../common/Button';
import styles from './Wingo.style';
import GameHistoryTable from './GameHistoryTable';
import ChartTable from './ChartTable';
import MyHistoryTable from './MyHistoryTable';
import TimerClock from '../../assets/svg/timerClock.svg';

const BettingButton = memo(({title, activeXTitle, onPress}) => (
  <TouchableOpacity
    onPress={() => onPress(title)}
    activeOpacity={0.7}
    style={[
      styles.bettingButton,
      activeXTitle === title && styles.activeBettingButton,
    ]}>
    <Text
      style={[
        styles.bettingText,
        {
          color: activeXTitle === title ? 'white' : '#67696F',
        },
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
));

const WinGoGameSection = () => {
  const [selectedItem, setSelectedItem] = useState(winGoSecData[0].time);
  const [timeLeft, setTimeLeft] = useState(30);
  const [randomId, setRandomId] = useState(generateInitialId());
  const [activeXTitle, setActiveXTitle] = useState(gameBattingData[0].title);
  const [activeTableBtn, setActiveTableBtn] = useState(
    battingTableButton[0].title,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 1) {
          setRandomId(incrementLastPart(randomId));
          return 30;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds =>
    `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  const getTableData = useCallback(() => {
    switch (activeTableBtn) {
      case 'Chart':
        return <ChartTable />;
      case 'My history':
        return <MyHistoryTable />;
      default:
        return <GameHistoryTable />;
    }
  }, [activeTableBtn]);

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
            <TimerClock />
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
          {['Green', 'Violet', 'Red'].map((color, index) => (
            <Button
              key={index}
              title={color}
              customStyle={styles[`${color.toLowerCase()}Button`]}
            />
          ))}
        </View>

        <View style={styles.textBackground}>
          <Text>Hello</Text>
        </View>

        {/* Betting Selection Buttons */}
        <View style={styles.flexRowBetween}>
          {gameBattingData.map((item, index) => (
            <BettingButton
              key={index}
              title={item.title}
              activeXTitle={activeXTitle}
              onPress={setActiveXTitle}
            />
          ))}
        </View>

        <View style={styles.flexRowBetween}>
          {battingButton.map((item, index) => (
            <Button
              key={index}
              title={item.title}
              customStyle={[styles.button, {backgroundColor: item.color}]}
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
              index !== 0 && styles.buttonMargin,
              activeTableBtn === item.title && styles.activeTableButton,
              {
                width: 'auto',
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
