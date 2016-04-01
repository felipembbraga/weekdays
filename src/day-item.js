// Import some code we need
import React, {AppRegistry, Component, Text} from 'react-native';

// Create our component
class DayItem extends Component {
  render() {
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  }

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(), // Need to be a string
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()}
  }

  color() {
    let opacity = 1 / (this.props.daysUntil + 1);
    return 'rgba(0, 0, 0, ' + opacity + ')';
  }

  fontWeight() {
    var weight = 7 - this.props.daysUntil;
    return (weight * 100).toString();
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
}

// Make this code available elsewhere
module.exports = DayItem;
