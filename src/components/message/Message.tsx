import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// components
import { Avatar } from '../avatar/Avatar';
// style
import { COLORS } from '../../constants/colors';
import { IMessage } from '../../types/types';

type Props = {
  item: IMessage;
};

export const Message = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      {!item.isMyMessage && <Avatar isOnline={true} />}
      <View style={styles.column}>
        <View style={styles.topContainer}>
          {item.isMyMessage ? (
            <Text style={styles.userNameMessage}>Вы</Text>
          ) : (
            <Text style={styles.userNameMessage}>Ava Williams</Text>
          )}
          <Text style={styles.dateMessage}>{item.time}</Text>
        </View>
        <View style={item.isMyMessage ? styles.myMessage : styles.message}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    gap: 6,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userNameMessage: {
    fontSize: 14,
  },
  dateMessage: {
    fontSize: 12,
    color: COLORS.text.text2,
  },
  message: {
    backgroundColor: COLORS.primary.surface2,
    padding: 16,
    paddingTop: 12,
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  myMessage: {
    backgroundColor: COLORS.light.surface3,
    padding: 16,
    paddingTop: 12,
    borderBottomRightRadius: 24,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
  },
  messageText: {
    fontSize: 14,
  },
});
