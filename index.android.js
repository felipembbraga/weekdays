// Import some code we need
import React, {AppRegistry, Component, StyleSheet, Text, View} from 'react-native';
import DayItem from './src/day-item';
var moment = require('moment');
moment.locale('pt-BR');

//Create a react component
class Weekdays extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  }

  days() {
    var dayItems = [];

    for(let i = 0; i < 7; i++) {
      let day = moment().add(i, 'days').format('dddd');
      dayItems.push(<DayItem day={day} daysUntil={i}/>)
    }

    return dayItems;
  }

}

// Style the react component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise when column
    alignItems: 'center' //Moves stuff width wise when column
  },
  textStyle: {}
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);
