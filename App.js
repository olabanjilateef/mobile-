// import {  StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
//     const[name, setName] = useState('banji')
//     const [phone, setPhone] =useState(+2349071727838)

    

//   return (
//     <View  style={styles.contanier2}>
//       {/* <Text>my name is {name} </Text>
//       <Button onPress={updateName} title='updatename'/> */}
//       <Text> Your name</Text>
//       <TextInput 
//         style={styles.input} 
//         placeholder='enter your name' 
//         onChangeText={(value) => setName(value) }/>

//       <Text> Your phonenumber</Text>
//       <TextInput 
//         style={styles.input} 
//         placeholder='enter your phonenumber' 
//         onChangeText={(value) => setPhone(value) } 
//         keyboardType='numeric'/>
//       <Text>My name is {name}, my phonenumber {phone}</Text>
//       <TouchableOpacity>
//         <Text style={styles.touch}>submit</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   contanier2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   input: {
//      borderWidth: 1,
//      borderColor: "#777",
//      padding: 8,
//      margin: 10,
//      width: 200,
//      borderRadius: 10,
     
//   },
//   touch:{
//     padding: 10,
//     width: 200,
//     backgroundColor: "red",
//     borderRadius: 5,
//     textAlign: 'center',
//     marginTop: 10,
//     color: 'white',
    
    

//   }
// })


import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [student, setStudent] =React.useState([
    { name:"banji", id:"1"},
    { name:"danireal", id:"2"},
    { name:"chris", id:"3"},
    { name:"bose", id:"4"},
    { name:"nuzube", id:"5"},
    { name:"phill", id:"6"},
    { name:"austine", id:"7"},
    { name:"bob", id:"8"},
    { name:"lee", id:"9"},
    { name:"rojjah", id:"10"},
  ])
  return (
    
    <View style={styles.container}>
        <FlatList data={student} renderItem={({item}) => (<Text style={styles.text}>{item.name}</Text>)}/>
        
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    flex:1,
    width: 200,
    margin: 20,
    height: 50,
    backgroundColor: "blue",
    textAlign: 'center',
    color: 'white',
    
    
  }
})