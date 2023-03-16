import React, { useState, useRef } from 'react';
import { View, Image } from 'react-native';
import { styles } from './TrackCollector.styles';
import { GoBack } from '../../../components';
import { STRING } from '../../../utils/constant/strings';
import ETA from '../ETA';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import { hp, wp } from '../../../utils/styles/responsive';
import { COLORS } from '../../../utils/styles/theme';
import { IMAGE } from '../../../utils/constant/images';
import { CustomHeader } from '../../../components';
import { GOOGLE_MAPS_API_KEY } from '../../../config/env/config';

const GOOGLE_API_KEY = GOOGLE_MAPS_API_KEY

const TrackCollector = () => {
    const mapView = useRef(null);
    const [coordinates] = useState([
        {
            latitude: 48.8587741,
            longitude: 2.2069771,
        },
        {
            latitude: 48.8323785,
            longitude: 2.3361663,
        },
    ])

    const eta = '11 minutes';
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <CustomHeader title={STRING.TRACK_GARBAGE_COLLECTOR} />
            </View>
            <View style={{ flex: 1 }}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: coordinates[0].latitude,
                        longitude: coordinates[0].longitude,
                        latitudeDelta: 0.0622,
                        longitudeDelta: 0.0121,
                    }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={false}
                    zoomEnabled={true}
                    enableZoomControl={true}
                    pitchEnabled={true}
                    showsCompass={false}
                    showsBuildings={false}
                    showsIndoors={false}
                    ref={mapView}
                >
                    {coordinates.map((coordinate, index) =>
                        <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate}>
                            <Image resizeMode="contain" style={{width:wp(42) ,height:hp(50)}} source={IMAGE.binImg} />
                        </MapView.Marker>

                    )}
                    {(coordinates.length >= 2) && (
                        <MapViewDirections
                            origin={coordinates[0]}
                            waypoints={(coordinates.length > 0) ? coordinates.slice(1, -1) : null}
                            destination={coordinates[coordinates.length - 1]}
                            apikey={GOOGLE_API_KEY}
                            strokeWidth={5}
                            strokeColor={COLORS.GREEN1}
                            optimizeWaypoints={true}
                            mode="DRIVING"
                            onStart={(params) => {
                                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                            }}
                            onReady={result => {
                                console.log(`Distance: ${result.distance} km`)
                                console.log(`Duration: ${result.duration} min.`)

                            }}

                            onError={(error) => {
                                console.log('GOT AN ERROR', error);
                            }}

                        />

                    )}
                </MapView>
                <View style={{ position: 'absolute', bottom: 0, justifyContent: 'center' }}>
                    <ETA eta={eta} showImage={false} showInstructions={false} />
                </View>
            </View>
        </View>
    )

}

export default TrackCollector;