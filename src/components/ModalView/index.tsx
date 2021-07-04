import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableHighlight
} from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
  children?: ReactNode;
}

export const ModalView = ({ children, ...props }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent
      statusBarTranslucent
      {...props}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {children}
        </View>
      </View>
    </Modal>
  );
}