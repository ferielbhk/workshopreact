import { useParams } from "react-router-dom";

function EventDetails(){
    const {title ,id } = useParams();
    console.log(title);
    console.log(id);
    return (
        <div>
        <h1>Event Details</h1>
        <p>Title: {name}</p>
        <p>description: {description}</p>
        <p>Price: {price}</p>
        <img src={image} alt="Event" />
      </div>
    );
};
export default EventDetails;