import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {MainPage} from './pages/MainPage'
import {NoRegister} from './pages/NoRegisterPage'
import {Login} from './pages/LoginPage'


const root = ReactDOM.createRoot(document.getElementById('root'));

const mainPage = (<MainPage/>);
const noRegister = (<NoRegister/>)
const login = (<Login/>)
const router = (

  <div>
  <Router>
    <div>
      <Routes>
        <Route path="/" element={mainPage} />
        <Route path="/NoRegistration" element={noRegister} />
        <Route path="/Login" element={login} />
        <Route path="*" element={mainPage} />
      </Routes>
    </div>
  </Router>
  </div>
);

root.render(router);

/*



// create an instance of the engine with all the defaults
const engine = createEngine();
// node 1
const personsNode = new DefaultNodeModel({
  name: 'Your Name',
  color: 'rgb(0,192,255)',
});
personsNode.setPosition(100, 100);

let mothersPort = personsNode.addInPort('Mother');
let fathersPort = personsNode.addOutPort('Father');
let childPort = personsNode.addOutPort('Children');

/* link them 
const link = port1.link(portIn);
link.setColor('black');

const model = new DiagramModel();
model.addAll(personsNode);

engine.setModel(model);

function addNode(){
  console.log('new node');
  let node = new DefaultNodeModel({
    name: 'Name',
    color: 'rgb(0,192,255)'
  });
  let mothersPort = node.addInPort('Mother');
  let fathersPort = node.addOutPort('Father');
  let childPortM = node.addOutPort('Children (for mother)');
  let childPortF = node.addInPort('Children (for father)');
  node.setPosition(300, 300);
  model.addNode(node);
  engine.setModel(model);
}
*/

/*
const element = ( 
  <button onClick={()=>{ addNode(); }} >
         Add Node
  </button>
);
*/

/*
const element = (
  <CanvasWidget className="srd-demo-canvas" engine={engine} />
);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



reportWebVitals();
