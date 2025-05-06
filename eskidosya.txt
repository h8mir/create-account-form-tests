import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const BookOrderApp = () => {
  const [order1, setOrder1] = useState(1);
  const [order2, setOrder2] = useState(1);
  const [order3, setOrder3] = useState(1);
  const [order4, setOrder4] = useState(1);
  const [order5, setOrder5] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.bookCard}>
          <Image style={styles.image } source={require("./assets/book1.jpg")} ></Image>
          <View>
            <Text style={styles.title}>bla bla</Text>
            <Text style={styles.author}>John</Text>
            <Text style={styles.price}>USD 50</Text>
            <View style={styles.orderControls}>
              <TouchableOpacity onPress={() => setOrder1(order1>0 ? order1 - 1:0)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.orderCount}>{order1}</Text>
              <TouchableOpacity onPress={() => setOrder1(order1 + 1)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.bookCard}>
          <Image style={styles.image } source={require("./assets/book2.jpg")} ></Image>
          <View>
            <Text style={styles.title}>The Pragmatic Programmer</Text>
            <Text style={styles.author}>Bill</Text>
            <Text style={styles.price}>USD 50</Text>
            <View style={styles.orderControls}>
              <TouchableOpacity onPress={() => setOrder2(order2>0 ? order2 - 1:0)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.orderCount}>{order2}</Text>
              <TouchableOpacity onPress={() => setOrder2(order2 + 1)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.bookCard}>
          <Image style={styles.image } source={require("./assets/book3.jpg")} ></Image>
          <View>
            <Text style={styles.title}>Programming for Beginner</Text>
            <Text style={styles.author}>Alexander</Text>
            <Text style={styles.price}>USD 50</Text>
            <View style={styles.orderControls}>
              <TouchableOpacity onPress={() => setOrder3(order3>0 ? order3 - 1:0)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.orderCount}>{order3}</Text>
              <TouchableOpacity onPress={() => setOrder3(order3 + 1)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.bookCard}>
          <Image style={styles.image } source={require("./assets/book4.jpg")} ></Image>
          <View>
            <Text style={styles.title}>Computer Programming</Text>
            <Text style={styles.author}>Mike</Text>
            <Text style={styles.price}>USD 50</Text>
            <View style={styles.orderControls}>
              <TouchableOpacity onPress={() => setOrder4(order4>0 ? order4 - 1:0)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.orderCount}>{order4}</Text>
              <TouchableOpacity onPress={() => setOrder4(order4 + 1)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={styles.bookCard}>
          <Image style={styles.image } source={require("./assets/book5.jpg")} ></Image>
          <View>
            <Text style={styles.title}>Coding for Kid Python</Text>
            <Text style={styles.author}>Charles</Text>
            <Text style={styles.price}>USD 50</Text>
            <View style={styles.orderControls}>
              <TouchableOpacity onPress={() => setOrder5(order5>0 ? order5 - 1:0)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.orderCount}>{order5}</Text>
              <TouchableOpacity onPress={() => setOrder5(order5 + 1)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  bookCard: {
    flexDirection:"row",
    backgroundColor: '#FAEBD7',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  image:{
    width:140,
    height:140,
    marginRight:20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    color: 'blue',
  },
  orderControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'orangered',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 10,
  },
  orderCount: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  total:{
    fontSize:20,
    marginBottom:20
  }
});

export default BookOrderApp;