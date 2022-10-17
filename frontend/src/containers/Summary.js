import { CRS } from 'leaflet'
import React, { useState } from 'react'
// import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap, Marker, Popup, MapPlaceholder, ImageOverlay, LayersControl, CircleMarker, Rectangle, Polygon } from 'react-leaflet'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment"

const Summary = () => {
    const [value, onChange] = useState();

    const redOptions = { color: 'red' }
    const purpleOptions = { color: 'purple' }
    const fillRedOptions = { fillColor: 'red' }

    const dateNew = new Date(value)
    const day = dateNew.getDate()

    const mark = [
        '27-10-2022',
    ]

    console.log(dateNew, day)

    return (
        <div className='container mt-4'>
            <div className='d-flex justify-content-center my-3'>
                <Calendar onChange={onChange} value={value}
                tileClassName={({ date, view }) => {
                    if(mark.find(x=>x===moment(date).format("DD-MM-YYYY"))){
                     return  'highlight'
                    }
                  }}
              
              
                  tileDisabled={({ date }) => date.getDay() === 0}
              />
            </div>

            <MapContainer className='map' center={[3.455561, 101.216385]} zoom={13} scrollWheelZoom={true} style={{ height: 700, width: "100%", zIndex: 0, }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LayersControl position="topright">

                    <LayersControl.Overlay name="Field_4_NDVI_21Aug2020">
                        <ImageOverlay url='static/images/Field_4_NDVI_21Aug2020.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay checked name="Field_4_NDVI_30Sep2020">
                        <ImageOverlay url='static/images/Field_4_NDVI_30Sep2020.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Field_4_RECI_21Aug2020">
                        <ImageOverlay url='static/images/Field_4_RECI_21Aug2020.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Field_4_RECI_30Sep2020.png">
                        <ImageOverlay url='static/images/Field_4_RECI_30Sep2020.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="NDVI21aug">
                        <ImageOverlay url='static/images/NDVI21aug.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="NDVI30sep">
                        <ImageOverlay url='static/images/NDVI30sep.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="RECI21Aug">
                        <ImageOverlay url='static/images/RECI21Aug.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="RECI30Sep">
                        <ImageOverlay url='static/images/RECI30Sep.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} />
                    </LayersControl.Overlay>

                </LayersControl>

                {
                    day === 27 ? (
                        <Polygon positions={[[3.455772, 101.202838], [3.45361,101.20598], [3.465936, 101.213699], [3.467935, 101.210613]]} pathOptions={redOptions}>
                            <Popup>
                                Spraying
                            </Popup>
                        </Polygon>
                    ): null
                }

                {/* <ImageOverlay url='static/images/R.png' bounds={[[3.4279003779999999, 101.1870683000000071], [3.4809923000000000, 101.2472766770000021]]} /> */}

            </MapContainer>

        </div>

    )
}

export default Summary