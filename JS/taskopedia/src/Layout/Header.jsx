
const mainHeaderStyle = {
    color: "green",
    fontSize: "25px"
  }  

function MainHeader(){
    return (<h1 style={mainHeaderStyle}>Header component</h1>)
  }
  
  function SubHeader(){
    const whatAreWeBuilding = "React app";
    const numberOfDays = 10;
  
    return (<p style={{color: "red", fontSize: "25px"}}>We will be building: {whatAreWeBuilding} and it will take {numberOfDays} days</p>)
     //return (<p style="background-color: red">Sub Header</p>) // this will not work
  }
  
  export default function Header(){
    return (<div>
      <MainHeader/>
      <SubHeader/>
    </div>)
  }

// export default Header; // can be done this way too