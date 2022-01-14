import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div>
            <h1>OOOOPS!!</h1>
            <p>Det ser ud som om du har ramt en ressource, som ikke er tilgængelig...</p>
            <p>Klik <Link to='/'>her</Link> for at vende tilbage til forsiden</p>
        </div>
    );
}
 
export default NoMatch;