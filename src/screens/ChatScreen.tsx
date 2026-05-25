import { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// components
import { AppLayout } from '../layout/AppLayout';
import { AppHeader } from '../components/header/AppHeader';
import { CustomButton } from '../components/button/CustomButton';
import { NavMenu } from '../components/nav/NavMenu';
import { InputMessage } from '../components/input/InputMessage';
import { Message } from '../components/message/Message';
// utils
import { parseDate } from './parseDate';
// img
import ArrowReturnIcon from '../assets/icons/arrow-left.svg';
import EllipsisIcon from '../assets/icons/ellipsis.svg';
// styles
import { COLORS } from '../constants/colors';
// types
import { IMessage } from '../types/types';

export const ChatScreen = () => {
  const navigation = useNavigation<any>();

  const [openMenu, setOpenMenu] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const [valueMessage, setValueMessage] = useState('');

  const handleAddMessage = () => {
    if (!valueMessage) return;

    const message = {
      text: valueMessage,
      time: parseDate(new Date()),
      isMyMessage: true,
    };
    setMessages(prev => [...prev, message]);
  };

  return (
    <AppLayout>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <AppHeader
          children={
            <View style={styles.headerChilren}>
              <CustomButton
                svg={ArrowReturnIcon}
                onPress={() => navigation.navigate('Home')}
              />
              <CustomButton title="S" onPress={() => console.log('S')} />
              <View>
                <Text style={styles.textUser}>Ava Williams</Text>
                <Text style={styles.textPhone}>+32658029525</Text>
              </View>
            </View>
          }
          right={
            <>
              <CustomButton
                svg={EllipsisIcon}
                onPress={() => setOpenMenu(prev => !prev)}
              />
              <NavMenu visible={openMenu} />
            </>
          }
        />
        <FlatList<IMessage>
          style={styles.listMessages}
          contentContainerStyle={styles.content}
          data={messages}
          renderItem={({ item }) => <Message item={item} />}
          keyExtractor={item => item.time}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.input}>
          <InputMessage
            valueMessage={valueMessage}
            setValueMessage={setValueMessage}
            handleAddMessage={handleAddMessage}
          />
        </View>
      </KeyboardAvoidingView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  listMessages: { flexDirection: 'column', gap: 16 },
  headerChilren: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  content: {
    gap: 16,
    paddingHorizontal: 4,
    paddingBottom: 20,
  },
  textUser: {
    color: COLORS.text.text1,
    fontSize: 19,
  },
  textPhone: {
    fontSize: 17,
    color: COLORS.text.text2,
  },
  input: {
    backgroundColor: '#fff',
  },
});
