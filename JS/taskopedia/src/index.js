import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';
import Student from './Layout/Student';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){
  return (<div>
    <p>Hello first component paragraph</p>
    <Student fullName = "Angela" yearsOfExperience = {3}/>
  <Student fullName = "Angela Dean" yearsOfExperience = {30}/>
  </div>);
}

function Footer(){
  //return (<footer class="bg-primary-subtle">This is the footer</footer>) // this would work but an error will stay on the console, class is a JS reserved word, use className instead
  return (<footer className="bg-primary-subtle">This is the footer</footer>)
}

//root.render(MainComponent()); // not a good way to render
root.render(<div>
  <Header/>
  <MainBody/>
  
  <Footer/>
  </div>); // best way, however the component name must be Camelcase (first letter capital)
// root.render(
//   <React.StrictMode>
//   </React.StrictMode>
// );
// rules of JSX
// component names must start with capital letters (PascalName)
// props must start with small letters (camel case)
// class attribute will be called className in jsx