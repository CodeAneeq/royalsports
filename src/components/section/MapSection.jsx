import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const MapSection = () => {
  const position = [31.5597, 74.3264];

  return (
    <div className=" h-[400px] rounded-xl overflow-hidden mx-15 mb-30 max-[475px]:mx-5">
      <MapContainer
        center={position}
        zoom={20}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

       <Marker position={position}>
  <Popup>
    <strong>Royal Sports</strong><br />
    90-A Allama Iqbal Rd, Garhi Shahu, Lahore<br />

    <a
      href="https://www.google.com/maps/search/?api=1&query=Royal+Sports+90-A+Allama+Iqbal+Rd+Garhi+Shahu+Lahore"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      Get Directions
    </a>
  </Popup>
</Marker>


      </MapContainer>
    </div>
  );
};

export default MapSection;
