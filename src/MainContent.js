import message from './Message.js';

const names = ["James","Rowen","Jessie","Tims","Maki","Eunice","Mark"];
  const nameList = names.map((item) => <li>{item}</li>);
  const greetings = <h1>{message}</h1>;

  const vehicles = ["mustang","F-150","expedition"];
  const [car, truck, suv] = vehicles;

  const [boy1, boy2, boy3,,boy4,,boy5] = names;
  const [,,,girl1,,girl2] = names;

  const apple = {
    color: "red",
    shape: "round",
    quantity: 10,
    list: ['value1','value2'],
  }

  const greenApple = {
    color: "green",
    price: 25,
    list: ['value3','value4'],
  }

  let {color: appleColor, shape: appleShape} = apple;

  let setOfNumber1 = [23,34,56,34,5,8,11,43];
  let setOfNumber2 = [23,34,56,34,5,8,11,43];
  let combineNumbers = [...setOfNumber1, ...setOfNumber2].map((number) => <div>{number}</div>);
  let [first, second, ...remaining] = setOfNumber1;

  let fruitData = {...apple,...greenApple}

  let locked = 1;
  let canChange = locked !== 1 ? true : false;
  console.log(canChange);

  let speed = 10;
  let speedWarning = speed >= 120 ? speed >= 200 ? 'Highway to hell' :'Too Fast' : speed >= 80 ? 'Fast' : speed >= 30 ? 'Safe driving' : 'OK';


  // condition ? value if true : value if false
  //if(condition, if(condition, value if true, value if false), if(condition, value if true, value if false))



function MainContent(){
    return (
        <div>
            {speedWarning}
            <div className="banner">{greetings}</div>
            <section>
                <ul>
                    {nameList}
                    {names.map((item) => <li>{item}</li>)}
                </ul>    
                <p>{car}, 
                {truck}, 
                {suv}
                </p>
            </section>

            <section>
                <form>
                    <input type="text" className="form-control"/>
                </form>
            </section>
            
        <div className="row">
            <div className="col-sm-6">
                <p>{boy1}, {boy2}, {boy3}, {boy4}, {boy5}</p>
                <p>{girl1}, {girl2} </p>
                <p>{appleColor}, {appleShape}</p>
                <p>{combineNumbers}</p>
            </div>
            <div className="col-sm-6">
                <p>{first}</p>
                <p>{second}</p>
                <p>{remaining}</p>
                <p>{fruitData.color}, {fruitData.price}, {fruitData.quantity}, {fruitData.shape},{fruitData.list}</p>
            </div>
        </div>
        </div>
    );
}

export default MainContent;