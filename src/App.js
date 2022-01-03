
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {title:'Car insurance',amount:'23,000',date:new Date (2023,8,21)},
    {title:'Rent',amount:'20,000',date:new Date (2021,4,1)},
    {title:'Internet',amount:'3,000',date:new Date (2020,6,9)},
    {title:'Transport',amount:'4,000',date:new Date (2013,7,2)},
  ]
  return (
    <div>
      <h2>Let's get started!</h2>   
      <Expenses items={expenses} />
    </div>
  );
}


export default App;
