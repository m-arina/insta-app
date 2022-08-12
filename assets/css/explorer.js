import { StyleSheet } from "react-native";

export default StyleSheet.create({
  geral: {flex: 1, backgroundColor: "white"},
  barraPesquisa: {
    width: "100%",
    flex: 0.08,
    alignItems: "center",
  },
  pesquisa: {
    borderRadius: 8,
    width: "95%",
    marginTop: 15,
    height: 30,
    backgroundColor: "#efefef",
    flexDirection: "row",
    alignSelf: "center",
  },
  grade: {
    flex: 0.84,
    flexDirection: "column",
  },
  linhaGrade: {
    marginTop: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fotoLinha: {
    width: "33%",
    height: 150,
  },
  rodape: {
    flex: 0.07,
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center"
  },
});
