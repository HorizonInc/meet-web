import React, { Component } from "react";

export default class GroupsCarousel extends Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}