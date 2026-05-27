import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
// zod
import { zodResolver } from '@hookform/resolvers/zod';
// schemas
import { SingInForm, singInSchema } from '../schemas/auth.schema';
// hooks
import { useAuth } from '../hooks/useAuth';
// components
import { AppLayout } from '../layout/AppLayout';
import { Field } from '../components/field/Field';
import { CustomInput } from '../components/input/CustomInput';
import { PasswordInput } from '../components/input/PasswordInput';
import { CustomButton } from '../components/button/CustomButton';
// styles
import { COLORS } from '../constants/colors';

export const SingIn = () => {
  const navigation = useNavigation<any>();

  const { setIsAuth } = useAuth();

  const onSubmit = (data: SingInForm) => {
    console.log(data);
    setIsAuth(true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SingInForm>({
    resolver: zodResolver(singInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

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
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
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
              render={({ field: { onChange, value } }) => (
                <PasswordInput
                  value={value}
                  onChange={onChange}
                  placeholder={'Введите пароль'}
                />
              )}
            />
            {errors.password && <Text>{errors.password.message}</Text>}
          </Field>
        </View>
        <CustomButton
          type="big"
          title="Войти"
          onPress={handleSubmit(onSubmit)}
        />
        <View style={styles.row}>
          <Text style={styles.bottomText}>Нет аккаунта? </Text>
          <Pressable onPress={() => navigation.navigate('SingUp')}>
            <Text style={[styles.link, styles.bottomText]}>
              Зарегистрируйтесь
            </Text>
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
