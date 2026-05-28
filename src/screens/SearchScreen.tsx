import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// components
import { CustomInput } from '../components/input/CustomInput';
import { AppLayout } from '../layout/AppLayout';
// img
import RecentlyViewedIcon from '../assets/icons/recently-viewed.svg';
import EmailIcon from '../assets/icons/email.svg';
// styles
import { COLORS } from '../constants/colors';
import { Avatar } from '../components/avatar/Avatar';

const contactsList = [
  'Ava Williams',
  'Rodrigo Martinez',
  'Jean Chevraux',
  'Daniel Hopkins',
];
const messagesList = [
  'Data Engineering is Not Software Engineering',
  'Launch of our new features',
  'Check out this new briefs',
  'Creative digital design',
  'Closing soon',
  'New job opportunities',
];

export const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredContacts, setFilteredContacts] = useState<string[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<string[]>([]);

  const filterSearch = (text: string) => {
    setSearch(text);

    setFilteredContacts(
      contactsList.filter(item =>
        item.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
      ),
    );
    setFilteredMessages(
      messagesList.filter(item =>
        item.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
      ),
    );
  };

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <AppLayout>
      <View style={styles.container}>
        <CustomInput
          placeholder="Введите команду или выполните поиск здесь..."
          value={search}
          onChangeText={filterSearch}
          isSearch={true}
          type={'white'}
        />
        {search.length === 0 ? (
          <View style={styles.list}>
            <View>
              <View style={styles.item}>
                <RecentlyViewedIcon />
                <Text style={styles.latest}>Sam Cook</Text>
              </View>
              <View style={styles.item}>
                <RecentlyViewedIcon />
                <Text style={styles.latest}>Invoice 1024</Text>
              </View>
            </View>
            <View style={styles.contacts}>
              <Text style={styles.title}>Контакты</Text>
              {contactsList.map((item, index) => (
                <View key={index} style={styles.item}>
                  <Avatar type={'small'} />
                  <Text style={styles.textList}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={styles.messages}>
              <Text style={styles.title}>Сообщения</Text>
              {messagesList.map((item, index) => (
                <View key={index} style={styles.item}>
                  <EmailIcon />
                  <Text style={styles.textList} numberOfLines={1}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ) : search.length > 0 ? (
          <View style={styles.list}>
            <View style={styles.contacts}>
              <Text style={styles.title}>Контакты</Text>
              {filteredContacts.map((item, index) => (
                <View key={index} style={styles.item}>
                  <Avatar type={'small'} />
                  <Text style={styles.textList}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={styles.messages}>
              <Text style={styles.title}>Сообщения</Text>
              {filteredMessages.map((item, index) => (
                <View key={index} style={styles.item}>
                  <EmailIcon />
                  <Text style={styles.textList} numberOfLines={1}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.empty}>
            <Text>Ничего не найдено</Text>
            <Text>
              Мы не нашли ни одной команды, соответствующей тому, что вы искали,
              попробуйте еще раз.
            </Text>
            <Pressable onPress={clearSearch}>
              <Text>Очистить поиск</Text>
            </Pressable>
          </View>
        )}
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    gap: 16,
  },
  empty: {},
  item: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 12,
  },
  title: {
    fontSize: 15,
    color: COLORS.text.text2,
    textTransform: 'uppercase',
  },
  textList: {
    fontSize: 17,
  },
  latest: {
    fontSize: 14,
  },
  contacts: {},
  messages: {},
});
