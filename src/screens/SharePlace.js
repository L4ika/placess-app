import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView
} from "react-native";
import { connect } from 'react-redux';
import PlaceInput from '../components/PlaceInput/PlaceInput';

import { addPlace } from "../store/actions/index";

import HeadingText from "../components/UI/HeadingText/HeadingText";
import PickImage from '../components/PickImage/PickImage';


class SharePlace extends React.Component {

  state = {
    placeName: ""
  };

  constructor(props) {
    super(props);
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }
  };


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
         
        <HeadingText>Share a Place with us!</HeadingText>
        <PickImage />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button title="Share the Place!" onPress={this.placeAddedHandler} />
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlace);