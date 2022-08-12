import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },

    // --------------------

    cabecalho:{
      marginTop: 2,
      marginStart: 10,
      marginEnd: 15,
      flexDirection:'row',
      justifyContent: 'space-between', 
      flex: 0.6 ,  
     
    },

    logo:{
      width: 120,
      height: 80,
      resizeMode:'contain',
    },

    btCabecalho:{
      width: 30,
      height: 80,
      resizeMode:'contain',
      alignSelf: 'center',
      marginTop: 4,
      marginEnd: 5
    },

    // --------------------

    cabecalhoStories:{
      marginTop: 3,
      flexDirection:'row',
      flex: 0.1,
      marginBottom: -8
    },

    storie:{
      flexDirection:'column', 
    },

    imgStorie:{
      width: 104,
      height: 80,
      marginEnd: -18,
      resizeMode:'contain'
    },

    txtStorie:{
      textAlign:'center',
      marginEnd: -18,
    },

    // --------------------

    borda:{
      height: 1,
      width: '100%',
      backgroundColor: '#dbdbdb',
    },

    // --------------------

    conteudo:{
      flex:5,
    },

    conteudoUser:{
      flexDirection:'row',
      marginStart: 10,
    },

    iconUser:{
        width: 40,
        height: 55,
        resizeMode:'contain',
    },

    // ---

    txtUser:{
      flexDirection: 'column',
      marginStart: 8,
    },

    txtNick:{
      textAlign:'center',
      marginTop: 10,
      fontWeight: 700,
      marginLeft: -5
    },

    txtLocal:{
      textAlign:'center',
      fontWeight: '400',
    },

    opcoesUser:{
      width: 25,
      height: 58,
      resizeMode:'contain',
      marginStart: '67%'
    },

    fotoUser:{
      width: '100%',
      height: 418,
      resizeMode:'contain',
      alignSelf:'center',
      marginTop: -18
    },

    // --- mini separação

    conteudoInteragir:{
      flexDirection:'row',
      marginStart: 6,
      marginTop: 3
    },

    iconeInteragir:{
      marginTop: -10,
      width: 30,
      height: 30,
      marginEnd: 10,
      resizeMode:'contain',
    },

    // --- mini separação

    conteudoCurtida:{
      flexDirection: 'row'
    },

    iconCurtida:{
      width: 20,
      height: 20,
      resizeMode:'contain',
      marginStart: 5,
      marginTop: 5
    },

    curtidas:{
      marginStart: 2,
      marginTop: 5,
      flexDirection: 'row'
    },

    // --- mini separação

    conteudoDesc:{
      flexDirection: 'row'
    },

    descricao:{
      marginStart: 5,
      marginTop: 2
    },


    // --------------------

    rodape:{
      flex: 0.45,
      backgroundColor:'white',
      flexDirection: 'row',
      alignSelf: 'center',
     
    },

    rodapeButtons:{
      width: 35,
      height: 53,
      marginEnd: 40,
      resizeMode:'contain', 
      alignSelf: 'center', 
      justifyContent: "center"
    },

    iconRodape:{
      width: 35,
      height:30,
      resizeMode:'contain',
      marginStart: 5,
      alignSelf:'center'
    },



  });