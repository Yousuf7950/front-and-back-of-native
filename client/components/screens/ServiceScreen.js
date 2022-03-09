
import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';

const ENTRIES1 = [
  {
   // title: 'Best Quality',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.pinimg.com/originals/9c/83/36/9c833640c1b47f4a62684b2c0be97760.jpg',
  },
  {
    ////title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://blogmedia.dealerfire.com/wp-content/uploads/sites/1176/2019/11/Bemer-Motor-Cars_Why-You-Should-Take-Your-Luxury-Car-to-a-Specialty-Mechanic_IMAGE1.jpeg',
  },
  {
   // title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://www.bockmansautocare.com/wp-content/uploads/2021/09/techs.jpg',
  },
  {
   // title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxLpegAGTPk2EsVPDgYOtgDVdcubxl7HABw&usqp=CAU',
  },
  {
  //  title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://paultan.org/image/2018/10/LHM-One-Stop-Car-Service-Centre-1.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
        <ScrollView>
       
  
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={{fontSize:20}} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
      </ScrollView>
    );
  };

  return (
      
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{color:'white',fontWeight:'700'}}>Settings</Text>
            
        </View>
      <TouchableOpacity onPress={goForward}>
{/* <Text>go to next slide</Text> */}
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
   // backgroundColor:"#5D3FD3"
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  header:{
    // flex:1,
   // marginTop:10,
    height:35,
backgroundColor:'#5D3FD3',
color:'white',
fontWeight:'700',
justifyContent:'center',
alignItems:'center',
borderBottomColor: 'white',
borderBottomWidth: 0.25,
marginBottom:10,

},
});