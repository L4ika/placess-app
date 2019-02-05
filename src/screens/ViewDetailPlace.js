import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from "../store/actions/index";

class DetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Details')
    };
  }

  componentDidMount() {
   
  }

  placeDeletedHandler = () => {

    const { navigation } = this.props;
    const select = navigation.getParam('selectedPlace', 'NO-ID');

    this.props.onDeletePlace(select.key);
    navigation.pop();
  }

  render() {

   

    const { navigation } = this.props;
    const select = navigation.getParam('selectedPlace', 'NO-ID');

    return (
      <View style={styles.container}>
        <View>
          <Image source={select.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{select.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(null, mapDispatchToProps)(DetailScreen);