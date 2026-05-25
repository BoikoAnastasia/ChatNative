import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
// img
import ViewOpen from '../../assets/icons/view-open.svg';
import ViewClose from '../../assets/icons/view-close.svg';
// styles
import { COLORS } from '../../constants/colors';

type Props = {
  placeholder?: string;
};

export const PasswordInput = ({ placeholder = 'Поиск...' }: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [value, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.icon}
        onPress={() => setShowPassword(prev => !prev)}
      >
        {showPassword ? <ViewOpen /> : <ViewClose />}
      </Pressable>
      <TextInput
        placeholder={placeholder}
        style={[styles.textInput, {}]}
        value={value}
        onChangeText={text => onChangeText(text)}
        secureTextEntry={!showPassword}
      />
      <Text style={styles.helperText}>Должно быть не менее 8 символов.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: '40%',
    transform: [{ translateY: '-40%' }],
    zIndex: 1,
  },
  textInput: {
    width: '100%',
    padding: 10,
    paddingVertical: 20,
    minHeight: 56,
    paddingRight: 45,
    borderRadius: 16,
    backgroundColor: COLORS.primary.surface2,
  },
  helperText: {
    color: COLORS.text.text2,
  },
});
