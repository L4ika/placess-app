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
    controls: {
      placeName: {
        value: "",
        valid: true,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      image: {
        value: null,
        valid: false
      }
    }
  };

  constructor(props) {
    super(props);
  }

  placeNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: true,
            touched: true
          }
        }
      };
    });
  };

  placeAddedHandler = () => {
    if (this.state.controls.placeName.value.trim() !== "") {
      this.props.onAddPlace(
        this.state.controls.placeName.value,
        this.state.controls.image.value
      );
    }
  };

  imagePickedHandler = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      };
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
         
        <HeadingText>Share a Place with us!</HeadingText>
        <PickImage onImagePicked={this.imagePickedHandler}/>
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button title="Share the Place!" onPress={this.placeAddedHandler} 
                disabled={
                !this.state.controls.placeName.valid ||
                !this.state.controls.image.valid}
            />
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
    onAddPlace: (placeName, image) => dispatch(addPlace(placeName, image))
  };
};

export default connect(null, mapDispatchToProps)(SharePlace);