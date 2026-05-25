import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Field } from '../components/field/Field';
import { CustomInput } from '../components/input/CustomInput';
import { AppLayout } from '../layout/AppLayout';
import { COLORS } from '../constants/colors';
import { PasswordInput } from '../components/input/PasswordInput';
import { CustomButton } from '../components/button/CustomButton';

export const SingUp = () => {
  const handleSubmit = () => {};

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>
            Начните 30-дневную бесплатную пробную версию.
          </Text>
        </View>
        <View style={styles.form}>
          <Field title="Имя" required={true}>
            <CustomInput placeholder={'Введите ваше имя'} />
          </Field>
          <Field title="Почта" required={true}>
            <CustomInput placeholder={'Введите вашу почту'} />
          </Field>
          <Field title="Пароль" required={true}>
            <PasswordInput placeholder={'Введите пароль'} />
          </Field>
        </View>
        <View>
          <CustomButton title="Начать" onPress={handleSubmit} />
        </View>
        <View>
          <Text>Уже есть аккаунт? Войдите</Text>
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
  top: {},
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
