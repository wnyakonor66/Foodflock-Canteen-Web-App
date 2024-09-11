import React from "react";
import InputText from "./InputText";
import { IoCloseSharp } from "react-icons/io5";
import mapboxgl, { Marker } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { SearchBox, useGeocodingCore } from "@mapbox/search-js-react";
import { FaLocationDot } from "react-icons/fa6";

mapboxgl.accessToken =
	"pk.eyJ1IjoiY3Jhemljb2RhIiwiYSI6ImNrbmVwYjJ2NzF0amwyb21yZ2VrYWUyamMifQ.fRl4FzY9JsIV21FbdfCHnQ";

export const PickMap = ({
	showMap = false,
	setShowMap = () => {},
	setCoords = () => {},
	setLocationAddr = () => {},
	route = false,
	markedSpot = null,
}) => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(markedSpot?.lng || -1.6221);
	const [lat, setLat] = useState(markedSpot?.lat || 6.6816);
	const [zoom, setZoom] = useState(14);
	const [location, setLocation] = useState("");
	const [address, setAddress] = useState("");
	const marker = useRef(null);
	const geocoding = useGeocodingCore({
		accessToken: process.env.REACT_APP_MAP_TOKEN,
	});

	useEffect(() => {
		console.log(route);
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [lng, lat],
			zoom: zoom,
		});

		if (markedSpot) {
			new mapboxgl.Marker()
				.setLngLat([markedSpot.lng, markedSpot.lat])
				.addTo(map.current);
		}

		map.current.on("idle", function () {
			map.current.resize();
		});
		map.current.on("click", async (e) => {
			if (route || markedSpot) return;
			const lngLat = e.lngLat;
			setLat(lngLat.lat);
			setLng(lngLat.lng);

			if (marker.current) {
				marker.current.remove();
			}
			marker.current = new mapboxgl.Marker()
				.setLngLat(lngLat)
				.addTo(map.current);

			const addr = await geocoding.reverse(lngLat);
			setLocationAddr(addr.features[0].properties.full_address);
			setLocation(addr.features[0].properties.full_address);
			setAddress(addr.features[0].properties.full_address);
			setCoords([lngLat.lng, lngLat.lat]);
		});
		if (route) {
			getRoute(route[0], route[1]);
		}
	});

	useEffect(() => {
		// console.log({ lng, lat, zoom });
		if (!map.current) return;
		map.current.flyTo({ center: [lng, lat] });
	}, [lng, lat, zoom]);

	async function getRoute(start, end) {
		if (!start || !end) return;
		// make a directions request using cycling profile
		// an arbitrary start will always be the same
		// only the end or destination will change
		const query = await fetch(
			`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
			{ method: "GET" }
		);
		const json = await query.json();
		const data = json.routes[0];
		const route = data.geometry.coordinates;
		const geojson = {
			type: "Feature",
			properties: {},
			geometry: {
				type: "LineString",
				coordinates: route,
			},
		};
		// if the route already exists on the map, we'll reset it using setData
		if (map.current.getSource("route")) {
			map.current.getSource("route").setData(geojson);
		}
		// otherwise, we'll make a new request
		else {
			map.current.addLayer({
				id: "route",
				type: "line",
				source: {
					type: "geojson",
					data: geojson,
				},
				layout: {
					"line-join": "round",
					"line-cap": "round",
				},
				paint: {
					"line-color": "#3887be",
					"line-width": 5,
					"line-opacity": 0.75,
				},
			});
		}
		const startMarker = new mapboxgl.Marker({ color: "#f00" })
			.setLngLat(start)
			.addTo(map.current);
		const endMarker = new mapboxgl.Marker({ color: "#0f0" })
			.setLngLat(end)
			.addTo(map.current);

		setLng(start[0]);
		setLat(start[1]);
	}

	return (
		<div
			className={`${
				showMap ? "flex" : "hidden"
			} justify-center items-center absolute top-0 left-0 bg-[#6b7280aa] w-[100vw] h-[100vh] z-50`}
		>
			<div
				className="bg-white w-[60%] h-fit rounded-xl flex flex-col"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="border-b flex flex-row justify-between">
					<div className="py-2 pl-5 flex flex-row">
						<SearchBox
							accessToken={process.env.REACT_APP_MAP_TOKEN}
							map={map.current}
							mapboxgl={mapboxgl}
							placeholder="Search for address"
							value={location}
							onChange={(d) => {
								setLocation(d);
							}}
							onRetrieve={(d) => {
								console.log(d);
								setAddress(d.features[0].properties.full_address);
								setLocationAddr(d.features[0].properties.full_address);
								const coords = d.features[0].geometry.coordinates;
								setLng(coords[0]);
								setLat(coords[1]);
								setCoords(coords);
								setZoom(14);
								marker.current = new Marker()
									.setLngLat(coords)
									.addTo(map.current);
							}}
							options={{
								language: "en",
								country: "gh",
							}}
						/>
						<div className="ml-3 h-full py-2">{address}</div>
					</div>
					<div className="py-2 pr-5">
						<IoCloseSharp
							className="h-full cursor-pointer"
							size={20}
							onClick={() => setShowMap(false)}
						/>
					</div>
				</div>
				<div className="h-[400px]" ref={mapContainer}></div>
				{route && (
					<div>
						<div className=" flex m-2">
							{" "}
							You: <FaLocationDot color="red" size={20} />
						</div>

						<div className=" flex m-2">
							{" "}
							Delivery Location: <FaLocationDot color="#5f5" size={20} />
						</div>
					</div>
				)}
				{!route && (
					<div className="mt-5 h-12 pl-5 border-t py-2 mb-2">
						<button
							className="border bg-blue-700 text-white q px-2 py-1 rounded-md shadow-md hover:shadow-xl"
							onClick={() => {
								navigator.geolocation.getCurrentPosition((position) => {
									setLng(position.coords.longitude);
									setLat(position.coords.latitude);
									setZoom(14);
									const marker = new Marker()
										.setLngLat([
											position.coords.longitude,
											position.coords.latitude,
										])
										.addTo(map.current);
								});
							}}
						>
							My Location
						</button>

						<button
							className="border bg-green-700 text-white q px-2 py-1 rounded-md shadow-md hover:shadow-xl"
							onClick={() => setShowMap(false)}
						>
							Use Location
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
