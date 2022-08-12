import { StyleSheet } from "react-native";

export default StyleSheet.create({  

    container:{
        height:'100%'
      },
    
      inserirDados:{
        marginTop: 140
      },

      linguagem:{
        color:'gray',
        fontSize: 12,
        textAlign:'center',
        marginTop:25,
        marginBottom:10
      },

      logo:{
        width: 155,
        height: 80,
        resizeMode:'contain',
        alignSelf: 'center'
      },

      logoFB:{
        width: 30,
        height: 80,
        resizeMode:'contain',
      },
    
      caixaDeTexto:{
        borderWidth: 1,
        borderColor:'#CBCBCB',
        color:'gray',
        borderRadius: 5,
        paddingLeft: 25,
        height: 50,
        marginTop: -15,
        backgroundColor: '#F8F8F8'
      },
    
      resposta:{
        color:'black',
        fontSize:25,
        textAlign:'center',
        marginTop:30
      },

      separar:{
        height: 1,
        width: '100%',
        backgroundColor: '#dbdbdb',
      },

      separarOU:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '88%',
        marginTop: 12
      },

      botaoFB:{
        flexDirection: 'row',
        width: '92%',
        height: 45, 
        marginTop: 12,
        borderColor: 'gray',
        borderRadius: 3,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#108ff2',
      },

      botaoEntrar:{
        width: '92%',
        height: 45, 
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 3,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#108ff2',
        justifyContent: 'center'
      },

      footer:{
        marginTop: 'auto',
        marginBottom: 18
      }
});