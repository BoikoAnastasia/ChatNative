import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
// img
import ClipIcon from '../../assets/icons/paper-clip.svg';
import SmileIcon from '../../assets/icons/smile.svg';
import EnterIcon from '../../assets/icons/enter.svg';
// style
import { COLORS } from '../../constants/colors';

type Props = {
  valueMessage: string;
  setValueMessage: (text: string) => void;
  handleAddMessage: () => void;
};

export const InputMessage = ({
  valueMessage,
  setValueMessage,
  handleAddMessage,
}: Props) => {
  return (
    <View>
      <Pressable style={styles.clipBtn}>
        <ClipIcon />
      </Pressable>
      <TextInput
        placeholder="Напишите сюда..."
        style={styles.textInput}
        value={valueMessage}
        onChangeText={text => setValueMessage(text)}
      />
      <View style={styles.buttonsRight}>
        <Pressable style={styles.smileBtn}>
          <SmileIcon />
        </Pressable>
        <Pressable style={styles.pushMessageBtn} onPress={handleAddMessage}>
          <EnterIcon />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  clipBtn: {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: [{ translateY: '-50%' }],
    zIndex: 1,
  },
  buttonsRight: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: '-50%' }],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    zIndex: 1,
  },
  smileBtn: {},
  pushMessageBtn: {
    padding: 6,
    backgroundColor: COLORS.button.buttonPrimary,
    borderRadius: 12,
  },
  textInput: {
    width: '100%',
    padding: 10,
    paddingLeft: 45,
    paddingRight: 65,
    paddingVertical: 20,
    minHeight: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: 'transparent',
  },
});
