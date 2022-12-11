import {
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
} from "react-native";
import axios from "axios";
import React, { Component } from "react";
import ıtem from "./ıtem";

//component içinde çalıştım
//worked in component
export default class App extends Component {
  /*bir yapı oluşturdum ki burada içinde veri atayım yada güncelleyebileyim*/
  /*I created a structure so that I can assign or update data in it*/
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  /* ComponentDidMount() uzak depolar ile işlem yapma durumunda kullanılır.Burada veriyi çektim */
  /* ComponentDidMount() is used in case of operations with remote repositories. Here I pulled the data */
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  fetchUser(){
    const url="https://api.stackexchange.com/2.2/users"
  }

  _renderItem = ({ item }) => {
    return <ıtem item={item}/>
  };

  render() {

    const { data } = this.state;
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this._renderItem}
          /* Veri olmadığında burası çalışmaya başlayacak  */
          ListEmptyComponent={()=><View><Text>Veri Bulunmuyor</Text></View>}
          ListFooterComponent={()=><View><Text>FlatList sonu</Text></View>}
          ListFooterComponentStyle={{backgroundColor:"red",padding:10}}
          ListHeaderComponent={()=><View><Text>FlatList ilk alanı</Text></View>}
          ListHeaderComponentStyle={{backgroundColor:"blue",padding:10}}
        />
      </View>
    );
  }
}
