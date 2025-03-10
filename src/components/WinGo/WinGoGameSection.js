/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import BigSmallModal from '../../modal/BigSmallModal';
import BettingOptions from '../../container/BettingOptions';

const WinGoGameSection = () => {
  const [selectedItem, setSelectedItem] = useState(winGoSecData[0].time);
  const [timeLeft, setTimeLeft] = useState(30);
  const [buttonTitle, setButtonTitle] = useState(null);
  const [randomId, setRandomId] = useState(generateInitialId());
  const [activeXTitle, setActiveXTitle] = useState(gameBattingData[0].title);
  const [activeTableBtn, setActiveTableBtn] = useState(
    battingTableButton[0].title,
  );
  const [openBigSmallModal, setOpenBigSmallModal] = useState(false);
  const [selectedBtnColor, setSelectedBtnColor] = useState(null);

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
          <BettingOptions
            options={gameBattingData}
            selectedOption={activeXTitle}
            onSelect={setActiveXTitle}
          />
        </View>

        <View style={styles.flexRowBetween}>
          {battingButton.map((item, index) => (
            <Button
              key={index}
              title={item.title}
              onPress={() => {
                setOpenBigSmallModal(true);
                setButtonTitle(item.title);
                setSelectedBtnColor(item.color);
              }}
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
      <BigSmallModal
        isVisible={openBigSmallModal}
        onClose={() => setOpenBigSmallModal(false)}
        buttonTitle={buttonTitle}
        selectedBtnColor={selectedBtnColor}
      />
    </View>
  );
};

export default WinGoGameSection;
