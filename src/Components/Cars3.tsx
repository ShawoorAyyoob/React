import Car from "../Models/Cars";
interface Props {
  list: Car[];
}
function Cars(props: Props) {
  return (
    <div>
      <h1>Hot Wheels</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th >Brand</th>
            <th >Model</th>
            <th >Year</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((car) => (
            <tr key={car.id}>
              <td>{car.Brand}</td>
               <td>{car.Model}</td> 
               <td>{car.Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Cars;
