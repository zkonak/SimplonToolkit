import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/user.service";
import { setSignIn } from "../../store/authSlice";
import { userLoginValidator } from "../../utils/user";
import STYLE from "../../theme";

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
      password:password.value
      // userName: 'johnDoe'
    };
    loginUser(user),
    dispatch(setSignIn(user));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            style={styles.input}
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
            theme={{ colors: { primary: STYLE.MAINCOLOR } }}
          />

          <TextInput
            style={styles.input}
            label="Mot de passe"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
            theme={{ colors: { primary: STYLE.MAINCOLOR } }}
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            color={STYLE.MAINCOLOR}
            style={styles.loginbutton}
          >
            Connexion
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
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
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  link: { marginTop: 10, alignSelf: "center" },
  loginbutton: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Login;
