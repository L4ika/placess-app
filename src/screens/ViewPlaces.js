import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../components/PlaceList/PlaceList';


class ViewPlaces extends React.Component {


  onItemSelectedHandler = key => {
        
    const selPlace = this.props.places.find(place => {
        return place.key === key;
    });

    this.props.navigation.navigate(  'Details' , { selectedPlace: selPlace, title: selPlace.name })
  }

render() {
      return (
        <View>
          <PlaceList places={this.props.places} onItemSelected={this.onItemSelectedHandler}/>
        </View>
      );
  }

}




const mapStateToProps = state => {
  return {
     places: state.places.places
  };
};


export default connect(mapStateToProps)(ViewPlaces);