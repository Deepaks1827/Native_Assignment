export const markers = [
  {
    id: 1,
    title: "Location 1",
    description: `Dummy description for location 1 :=> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    smallDescription: "Description for location 1",
    coordinate: { latitude: 37.78825, longitude: -122.4324 },
  },
  {
    id: 2,
    title: "Location 2",
    description: `Dummy description for location 2 :=> packages and web page editors now use Lorem Ipsum as their default model text, and a search for 
    'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
     over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    smallDescription: "Description for location 2",
    coordinate: { latitude: 37.7883, longitude: -122.434 },
  },
  {
    id: 3,
    title: "Location 3",
    description: `Dummy description for location 3 :=> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
      piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a 
      Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
       from a Lorem Ipsum passage, and going through the cites of the word in classical literature`,
    smallDescription: "Description for location 3",
    coordinate: { latitude: 37.78845, longitude: -122.436 },
  },
  {
    id: 4,
    title: "Location 4",
    description: `Dummy description for location 4 :=> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
     Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
     College in 
    Virginia, looked up one of the more obscure Latin words, consectetur`,
    smallDescription: "Description for location 4",
    coordinate: { latitude: 37.78855, longitude: -122.4375 },
  },
];

export const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];
