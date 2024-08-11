import {Paper} from "@material-ui/core"
import React, { useState } from "react"
import styled from 'styled-components';
import DracoSelector from "../components/DracoSelector"
import MaterialSelector from "../components/MaterialSelector"
import MeshSelector from "../components/MeshSelector"
import NodeSelector from "../components/NodeSelector"
import ProductSelector from "../components/ProductSelector"
import Viewer3D from "../components/Viewer3D"
import MaterialSettings from "../components/MaterialSettings/MaterialSettings"
import TogglerSelector from "../components/TogglerSelector";
import BackgroundColorSelector from "../components/BackgroundColorSelector";
import TogglerButten from "../components/TogglerButten";
export default function Home() {
  // const [isOpen,setIsOpen]=useState(false)
  const [color,setColor]=useState('white')
  return (
    <>
      <StyledPaper>
        {/* <DracoSelector /> */}
        <ProductSelector />
        <NodeSelector />
        {/* <MeshSelector /> */}
       <BackgroundColorSelector/>
       <TogglerButten/>
      </StyledPaper>
   
   {/* {isOpen && (
       <TogglerSelectorHolder>
       <TogglerSelector/>
      </TogglerSelectorHolder>
   )} */}
 
    
    
      {/* <MaterialSettingHolder>
        <MaterialSettings />
      </MaterialSettingHolder> */}
      <MaterialSelectHolder>
        <MaterialSelector />
      </MaterialSelectHolder>
      <Viewer3D  />
    </>
  )
}

const StyledPaper = styled(Paper)`
    padding: 0.5em;
    position: absolute;
    top: 1em;
    left: 1em;
    z-index: 1;
    width: min-content;
`

const MaterialSettingHolder = styled.div`
  padding: 1em;
    position: absolute;
    top: 1em;
    right: 2em;
    z-index: 1;
`

const MaterialSelectHolder = styled.div`
    padding: 0.5em;
    position: absolute;
    bottom: 1em;
    left: 1em;
    z-index: 1;
`



const TogglerSelectorHolder =styled.div `

    padding: 0.5em;
    position: absolute;
    z-index: 1;
    background-color: white;
    height: 100%;
    width: 30%;

`
