import React from "react";

const Trip = props => {
    return (
        <div class="trip-container">
            <div class="trip-time">
                <div>{props.startTime}</div>
                <div>{props.date}</div>
                <div>{props.endTime}</div>
            </div>
            <div class="trip-info">{props.startLocation} - {props.travelMethod} - {props.endLocation}</div>
            <div class="trip-price">{props.price}</div>
        </div>
    )
}

const TripHistory = () => {
    // TEMP DATA
    const tripData = [
        { 
            travelMethod: "Train (Express)",
            startLocation: "Summerhill Station",
            endLocation: "Central Station",
            startTime: "Tue Sep 15 2020 10:34:20 GMT+1000",
            endTime: "Tue Sep 15 2020 10:42:55 GMT+1000",
            price: "4"
        },
        { 
            travelMethod: "Train",
            startLocation: "Central Station",
            endLocation: "Summerhill Station",
            startTime: "Tue Sep 15 2020 15:02:19 GMT+1000",
            endTime: "Tue Sep 15 2020 15:26:07 GMT+1000",
            price: "4"
        },
        { 
            travelMethod: "Bus",
            startLocation: "UTS, Broadway, Ultimo",
            endLocation: "Dalhousie St at Ramsey St, Haberfield",
            startTime: "Tue Sep 12 2020 17:58:37 GMT+1000",
            endTime: "Tue Sep 12 2020 18:26:31 GMT+1000",
            price: "3.97"
        }
    ]

    return (
        <div class="trip-history-container">
            { 
                tripData.map( d => <Trip {... d} />)
            }
        </div>
    )

}

export default TripHistory;