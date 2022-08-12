import { StyleSheet } from "react-native";

export default StyleSheet.create({  

    container:{
        height:'100%'
      },
    
      cadastrar:{
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
        alignSelf: 'center',
        marginBottom: 110,
        marginTop: 50
      },

      logoFB:{
        width: 30,
        height: 80,
        resizeMode:'contain',
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
        marginTop: 60,
        marginBottom: 10,
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

      footer:{
        marginTop: 'auto',
        marginBottom: 18
      }
});