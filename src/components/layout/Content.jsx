import React from "react";
import './Content.css';
import { Routes, Route } from 'react-router-dom'
import Media from "../../view/DesignSystem/components/Media";
import Align from "../../view/DesignSystem/components/Align";
import Margin from "../../view/DesignSystem/components/Margin";
import Padding from "../../view/DesignSystem/components/Padding";
import Responsivo from "../../view/DesignSystem/components/Responsivo";

const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/media" element={ <Media/>}/>
      <Route path="/align" element={ <Align/>}/>
      <Route path="/margin" element={ <Margin/>}/>
      <Route path="/padding" element={ <Padding/>}/>
      <Route path="/responsivo" element={ <Responsivo/>}/>
    </Routes>
  </main>
)
export default Content;
