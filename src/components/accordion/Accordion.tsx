import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
// img
import BgImg from '../../assets/img/chatBgImg.png';
import FolderIcon from '../../assets/icons/folder.svg';
import ArrowIcon from '../../assets/icons/arrow-down.svg';
// styles
import { COLORS } from '../../constants/colors';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68dafc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0wf-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '3ac68dafc-c605-48d3-a4f8-fb=d91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0wf-3da1-471f-bd96-14557=1e29d72',
    title: 'Third Item',
  },
];

type ItemProps = { title: string; message: string; isGroup: boolean };

const Item = ({ title, message, isGroup }: ItemProps) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable style={styles.item} onPress={() => navigation.navigate('Chat')}>
      {isGroup ? (
        <View style={styles.image}>
          <FolderIcon />
        </View>
      ) : (
        <Image source={BgImg} style={styles.imageUser} />
      )}
      <View style={styles.column}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {message}
        </Text>
      </View>
    </Pressable>
  );
};

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const Accordion = ({
  isGroup = false,
  title,
}: {
  isGroup?: boolean;
  title: string;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleAccrodion}>
          <Pressable
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setOpen(prev => !prev);
            }}
          >
            <ArrowIcon
              style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}
            />
          </Pressable>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Pressable>
          <Text>+</Text>
        </Pressable>
      </View>
      {open && (
        <FlatList
          style={styles.list}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              message="fsdfsdffsdfsdffsdfsdffsfsdffsdfsdffsdfsdf"
              isGroup={isGroup}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
    paddingHorizontal: 12,
    fontSize: 18,
  },
  titleAccrodion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  list: {},
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
  },
  titleText: {
    fontSize: 14,
  },
  text: {
    fontSize: 12,
  },
  image: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.light.surface4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUser: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
});
