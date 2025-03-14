import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  battingButton,
  battingTableButton,
  gameBattingData,
  pullGameBallsData,
  winGoSecData,
} from '../../data/data';
import Button from '../../common/Button';
import styles from './Wingo.style';
import GameHistoryTable from './GameHistoryTable';
import ChartTable from './ChartTable';
import MyHistoryTable from './MyHistoryTable';
import TimerClock from '../../assets/svg/timerClock.svg';
import BigSmallModal from '../../modal/BigSmallModal';
import BettingOptions from '../../container/BettingOptions';
import {decrementTime} from '../../redux/slices/timerSlice';
import {useDispatch, useSelector} from 'react-redux';
import {formatTime} from '../../utils/helper';
import {reset} from '../../redux/slices/counterSlice';

const WinGoGameSection = () => {
  const dispatch = useDispatch();

  // Get Redux state
  const timeLeft = useSelector(state => state.timer.timeLeft);
  const randomId = useSelector(state => state.timer.randomId);

  const [selectedItem, setSelectedItem] = useState(winGoSecData[0].time);
  const [buttonTitle, setButtonTitle] = useState(null);
  const [activeTableBtn, setActiveTableBtn] = useState(
    battingTableButton[0].title,
  );
  const [openBigSmallModal, setOpenBigSmallModal] = useState(false);
  const [selectedBtnColor, setSelectedBtnColor] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

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

  const onClose = useCallback(() => {
    setOpenBigSmallModal(false);
    dispatch(reset());
  }, [dispatch]);

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
        <BettingOptions
          options={gameBattingData}
          containerStyle={{marginVertical: 10}}
        />

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

      <View style={styles.battingRow}>
        {battingTableButton.map((item, index) => (
          <Button
            key={index}
            onPress={() => setActiveTableBtn(item.title)}
            title={item.title}
            customStyle={[
              styles.tableBtn,
              activeTableBtn === item.title && styles.activeTableButton,
            ]}
            textStyle={styles.battingText}
          />
        ))}
      </View>

      {getTableData()}
      <BigSmallModal
        isVisible={openBigSmallModal}
        onClose={onClose}
        buttonTitle={buttonTitle}
        selectedBtnColor={selectedBtnColor}
      />
    </View>
  );
};

export default WinGoGameSection;
