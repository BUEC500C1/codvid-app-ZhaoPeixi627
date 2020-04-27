import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default
class App extends React.Component {

    constructor(props){
    super(props);
    this.state = {
      TotalConfirmed: '',
      TotalDeaths: '',
      Date: '',
    };
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/total/country/united-states', {method: 'GET'})
      .then((response) => response.json())
      .then(json => {
        this.setState({

          TotalConfirmed: json[json.length-1]['Confirmed'],
          TotalRecovered: json[json.length-1]['Recovered'],
          TotalDeaths: json[json.length-1]['Deaths'],
          LatestConfirned: parseInt(json[json.length-1]['Confirmed']) - parseInt(json[json.length-2]['Confirmed']),
          LatestRecovered: parseInt(json[json.length-1]['Recovered']) - parseInt(json[json.length-2]['Recovered']),
          LatestDeaths: parseInt(json[json.length-1]['Deaths']) - parseInt(json[json.length-2]['Deaths']),
          Date: json[json.length-1]['Date'],
        },
        function(){}
      );
      console.log(this.state.jsondata);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render(){
    return(
      <View style={style.container}>
        <Text style = {style.title}> CODVID19 In USA  </Text>
        <Text style = {style.datetext}> Date: {this.state.Date}</Text>
        <Text style = {style.text1}> Total Cases: </Text>
        <Text style = {style.text}> Confirmed: {this.state.TotalConfirmed}</Text>
        <Text style = {style.text}> Death: {this.state.TotalDeaths}</Text>
        <Text style = {style.text}> Recovered: {this.state.TotalRecovered}</Text>
        <Text style = {style.text1}> Latest Cases: </Text>
        <Text style = {style.text}> Confirmed: {this.state.LatestConfirned}</Text>
        <Text style = {style.text}> Death: {this.state.LatestDeaths}</Text>
        <Text style = {style.text}> Recovered: {this.state.LatestRecovered}</Text>
        </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor:'white',
    paddingBottom: 400,

  },

  title:{
    color: 'red',
    marginTop: 10,
    fontSize: 25,
    textAlign: "center",
  },

  text: {
    color: 'red',
    marginLeft: 25,
    padding: 10,
    fontSize: 15,
  },

  text1: {
    color: 'red',
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
  },

  datetext: {
    color: 'red',
    marginTop: 10,
    fontSize: 15,
    textAlign: "center",
  },

});