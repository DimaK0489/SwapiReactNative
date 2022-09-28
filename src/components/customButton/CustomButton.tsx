import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton = ({title, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
export default CustomButton;
