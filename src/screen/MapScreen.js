import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Animated, Easing,} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { markers, mapStyle } from '../../Constants/Constant';

const MapScreen = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [translateY] = useState(new Animated.Value(300));
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };


  const renderContent = () => (
    <Animated.View style={[styles.bottomSheetContent, { transform: [{ translateY }] }]}>
      <Text style={styles.title}>{selectedMarker?.title}</Text>
      <Text style={styles.smallDescription}>{selectedMarker?.smallDescription}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Details', { marker: selectedMarker });
        }}
      >
        <Text style={styles.buttonText}>Information.</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        customMapStyle={mapStyle}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => {
              setSelectedMarker(marker);
              openModal();
            }}
          />
        ))}
      </MapView>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={closeModal}>
          <View style={styles.modalContainer}>
            {renderContent()}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'transparent',
    height: 300,
    justifyContent: 'flex-end',
  },
  bottomSheetContent: {
    backgroundColor: 'white',
    padding: 16,
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 5,
  },
  smallDescription: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default MapScreen;
