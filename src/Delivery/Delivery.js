import React from "react";
import { PickMap } from "../Component/PickMap";
import { useSearchParams } from "react-router-dom";

export default function Delivery() {
    const [params, setParams] = useSearchParams();
    return <div>
        <PickMap showMap={true} markedSpot={{
            lat: params.get("location").split(",")[1],
            lng: params.get("location").split(",")[0]
        }}/>
    </div>;
}