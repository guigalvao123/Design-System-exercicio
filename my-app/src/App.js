import './App.css';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { Cartao } from './components/card/card'

function App() {
  const produtos =  [{
    "id":1,
    "marca":"Matsunaga",
    "name":"Sandevistan",
    "priceNormal":500,
    "priceDiscount":450,
    "image":"https://popularanime.com.br/wp-content/uploads/2022/10/Cyberpunk-Edgerunners-Tudo-sobre-o-Sandevistan.jpg"
},
{
    "id":2,
    "marca":"Brastemp",
    "name":"Geladeira",
    "priceNormal":1000,
    "priceDiscount":850,
    "image":"https://a-static.mlcdn.com.br/800x560/geladeira-refrigerador-brastemp-frost-free-inverse-443l-com-turbo-ice-bre57-akana/magazineluiza/013082000/36e840373aa459af72c341b4c5ed9310.jpg"
},
{
    "id":3,
    "marca":"LG",
    "name":"TV Plasma",
    "priceNormal":2500,
    "priceDiscount":2000,
    "image":"https://imgs.casasbahia.com.br/2455875/1xg.jpg?imwidth=292"
},
{
    "id":4,
    "marca":"Samsung",
    "name":"Galaxy",
    "priceNormal":600,
    "priceDiscount":500,
    "image":"https://i.zst.com.br/thumbs/12/1f/2e/-13482933.jpg"
},
{
    "id":5,
    "marca":"Apple",
    "name":"Iphone X13",
    "priceNormal":10000,
    "priceDiscount":8000,
    "image":"https://imgs.casasbahia.com.br/55014843/1xg.jpg?imwidth=292"
},
]

  return (
    <ChakraBaseProvider>
      {produtos.map((venda)=>{
        return <Cartao key={venda.id} venda={venda}/>
      })}
      
    </ChakraBaseProvider>
  );
}

export default App;
