/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Input from "./Input.js";

import Modal from "react-native-modal";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      notes: [

      ],
      titleVal: '',
      contentVal: '',
      displayNote: ''
    }

    this.renderShit = this.renderShit.bind(this);
    this.confirmNote = this.confirmNote.bind(this);
    this.showNote = this.showNote.bind(this);
  }

  showNote(index) {
    this.setState({displayNote: index});
  }

  confirmNote() {
    let title = this.state.titleVal;
    let content = this.state.contentVal;
    this.setState({modalVisible: false});
    this.setState({notes: this.state.notes.concat([{title: title, content: content}])});
  }

  renderShit() {
    let content = this.state.displayNote;
    let x = 0;
    return (
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <Modal
          isVisible={this.state.modalVisible}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: 500, width: 300, backgroundColor: 'white', borderRadius: 10}}>
              <Text style={{alignSelf: 'center', fontSize: 23, marginTop: 20, marginBottom: 20 }}>
                New Note
              </Text>
              <View style={{flex: 1}}>
                <Input
                  placeholder="Enter title"
                  value={this.state.titleVal}
                  textChange={text => this.setState({ titleVal: text })}
                  multiline
                  lines={1}
                >
                  Title:
                </Input>
              </View>
              <View style={{flex: 4}}>
                <Input
                  placeholder="Enter content"
                  value={this.state.contentVal}
                  textChange={text => this.setState({ contentVal: text })}
                  fuck
                  multiline
                >
                  Content:
                </Input>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.confirmNote} style={{flex: 1}}>
                  <Text style={{alignSelf: 'center'}}>Ok</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({modalVisible: false})} style={{flex: 1}}>
                  <Text style={{alignSelf: 'center'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{flex: 1}}>
          <View style={styles.newButton}>
            <TouchableOpacity onPress={() => this.setState({modalVisible: true})} style={{position: 'absolute', bottom: 0, paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: 'blue'}}>New</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={{flex: 1, backgroundColor: 'white', borderWidth: 2,}}>
              <FlatList
                data={this.state.notes}
                renderItem={ function({item}) {
                  x++;
                  return (
                    <TouchableOpacity onPress={() => {this.setState({displayNote: item.content}); console.log(this.state.displayNote)}} style={{margin: 10, borderWidth: 2}}>
                      <Text style={{fontSize: 20, textAlign: 'center'}}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                }.bind(this)
                }
                keyExtractor={(item, x) => x.toString()}
              />
            </View>
            <View style={{flex: 2, backgroundColor: 'white', borderWidth: 2}}>
              <Text>
                {content}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }



  render() {
    return (
        this.renderShit()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  newButton: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2
  }
});
