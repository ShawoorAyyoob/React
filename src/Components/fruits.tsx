import './fruits.css';

interface Props{
item : string[];
title: string;
}
function Fruits(props:Props) {
  
  return (
    <div>
      <h1>Fruit Section</h1>
      <ul className="list-group">
        {props.item.map((fruit) => (
          <li className="list-group-item">{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
export default Fruits;