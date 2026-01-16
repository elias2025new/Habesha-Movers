"use client";

import { useEffect, useState, useCallback } from "react";
import {
    GoogleMap,
    DirectionsService,
    DirectionsRenderer,
    MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
};

const defaultCenter = {
    lat: 9.005401,
    lng: 38.763611,
};

interface MovingMapProps {
    isLoaded: boolean;
    pickupCoords: { lat: number; lng: number } | null;
    destinationCoords: { lat: number; lng: number } | null;
}

export default function MovingMap({ isLoaded, pickupCoords, destinationCoords }: MovingMapProps) {
    const [response, setResponse] = useState<google.maps.DirectionsResult | null>(null);

    const directionsCallback = useCallback((
        result: google.maps.DirectionsResult | null,
        status: google.maps.DirectionsStatus
    ) => {
        if (result !== null) {
            if (status === 'OK') {
                setResponse(result);
            } else {
                console.error("Directions lookup failed: ", status);
            }
        }
    }, []);

    // Reset response when coords change to trigger new search
    useEffect(() => {
        setResponse(null);
    }, [pickupCoords, destinationCoords]);

    if (!isLoaded) {
        return (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-2xl flex items-center justify-center">
                <p className="text-gray-400 text-sm">Loading Live Map...</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 relative group">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={pickupCoords || defaultCenter}
                zoom={13}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "geometry.fill",
                            "stylers": [{ "weight": "2.00" }]
                        },
                        {
                            "featureType": "all",
                            "elementType": "geometry.stroke",
                            "stylers": [{ "color": "#9c9c9c" }]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text",
                            "stylers": [{ "visibility": "on" }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [{ "color": "#f2f2f2" }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry.fill",
                            "stylers": [{ "color": "#ffffff" }]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [{ "visibility": "off" }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [{ "color": "#eeeeee" }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [{ "visibility": "simplified" }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [{ "visibility": "off" }]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [{ "visibility": "off" }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [{ "color": "#c8d7d4" }]
                        }
                    ]
                }}
            >
                {pickupCoords && destinationCoords && !response && (
                    <DirectionsService
                        options={{
                            destination: destinationCoords,
                            origin: pickupCoords,
                            travelMode: google.maps.TravelMode.DRIVING,
                        }}
                        callback={directionsCallback}
                    />
                )}

                {response && (
                    <DirectionsRenderer
                        options={{
                            directions: response,
                            polylineOptions: {
                                strokeColor: "#2563eb",
                                strokeOpacity: 0.8,
                                strokeWeight: 6,
                            },
                        }}
                    />
                )}

                {pickupCoords && !destinationCoords && (
                    <MarkerF position={pickupCoords} label="Pickup" />
                )}

                {!pickupCoords && !destinationCoords && (
                    <MarkerF position={defaultCenter} />
                )}
            </GoogleMap>

            <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 z-10 transition-opacity duration-300">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Live Route View</p>
                <p className="text-[10px] text-gray-500">Pick locations to see path</p>
            </div>
        </div>
    );
}
