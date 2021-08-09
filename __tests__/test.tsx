import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'react-native';

const Component = () => {
  const { control } = useForm();

  return (
    <Controller
      name="email"
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          testID="email"
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      defaultValue=""
    />
  );
};

describe('<Component >', () => {
  it('should succeed', () => {
    const { getByTestId } = render(<Component />);

    fireEvent(getByTestId('email'), 'onChangeText', 'email@test.com');
  });
});
