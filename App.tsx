import { useEffect, useState } from 'react';
import {
 
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  harga: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'Sepatu',
        harga: 500,
        photo:
          'https://sportaways.com/media/amasty/amoptmobile/catalog/product/cache/cd7c6c71a47e90564e17811b95cac4e3/s/p/specs_accelerator_alpha_nerve_core_fg_-_aqua_graypersian_greengreen_gecko_1.jpg',
      },
      {
        id: 2,
        name: 'Sepatu Bola Specs Lightspeed Reborn ',
        harga: 475,
        photo:
          'https://img.id.my-best.com/product_images/0fc52d2bc476ff86d40fa1144b852f27.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=80334f85d35be5c5c50ccc7e58b71b6f',
      },
      {
        id: 3,
        name: 'Sepatu Bola Specs Lightspeed Reborn ',
        harga: 450,
        photo:
          'https://media.karousell.com/media/photos/products/2023/9/17/specs_lightspeed_reborn_1694924966_0c90397b_progressive.jpg',
      },
      {
        id: 4,
        name: 'Sepatu Bola Specs Lightspeed Reborn FG JR',
        harga: 500,
        photo:
          'https://kickoffsports.id/wp-content/uploads/2023/09/20230923_150957-e1695467053233.png',
      },
      {
        id: 5,
        name: 'SPECS ACCELERATOR ALPHA NERVE PRO IN 402297 / 20232',
        harga: 450,
        photo:
          'https://dynamic.zacdn.com/umg0rGxDmslHYt8fxj2S1dCvZyM=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/specs-0684-1986734-1.jpg',
      },
      {
        id: 6,
        name: 'SPECS FUTSAL LS EVOLUTION IN 402337 / 20232',
        harga: 470,
        photo:
          'https://dynamic.zacdn.com/ogfndUkpVMD7pv6JX3WpjKLwH8M=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/specs-3487-0470734-1.jpg',
      },
      {
        id: 7,
        name: 'bola',
        harga: 150,
        photo:
          'https://sportaways.com/media/amasty/amoptmobile/catalog/product/cache/cd7c6c71a47e90564e17811b95cac4e3/s/p/specs_palapa_23_fb_competition_ball_-_plasma_redbluefish_5_1_1.jpg',
      },
      {
        id: 8,
        name: 'bola',
       harga: 150,
        photo:
          'https://siplah-oss.tokoladang.co.id/merchant/20073/product/0mruyBwKnWBPwv0AHXc0CzaFIQOdfzm29TUX6pec.jpg',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'red',
                backgroundColor:'black', 
                borderRadius:30, 
                width: 200,
                marginLeft: 100,
               
              }}>
             alfito sport
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'orange',
                maxWidth: '45%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 90, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20,color:'black',fontWeight: 'bold', }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20,color:'black',fontWeight: 'bold', }}>Price: ${item.harga}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;