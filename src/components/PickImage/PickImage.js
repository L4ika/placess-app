import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

import ImagePicker from "react-native-image-picker";
import CameraRollPicker from 'react-native-camera-roll-picker';
import imagePlaceholder from "../../assets/beautiful-place.jpg";

class PickImage extends Component {
  
  constructor(props) {
    super(props);
  }

  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick an image of this place"},
        (res) => {
          if (res.error) {
            alert('Error has occurred... Try again!', res.error);
          } else {
            this.setState({
              pickedImage: { uri: res.uri }
            });
            this.props.onImagePicked({uri: res.uri, base64: res.data});
          }
      });
  }

  getSelectedImages(images, current) {

    this.setState({
      pickedImage: current
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler} />
          {/* <CameraRollPicker
          groupTypes='SavedPhotos'
          maximum={1}
          selected={this.state.pickedImage}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages} /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
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

export default PickImage;
