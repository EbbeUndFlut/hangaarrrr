const Flugzeug = (props) => {
    return (
        <>
            <h1>Flugzeug</h1>
            <p>{props.flugzeug._id}</p>
            <p>{props.flugzeug.hersteller}</p>
            <p>{props.flugzeug.Baujahr}</p>
        </>
    )
}


export default Flugzeug;