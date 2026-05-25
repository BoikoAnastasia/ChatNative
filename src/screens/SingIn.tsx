import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// components
import { Field } from '../components/field/Field';
import { CustomInput } from '../components/input/CustomInput';
import { AppLayout } from '../layout/AppLayout';
import { PasswordInput } from '../components/input/PasswordInput';
import { CustomButton } from '../components/button/CustomButton';
// styles
import { COLORS } from '../constants/colors';

export const SingIn = () => {
  const handleSubmit = () => {};

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Вход</Text>
          <Text style={styles.subtitle}>Добро пожаловать!</Text>
          <Text style={styles.subtitle}>Пожалуйста, введите свои данные.</Text>
        </View>
        <View style={styles.form}>
          <Field title="Почта" required={true}>
            <CustomInput placeholder={'Введите вашу почту'} />
          </Field>
          <Field title="Пароль" required={true}>
            <PasswordInput placeholder={'Введите пароль'} />
          </Field>
        </View>
        <CustomButton type="big" title="Войти" onPress={handleSubmit} />
        <View>
          <Text>Нет аккаунта? Зарегистрируйтесь</Text>
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    flexDirection: 'column',
    gap: 24,
  },
  top: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.text.text2,
  },
  form: {
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
});
