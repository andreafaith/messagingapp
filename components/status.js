import React from 'react';
import { Constants, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class Status extends React.Component {
  state = {
    info: 'none',
  };

  componentDidMount() {
    // Get the initial network connection status
    NetInfo.fetch().then((status) => {
      this.updateStatus(status.isConnected);
    });

    // Add an event listener for network changes
    this.subscription = NetInfo.addEventListener((status) => {
      this.updateStatus(status.isConnected);
    });
  }

  componentWillUnmount() {
    // Remove the event listener when the component unmounts
    this.subscription && this.subscription();
  }

  updateStatus(isConnected) {
    this.setState({ info: isConnected ? 'connected' : 'none' });
  }

  render() {
    const { info } = this.state;
    const isConnected = info !== 'none';
    const backgroundColor = isConnected ? 'white' : 'red';

    if (Platform.OS === 'ios') {
      return (
        <View style={[styles.status, { backgroundColor }]}>
          <StatusBar
            backgroundColor={backgroundColor}
            barStyle={isConnected ? 'dark-content' : 'light-content'}
            animated={false}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.messageContainer} pointerEvents="none">
          <StatusBar
            backgroundColor={backgroundColor}
            barStyle={isConnected ? 'dark-content' : 'light-content'}
            animated={false}
          />
          {!isConnected && (
            <View style={styles.bubble}>
              <Text style={styles.text}>No network connection</Text>
            </View>
          )}
        </View>
      );
    }
  }
}

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight,
  },
  messageContainer: {
    zIndex: 1,
    position: 'absolute',
    top: statusHeight + 20,
    right: 0,
    left: 0,
    height: 80,
    alignItems: 'center',
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'red',s
  },
  text: {
    color: 'white',
  },
});