import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "../../components";
import {StatusBar} from "expo-status-bar";

export class Find extends Component<any, any> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>测试2</Text>
        <Button text="我的" onPress={() => {navigation.push("personal")}}/>
        <StatusBar style="auto"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
