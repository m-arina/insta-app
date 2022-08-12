import { StyleSheet } from "react-native";

export default StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: "white"
  },
  cabecalho: {
    flex: 0.07,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textoCabecalho: {
    marginTop: 20,
    marginStart: -2,
    fontSize: 23,
    fontWeight: "700",
    marginEnd: 130,
  },
  btnCabecalho: {
    marginTop: 18,
    width: 40,
    height: 40,
    marginEnd: -1,
  },
  conteudo: {
    marginTop: 28,
    flex: 0.86,
  },
  fotoInfoBio: {
    flexDirection: "column",
    height: 130,
  },
  fotoInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  info: {
    flexDirection: "column",
    textAlign: "center",
    marginTop: 15,
  },
  bio: {
    marginTop: 5,
    flexDirection: "column",
    marginStart: 12,
  },
  botoesPerfil: {
    flexDirection: "row",
    marginEnd: 12,
    marginStart: 12,
    height: 35,
    marginTop: 10
  },
  abaFotos: {
    marginTop: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  botoesAbas: {
    width: "50%",
    height: 20,
    alignSelf: "center",
  },
  linha: {
    height: 1,
    width: "50%",
    backgroundColor: "black",
  },
  grade: {
    height: 400,
    flexDirection: "column",
  },
    linhaGrade: {
      marginTop: -15,
      flexDirection: "row",
      justifyContent:'space-around'
  },
  fotoLinha: {
      width: "33%",
      height: 150,
      minWidth: "33%",
      
  },

});
