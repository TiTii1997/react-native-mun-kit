import { Skeleton } from '@rneui/themed';
import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  BasicInput,
  IconInput,
  SvgIcon,
  atomicStyles,
} from 'react-native-mun-kit';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.title}>Input</Text>
      <View>
        <BasicInput placeholder="Basic" />
        <IconInput
          placeholder="Icon input"
          rightIcon={
            <TouchableOpacity>
              <SvgIcon
                component={require('../assets/icons/icon.svg')}
                solid={true}
                fill="#FF0000"
              />
            </TouchableOpacity>
          }
        />
      </View>
      <Text style={styles.title}>Skeleton</Text>
      <View style={[atomicStyles.flexRow]}>
        <Skeleton width={120} height={40} style={{ marginRight: 8 }} />
        <Skeleton circle width={40} height={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
