

const Card = (props) => {
  return <div className='card-container'>
            <h2 className="name">{props.firstName} <br/> {props.lastName} </h2>
            <h6 className="work-place">{props.workPlace}</h6>
            <p className="first-address">{props.firstAddress}</p>
            <p className="second-address">{props.state}, <br/> {props.country}</p>
  </div>;
};

export default Card;
