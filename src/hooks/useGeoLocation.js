import { useState } from "react";

export function useGeoLocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(null);

  function getPosition() {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
      setIsLoading(false);
    });
  }
  return { isLoading, position, getPosition };
}
