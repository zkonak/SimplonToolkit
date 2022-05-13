import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../store/authSlice";
import { userLoginValidator } from "../../utils/user";

function Login({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const dispatch = useDispatch();

  const handleLogin = () => {
    const error = userLoginValidator(email.value, password.value);
    if (error) {
      setEmail({ ...email, error: error });
      setPassword({ ...password, error: error });
      return;
    }

    const user = {
      isLoggedIn: true,
      email: email.value,
      // userName: 'johnDoe'
    };

    dispatch(setSignIn(user));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title title="Connexion" />
        <Card.Content>
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />

          <TextInput
            label="Mot de passe"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />
          <Button mode="contained" onPress={handleLogin}>
            Connexion
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.link}>Pas de compte ? Créer un compte</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
  },
  card: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textInput: {
    marginBottom: 10,
  },
  link: { marginTop: 10, alignSelf: "center" },
});

export default Login;
