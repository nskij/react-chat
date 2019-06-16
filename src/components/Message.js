import React from "react";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
};

// const style = {margintop: -5};

export default class Message extends React.Component {
  render() {
    return (
      <div className="Message">
      <List>
        <ListItem disabled="true" style={styles.wrapper}>
          <Avatar className="" src={this.props.message.profile_image} />
          <span>@{this.props.message.user_name}</span>
          <Chip style={styles.chip} >
            {this.props.message.text}
          </Chip>
        </ListItem>
      </List>
      </div>
    );
  }
}