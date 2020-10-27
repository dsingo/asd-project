import React from "react";
import './TripHistory.scss';
import TrainIcon from '../../Images/train.svg';
import BusIcon from '../../Images/bus.svg';

const Trip = props => {
    return (
        <div className="trip-container">
            <div className="trip-start">
                <div>{props.startTime}</div>
                <div>{props.startLocation}</div>
            </div>
            <div className="trip-info">
                { props.travelMethod === "Train" && <div><img src={ TrainIcon } className="travel-method-icon" alt="icon meaning train" /></div> }
                { props.travelMethod === "Bus" && <div><img src={ BusIcon } className="travel-method-icon" alt="icon meaning bus" /></div> }
                <div>{props.travelType}</div>
            </div>
            <div className="trip-end">
                <div>{props.endTime}</div>
                <div>{props.endLocation}</div>
            </div>

            <div className="trip-price">{props.price}</div>
        </div>
    )
}

const TripHistory = () => {
    // TEMP DATA
    const tripData = [
        { 
            travelMethod: "Train",
            travelType: "Express",
            startLocation: "Summerhill Station Platform 2",
            endLocation: "Central Station Platform 8",
            startTime: "Tue Sep 15 2020 10:34:20 GMT+1000",
            endTime: "Tue Sep 15 2020 10:42:55 GMT+1000",
            price: "$4.00"
        },
        { 
            travelMethod: "Train",
            travelType: "All Stops",
            startLocation: "Central Station Platform 7",
            endLocation: "Summerhill Station Platform 1",
            startTime: "Tue Sep 15 2020 15:02:19 GMT+1000",
            endTime: "Tue Sep 15 2020 15:26:07 GMT+1000",
            price: "$4.00"
        },
        { 
            travelMethod: "Bus",
            travelType: "438",
            startLocation: "UTS, Broadway, Ultimo",
            endLocation: "Dalhousie St at Ramsey St, Haberfield",
            startTime: "Tue Sep 12 2020 17:58:37 GMT+1000",
            endTime: "Tue Sep 12 2020 18:26:31 GMT+1000",
            price: "$3.97"
        }
    ]

    return (
        <div className="trip-history-container">
            { 
                tripData.map( (d, i) => <Trip key={i} {... d} />)
            }
        </div>
    )

}

export default TripHistory;