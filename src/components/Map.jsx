import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import { useURLPosition } from "../hooks/useURLPosition";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";
import { useGeoLocation } from "../hooks/useGeoLocation";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([0, 0]);
  const [mapLat, mapLng] = useURLPosition();

  const {
    isLoading: geoLoading,
    getPosition,
    position: geoPosition,
  } = useGeoLocation();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geoPosition) setMapPosition([geoPosition.lat, geoPosition.lng]);
    },
    [geoPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geoPosition && (
        <Button type="btn-map" onClick={getPosition}>
          {geoLoading ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>
                <img src={city.emoji} alt={city.cityName} />
              </span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
