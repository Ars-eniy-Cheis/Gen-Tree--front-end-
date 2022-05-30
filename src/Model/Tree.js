import { ModalWindow } from '../Components/ModalWindows/ModalWindow';

import createEngine, {  
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';


import '../pages/Styles/Diagram.css';

let nameNode = 'You';
let delimiter = 0.5;

function addParent(name, setModalActive, pos, title, model, engine){
    let child = getNodeByName(nameNode, model);
    //console.log('child: ', child.position.x);
    let yPos = (child.position.y + pos*50);
    let xPos = child.position.x - 200;
    delimiter -= 0.001;
    createNodeElement(name, xPos, yPos, setModalActive, model, engine);
    let parent = getNodeByName(name, model);
    let parentPort = parent.addOutPort('Child');
    console.log(nameNode);
    //child.setParent(mother);
    let childPort = child.addInPort(title);
    let link = parentPort.link(childPort);
    console.log(link);
    link.setColor('black');
  }
  
  
  function getNodeByName(name, model){
    let nodes = model.getNodes();
    for(let i = 0; i < nodes.length; i++){
      if(nodes[i].options.name === name){
        return nodes[i];
      }
    }
    return '';
  }
  
  function CreateNode(props){
    createNodeElement(props.name, props.width, props.height, props.setModalActive, props.model, props.engine);
    return (
      <div>
        <CanvasWidget className="srd-demo-canvas" engine={props.engine} />
      </div>
    );
  }
  
  function createNodeElement(name, width, height, setModalActive, model, engine){
    let node = new DefaultNodeModel({
      name: name,
      color: 'rgb(0,192,255)'
    });
    node.setPosition(width, height);
    node.registerListener({
      selectionChanged: function(e){
        nameNode = e.entity.options.name;
        setModalActive(true);
      },
  });
  
    model.addNode(node);
    engine.setModel(model);
  }

  export{CreateNode, addParent}