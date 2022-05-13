import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, TextInput, Text } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../store/authSlice";
import { userRegisterValidator } from "../../utils/user";
import STYLE from "../../theme";

function Register({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  const [lastname, setLastname] = useState({ value: "", error: "" });
  const [codeEtudiant, setCodeEtudiant] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmationPassword, setConfirmationPassword] = useState({
    value: "",
    error: "",
  });

  const dispatch = useDispatch();

  const handleRegister = () => {
    const error = userRegisterValidator(email.value, password.value);
    if (error) {
      setEmail({ ...email, error: error });
      setPassword({ ...password, error: error });
      return;
    }

    //register

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
            label="Prénom"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
            autoCapitalize="none"
            autoCompleteType="name"
            textContentType="name"
            keyboardType="name"
            theme={{ colors: { primary: STYLE.MAINCOLOR } }}
          />
          <TextInput
            style={styles.input}
            label="Nom"
            returnKeyType="next"
            value={lastname.value}
            onChangeText={(text) => setLastname({ value: text, error: "" })}
            error={!!lastname.error}
            errorText={lastname.error}
            autoCapitalize="none"
            autoCompleteType="lastname"
            textContentType="lastname"
            keyboardType="lastname"
            theme={{ colors: { primary: STYLE.MAINCOLOR } }}
          />
          <TextInput
            style={styles.input}
            label="Code Etudiant"
            returnKeyType="next"
            value={codeEtudiant.value}
            onChangeText={(text) => setCodeEtudiant({ value: text, error: "" })}
            error={!!codeEtudiant.error}
            errorText={codeEtudiant.error}
            autoCapitalize="none"
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

          <TextInput
            style={styles.input}
            label="Confirmation de Mot de passe"
            returnKeyType="done"
            value={confirmationPassword.value}
            onChangeText={(text) =>
              setConfirmationPassword({ value: text, error: "" })
            }
            error={!!confirmationPassword.error}
            errorText={confirmationPassword.error}
            secureTextEntry
            theme={{ colors: { primary: STYLE.MAINCOLOR } }}
          />
          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.loginbutton}
            color={STYLE.MAINCOLOR}
          >
            Inscription
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
            <Text style={styles.link}>
              Vous avez déjà un compte ? Connectez-vous
            </Text>
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
  loginbutton: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  link: { marginTop: 10, alignSelf: "center" },
});

export default Register;
