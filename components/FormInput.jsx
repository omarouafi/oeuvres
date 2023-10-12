import { TextInput,StyleSheet } from "react-native"

function FormInput({...props}) {
  return (
    <TextInput 
    
        style={styles.input}
        {...props}
  />
  )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 2,
        marginBottom: 20,
        marginHorizontal: 20,
        paddingLeft: 10,
        borderRadius: 10,
      },
})    

export default FormInput