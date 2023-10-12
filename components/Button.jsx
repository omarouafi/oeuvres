import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button({ type="primary", text, ...props }) {

    if (type === "primary") {
        return (
            <TouchableOpacity style={styles.primary}
                {...props}>
                <Text style={styles.primaryText}>{text}</Text>
            </TouchableOpacity>
        );
    }else if (type === "secondary") {
        return (
            <TouchableOpacity style={styles.secondary}
                {...props}>
                <Text style={styles.secondaryText}>{text}</Text>
            </TouchableOpacity>
        );
    }else if (type === "link") {
        return (
            <TouchableOpacity style={styles.link}
                {...props}>
                <Text style={styles.linkText}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    
  primary: {
    backgroundColor: "#7159c1",
    padding: 13,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

  secondary: {
    backgroundColor: "transparent",
    padding: 13,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderColor: "#7159c1",
    borderWidth: 1,

  },

  secondaryText: {
    color: "#7159c1",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

  link: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 10,
    height: 40,
    marginBottom: 10,
    marginHorizontal: 20,
  },

  linkText: {
    color: "#7159c1",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Button;
