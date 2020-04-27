
import React, { Component } from 'react';
import {StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {Callout} from 'react-native-maps';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        countryname:'',totalCases: '',totalRecovered: '',totalDeaths: '',
              totalCNCases: '',totalCNRecovered: '',totalCNDeaths: '',
              totalCACases: '',totalCARecovered: '',totalCADeaths: '',
              jsondata:[]
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then(responseJson => {

        this.setState({
          TotalConfirmedCHINA: responseJson['Countries'][45]['TotalConfirmed'],
          TotalDeathsCHINA: responseJson['Countries'][45]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedUS: responseJson['Countries'][236]['TotalConfirmed'],
          TotalDeathsUS: responseJson['Countries'][236]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedMEX: responseJson['Countries'][142]['TotalConfirmed'],
          TotalDeathsMEX: responseJson['Countries'][142]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedUK: responseJson['Countries'][235]['TotalConfirmed'],
          TotalDeathsUK: responseJson['Countries'][235]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedGermany: responseJson['Countries'][81]['TotalConfirmed'],
          TotalDeathsGermany: responseJson['Countries'][81]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedItaly: responseJson['Countries'][108]['TotalConfirmed'],
          TotalDeathsItaly: responseJson['Countries'][108]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedCanada: responseJson['Countries'][39]['TotalConfirmed'],
          TotalDeathsCanada: responseJson['Countries'][39]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedAU: responseJson['Countries'][14]['TotalConfirmed'],
          TotalDeathsAU: responseJson['Countries'][14]['TotalDeaths'],
        });
      console.log(this.state.jsondata);
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>
        <MapView style={styles.mapStyle}
          Region={{
            latitude: 40,
            longitude: 116,
          }}
        >
           <MapView.Marker
            coordinate={{latitude: 19,
            longitude: -99}}>
              <Callout>
              <Text style = {styles.title}>  Country: Mexico</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedMEX}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsMEX}</Text>
              </Callout>
            </MapView.Marker>

           <MapView.Marker
            coordinate={{latitude: 45.4215,
            longitude:-75.6972}}>
              <Callout>
              <Text style = {styles.title}>  Country: Canada</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedCanada}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsCanada}</Text>
              </Callout>
            </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude: 38.9072,
            longitude: -77.0369}}>
              <Callout>
              <Text style = {styles.title}>  Country: United States</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedUS}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsUS}</Text>

              </Callout>
          </MapView.Marker>

         <MapView.Marker
            coordinate={{latitude:41.8719,
            longitude: 12.5674}}>
              <Callout>
              <Text style = {styles.title}>  Country: Italy</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedItaly}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsItaly}</Text>

              </Callout>
          </MapView.Marker>

           <MapView.Marker
              coordinate={{latitude:  51.1657,
              longitude:  10.4515}}>
                <Callout>
                <Text style = {styles.title}>  Country: Germany</Text>
                <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedGermany}</Text>
                <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsGermany}</Text>

                </Callout>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: 51,
            longitude: 0}}>
              <Callout>
              <Text style = {styles.title}>  Country: UK</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedUK}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsUS}</Text>
              </Callout>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: -25,
            longitude: 133}}>
              <Callout>
              <Text style = {styles.title}>  Country: Australia</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedAU}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsAU}</Text>
              </Callout>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: 40,
            longitude: 116}}>
              <Callout>
              <Text style = {styles.title}>  Country: China</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedCHINA}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsCHINA}</Text>
              </Callout>
            </MapView.Marker>

      </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
   title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center'
    },
  text:{
    color: 'black',
    marginTop: 20,
    padding: 5,
    fontSize: 14,

  }
});