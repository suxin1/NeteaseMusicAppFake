import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "../../components";

export class Personal extends Component<any, any> {
  render() {
    const {navigation: {navigate, push}} = this.props;
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>“我的”主页面</Text>
        <Button text="发现" onPress={() => navigate("find")}/>
        <Button text="我的" onPress={() => {push("personal")}}/>
      </View>
    );
  }
}
