import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// hooks
import { useAuth } from '../hooks/useAuth';
// components
import { Field } from '../components/field/Field';
import { CustomInput } from '../components/input/CustomInput';
import { AppLayout } from '../layout/AppLayout';
import { PasswordInput } from '../components/input/PasswordInput';
import { CustomButton } from '../components/button/CustomButton';
// colors
import { COLORS } from '../constants/colors';
import { Controller, useForm } from 'react-hook-form';
import { SingUpForm, singUpSchema } from '../schemas/reg.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const SingUp = () => {
  const navigation = useNavigation<any>();

  const { setIsAuth } = useAuth();

  const onSubmit = (data: SingUpForm) => {
    console.log(data);
    setIsAuth(true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpForm>({
    resolver: zodResolver(singUpSchema),
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  });

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Регистрация</Text>
          <Text style={styles.subtitle}>
            Начните 30-дневную бесплатную пробную версию.
          </Text>
        </View>
        <View style={styles.form}>
          <Field title="Имя" required={true}>
            <Controller
              control={control}
              name="login"
              render={({ field: { value, onChange } }) => (
                <CustomInput
                  value={value}
                  onChangeText={onChange}
                  placeholder={'Введите ваше имя'}
                />
              )}
            />
            {errors.login && <Text>{errors.login.message}</Text>}
          </Field>
          <Field title="Почта" required={true}>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <CustomInput
                  value={value}
                  onChangeText={onChange}
                  placeholder={'Введите вашу почту'}
                />
              )}
            />
            {errors.email && <Text>{errors.email.message}</Text>}
          </Field>
          <Field title="Пароль" required={true}>
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange } }) => (
                <PasswordInput
                  value={value}
                  onChange={onChange}
                  placeholder={'Введите пароль'}
                />
              )}
            />
            <Text style={styles.helperText}>
              Должно быть не менее 8 символов.
            </Text>
            {errors.password && <Text>{errors.password.message}</Text>}
          </Field>
        </View>
        <CustomButton
          type="big"
          title="Начать"
          onPress={handleSubmit(onSubmit)}
        />
        <View style={styles.row}>
          <Text style={styles.bottomText}>Уже есть аккаунт?</Text>
          <Pressable onPress={() => navigation.navigate('SingIn')}>
            <Text style={[styles.link, styles.bottomText]}>Войдите</Text>
          </Pressable>
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
  helperText: {
    color: COLORS.text.text2,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  bottomText: {
    fontSize: 16,
  },
  link: {
    color: COLORS.text.linkDark,
  },
});
