import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import perfil from "./assets/css/perfil";
import login from "./assets/css/login";
import explorer from "./assets/css/explorer";
import Style from "./assets/css/styles";
import cadastro from "./assets/css/cadastro";


function Cadastro({ navigation }) {


  return (
    <View style={cadastro.container}>
    <View>
      <Text style={cadastro.linguagem}>português (Brasil)</Text>
    </View>

    <View style={cadastro.cadastrar}>
      <Image style={cadastro.logo} source={require('./assets/images/login/logo.png')}/>

      <TouchableOpacity style={cadastro.botaoFB}>
        <Image style={cadastro.logoFB} source={require('./assets/images/login/logoFB.png')}/>
        <Text style={{color: 'white', fontWeight: 600}}> Continuar como Kirby</Text>
      </TouchableOpacity>      

      <View style={cadastro.separarOU}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}}></View>
        <Text style={{width: 50, textAlign: 'center', color:'gray', fontWeight: 500}}>OU</Text>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}}></View>
      </View>
      <Text style={{color: '#108ff2', textAlign: 'center',fontWeight: 600}}> Cadastre-se com o email ou o número
        do telefone
      </Text>

    </View>

  
    <View style={cadastro.footer}>
      <View style={cadastro.separar}/>
      <Text style={{fontSize: 12, textAlign: 'center', marginTop: 12, color: 'gray'}}>Já tem uma conta ?
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{fontWeight: 700}}> Entrar</Text>
        </TouchableOpacity>
        
      </Text>
    </View>

  </View>
  );
}



function Login({ navigation }) {
  const [loginUser, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [resultado, setResultado] = useState();

  const validar = () => {
    if (loginUser == "kirby" && senha == 123) {
      entrar();
    } else {
      const r = "Login ou Senha inválidos";
      setResultado(r);
    }
  };

  const entrar = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={login.container}>
      <View>
        <Text style={login.linguagem}>português (Brasil)</Text>
      </View>

      <View style={login.inserirDados}>
        <Image
          style={login.logo}
          source={require("./assets/images/login/logo.png")}
        />

        <View style={{ margin: 15 }}>
          <TextInput
            style={login.caixaDeTexto}
            placeholder="Número de telefone, email ou nome de usuário"
            placeholderTextColor="gray"
            autoFocus={true}
            keyboardType={"text"}
            onChangeText={(text) => setLogin(text)}
          />
        </View>

        <View style={{ margin: 15 }}>
          <TextInput
            style={login.caixaDeTexto}
            placeholder="Senha"
            placeholderTextColor="gray"
            keyboardType={"text"}
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)}
          />
        </View>

        <TouchableOpacity style={login.botaoEntrar} onPress={() => validar()}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: 600 }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            marginTop: 5,
            color: "gray",
          }}
        >
          Esqueceu seus dados de login ?
          <Text style={{ fontWeight: 700 }}> Obtenha ajuda para entrar.</Text>
        </Text>
      </View>

      <View style={login.separarOU}>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }}></View>
        <Text
          style={{
            width: 50,
            textAlign: "center",
            color: "gray",
            fontWeight: 500,
          }}
        >
          OU
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }}></View>
      </View>

      <TouchableOpacity style={login.botaoFB}>
        <Image
          style={login.logoFB}
          source={require("./assets/images/login/logoFB.png")}
        />
        <Text style={{ color: "white", fontWeight: 600 }}>
          {" "}
          Continuar como Kirby
        </Text>
      </TouchableOpacity>

      <View style={{ margin: 15 }}>
        <Text style={login.resposta}> {resultado} </Text>
      </View>

      <View style={login.footer}>
        <View style={login.separar} />
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            marginTop: 12,
            color: "gray",
          }}
        >
          Não tem uma conta ?
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={{ fontWeight: 700 }}> Cadastre-se.</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.cabecalho}>
        <Image
          style={Style.logo}
          source={require("./assets/images/home/logo.png")}
        />
        <Image
          style={[Style.btCabecalho, { marginStart: 95, width: 40 }]}
          source={require("./assets/images/home/adc.png")}
        />
        <Image
          style={[Style.btCabecalho, { width: 36 }]}
          source={require("./assets/images/home/gostar.png")}
        />
        <Image
          style={[Style.btCabecalho, { width: 35, marginRight: 5 }]}
          source={require("./assets/images/home/messenger.png")}
        />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={Style.cabecalhoStories}
      >
        <View style={Style.storie}>
          <Image
            style={Style.imgStorie}
            source={require("./assets/images/home/kirby.png")}
          />
          <Text style={Style.txtStorie}> Seu story</Text>
        </View>

        <View style={Style.storie}>
          <Image
            style={Style.imgStorie}
            source={require("./assets/images/home/ma.png")}
          />
          <Text style={Style.txtStorie}> _marinaliz</Text>
        </View>

        <View style={Style.storie}>
          <Image
            style={Style.imgStorie}
            source={require("./assets/images/home/leandro.png")}
          />
          <Text style={Style.txtStorie}> leandro_</Text>
        </View>

        <View style={Style.storie}>
          <Image
            style={Style.imgStorie}
            source={require("./assets/images/home/netflix.png")}
          />
          <Text style={Style.txtStorie}> netflixbrasil</Text>
        </View>

        <View style={Style.storie}>
          <Image
            style={Style.imgStorie}
            source={require("./assets/images/home/zendaya.png")}
          />
          <Text style={Style.txtStorie}> zendaya</Text>
        </View>

        <View style={Style.storie}>
          <Image
            style={Style.imgStorie}
            source={require("./assets/images/home/caze.png")}
          />
          <Text style={Style.txtStorie}> casimiro</Text>
        </View>

        <View style={[Style.storie, { marginEnd: 20 }]}>
          <Image
            style={Style.imgStorie}
            source={require("./assets/images/home/gabi.png")}
          />
          <Text style={Style.txtStorie}> gabigol</Text>
        </View>
      </ScrollView>
      <View style={Style.borda} />
      <View style={Style.conteudo}>
        <View style={Style.conteudoUser}>
          <Image
            style={Style.iconUser}
            source={require("./assets/images/home/kirby.png")}
          />

          <View style={Style.txtUser}>
            <Text style={Style.txtNick}> kirby</Text>
            <Text style={Style.txtLocal}> Miami</Text>
          </View>

          <Image
            style={Style.opcoesUser}
            source={require("./assets/images/home/pontinhos.png")}
          />
        </View>

        <Image
          style={Style.fotoUser}
          source={require("./assets/images/home/kirbyBoiando.jpg")}
        />

        <View style={Style.conteudoInteragir}>
          <Image
            style={[Style.iconeInteragir, { width: 37 }]}
            source={require("./assets/images/home/gostar.png")}
          />
          <Image
            style={[Style.iconeInteragir, { width: 24 }]}
            source={require("./assets/images/home/coment.png")}
          />
          <Image
            style={Style.iconeInteragir}
            source={require("./assets/images/home/avi.png")}
          />
          <Image
            style={[Style.iconeInteragir, { marginStart: "59%", width: 24 }]}
            source={require("./assets/images/home/salv.png")}
          />
        </View>

        <View style={Style.conteudoCurtida}>
          <Image
            style={Style.iconCurtida}
            source={require("./assets/images/home/ma2.png")}
          />
          <Text style={Style.curtidas}>
            {" "}
            Curtido por
            <Text style={{ fontWeight: 700 }}> _marinaliz</Text> e
            <Text style={{ fontWeight: 700 }}> outras 10.010.786 pessoas</Text>
          </Text>
        </View>

        <View style={Style.conteudoDesc}>
          <Text style={Style.descricao}>
            <Text style={{ fontWeight: 700 }}>kirby </Text>
            to aqui em miami e aproveitando muito! suave na nave, de boa na
            lagoa, tranquilo como um grilo
            <Text style={{ fontWeight: 100 }}>... mais</Text>
          </Text>
        </View>

        <View style={Style.conteudoComent}>
          <View
            style={[Style.descricao, { flexDirection: "column", marginTop: 5 }]}
          >
            <Text style={{ fontWeight: 100 }}>
              Ver todos os 28.762 comentários
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: 700 }}>_marinaliz </Text>ai que
                tudo!!
              </Text>
              <Image
                style={[
                  Style.iconeInteragir,
                  { width: 20, marginTop: 1, marginStart: "53%" },
                ]}
                source={require("./assets/images/home/gostar.png")}
              />
            </View>
          </View>
        </View>

        <View style={Style.descricao}>
          <Text style={{ marginTop: -3 }}>
            <Text style={{ fontWeight: 100 }}>há 25 minutos • </Text>
            Ver tradução
          </Text>
        </View>
      </View>{" "}
      {/* final do container "conteudo" */}
      <View style={Style.borda} /> {/* separação */}
      <View style={Style.rodape}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={Style.rodapeButtons}
            source={require("./assets/images/home/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Explorer")}>
          <Image
            style={Style.rodapeButtons}
            source={require("./assets/images/home/busca.png")}
          />
        </TouchableOpacity>
        <Image
          style={Style.rodapeButtons}
          source={require("./assets/images/home/reels.png")}
        />
        <Image
          style={Style.rodapeButtons}
          source={require("./assets/images/home/compras.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            style={[Style.iconRodape, { marginTop: 10 }]}
            source={require("./assets/images/home/kirbyEstiloso.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/**
  tela explorer --------------------------------------------------
 */

function Explorer({ navigation }) {
  return (
    <View style={explorer.geral}>
      <View style={explorer.barraPesquisa}>
        <View style={explorer.pesquisa}>
          <Image
            style={{ width: 22, height: 22, marginTop: 4, marginStart: 10 }}
            source={require("./assets/images/home/busca.png")}
          />
          <Text style={{ marginTop: 5, marginStart: 10 }}> Pesquisar </Text>
        </View>
      </View>
      <ScrollView style={explorer.grade}>
        <View style={explorer.linhaGrade}>
          {" "}
          {/* LINHA = 1 */}
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/arrasca2.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/arima.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/gabi.jpg")}
          ></Image>
        </View>
        <View style={explorer.linhaGrade}>
          {" "}
          {/* LINHA = 2 */}
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/kaori.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/zendaya.png")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/pika.jpg")}
          ></Image>
        </View>
        <View style={explorer.linhaGrade}>
          {" "}
          {/* LINHA = 3 */}
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/giannis.png")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/maldito.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/aranhahomem.jpg")}
          ></Image>
        </View>
        <View style={explorer.linhaGrade}>
          {" "}
          {/* LINHA = 4 */}
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/nba.jpeg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/anya.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/at.png")}
          ></Image>
        </View>
        <View style={explorer.linhaGrade}>
          {" "}
          {/* LINHA = 5 */}
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/jennie.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/arrasca.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/gabi.jpg")}
          ></Image>
        </View>
        <View style={explorer.linhaGrade}>
          {" "}
          {/* LINHA = 6 - Feita só pra tirar o espaço entre a grid e o rodap */}
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/jennie.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/arrasca.jpg")}
          ></Image>
          <Image
            style={explorer.fotoLinha}
            source={require("./assets/images/explorer/gabi.jpg")}
          ></Image>
        </View>
      </ScrollView>

      <View style={explorer.rodape}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={Style.rodapeButtons}
            source={require("./assets/images/home/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Explorer")}>
          <Image
            style={Style.rodapeButtons}
            source={require("./assets/images/home/busca.png")}
          />
        </TouchableOpacity>
        <Image
          style={Style.rodapeButtons}
          source={require("./assets/images/home/reels.png")}
        />
        <Image
          style={Style.rodapeButtons}
          source={require("./assets/images/home/compras.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            style={[Style.iconRodape, { marginTop: 10 }]}
            source={require("./assets/images/home/kirbyEstiloso.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/**
  tela profile --------------------------------------------------
 */

function Perfil({ navigation }) {
  return (
    <View style={perfil.geral}>
      <View style={perfil.cabecalho}>
        <Text style={perfil.textoCabecalho}>
          {" "}
          kirby{" "}
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={{ width: 12, height: 12 }}
            source={require("./assets/images/perfilBtns/seta.png")}
          />
        </Text>

        <Image
          resizeMethod="resize"
          resizeMode="contain"
          style={perfil.btnCabecalho}
          source={require("./assets/images/perfilBtns/adc.png")}
        />
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          style={perfil.btnCabecalho}
          source={require("./assets/images/perfilBtns/menu.png")}
        />
      </View>

      <ScrollView style={perfil.conteudo}>
        <View style={perfil.fotoInfoBio}>
          <View style={perfil.fotoInfo}>
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={{
                marginStart: 10,
                width: 85,
                height: 85,
                justifyContent: "center",
              }}
              source={require("./assets/images/editadas/perfil.png")}
            />

            <View style={perfil.info}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}> 6 </Text>
              <Text> Publicações </Text>
            </View>

            <View style={perfil.info}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}> 300 M </Text>
              <Text> Seguidores </Text>
            </View>

            <View style={perfil.info}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}> 2 </Text>
              <Text> Seguindo </Text>
            </View>
          </View>

          <View style={perfil.bio}>
            <Text style={{ fontWeight: "500" }}> Kirby </Text>
            <Text style={{ fontWeight: "500" }}> como coisas </Text>
          </View>
        </View>

        <View style={perfil.botoesPerfil}>
          <Text
            style={{
              width: "90%",
              textAlign: "center",
              borderColor: "#dbdbdb",
              borderWidth: 2,
              borderRadius: 5,
              height: "100%",
              paddingTop: 5,
              fontWeight: "500",
            }}
          >
            Editar perfil
          </Text>
          <Text style={{ marginStart: 5, width: "10%" }}>
            <Image
              style={{
                width: "100%",
                height: 5,
                textAlign: "center",
                borderColor: "#dbdbdb",
                borderWidth: 2,
                borderRadius: 5,
                height: "100%",
                paddingTop: 5,
                fontWeight: "500",
              }}
              source={require("./assets/images/perfilBtns/amizade.png")}
            />
          </Text>
        </View>
        <View style={perfil.abaFotos}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={Style.botoesAbas}
            source={require("./assets/images/perfilBtns/grid.png")}
          />
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={[Style.botoesAbas, { height: 30 }]}
            source={require("./assets/images/perfilBtns/marcacao.png")}
          />
        </View>
        <View style={perfil.linha} />
        <View style={perfil.grade}>
          <View style={perfil.linhaGrade}>
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={perfil.fotoLinha}
              source={require("./assets/images/kirby/kirby-boiando.jpg")}
            />

            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={perfil.fotoLinha}
              source={require("./assets/images/kirby/kirby-musica.jpg")}
            />

            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={perfil.fotoLinha}
              source={require("./assets/images/kirby/kirby-faculdade.png")}
            />
          </View>
          <View style={[perfil.linhaGrade, { marginTop: -30 }]}>
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={perfil.fotoLinha}
              source={require("./assets/images/kirby/kirby-comida.png")}
            />

            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={perfil.fotoLinha}
              source={require("./assets/images/kirby/kirby-faca.jpg")}
            />

            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={perfil.fotoLinha}
              source={require("./assets/images/kirby/kirby-coracao.png")}
            />
          </View>
        </View>
      </ScrollView>
      <View style={Style.borda} /> {/* separação */}
      <View style={[Style.rodape, { flex: 0.07 }]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={Style.rodapeButtons}
            source={require("./assets/images/home/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Explorer")}>
          <Image
            style={Style.rodapeButtons}
            source={require("./assets/images/home/busca.png")}
          />
        </TouchableOpacity>
        <Image
          style={Style.rodapeButtons}
          source={require("./assets/images/home/reels.png")}
        />
        <Image
          style={Style.rodapeButtons}
          source={require("./assets/images/home/compras.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            style={[Style.iconRodape, { marginTop: 10 }]}
            source={require("./assets/images/home/kirbyEstiloso.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Explorer"
          component={Explorer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
