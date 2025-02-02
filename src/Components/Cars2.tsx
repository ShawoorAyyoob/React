function Cars() {
  const cars = [
    {
      id: 1,
      Brand: "Toyota",
      Model: "Camry",
      Year: 2024,
    },
    {
      id: 2,
      Brand: "Nissan",
      Model: "Patrol",
      Year: 2024,
    },
    {
      id: 3,
      Brand: "Lexus",
      Model: "Rc500",
      Year: 2024,
    },
    {
      id: 4,
      Brand: "Range",
      Model: "Defender",
      Year: 2024,
    },
  ];
  return (
    <div>
      <h1>Popular Cars</h1>
      <table className="table table-striped table-hover">
        {cars.map((car) => (
          <tr key={car.id}>
            {car.Brand} - {car.Model} -
            {car.Year}
          </tr>
        ))
      }
      </table>

    </div>
  )
}

export default Cars;