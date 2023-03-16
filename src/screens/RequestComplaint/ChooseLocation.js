import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { STRING } from '../../utils/constant/strings';
import { CustomHeader } from '../../components';
import { COLORS } from '../../utils/styles/theme';
import { padding } from '../../utils/styles/globalStyle';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const ChooseLocation = () => {
    const mapView = useRef(null);
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });
    const handleRegionChange =region=>{
        setRegion(region)
         console.log('after region chnge....',region)
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <CustomHeader title={STRING.CHOOSE_LOCATION} />
            </View>
            <View style={{ flex: 1 }}>
                <MapView
                    style={styles.map}

                    region={region}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={false}
                    zoomEnabled={true}
                    enableZoomControl={true}
                    pitchEnabled={true}
                    showsCompass={false}
                    showsBuildings={false}
                    showsIndoors={false}
                    ref={mapView}
                    onRegionChangeComplete={ handleRegionChange}
                >

                    <Marker coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude
                    }} 
                    title={"You are here"}
                    draggable 
                    onDragEnd={(e) => console.log('dragEnd', e.nativeEvent.coordinate)}
                    >
                        

                    </Marker>


                </MapView>
            </View>

        </View>
    )
}

export default ChooseLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: padding.generic
    },
    map: {
        width: '100%',
        height: '100%'
    }

})