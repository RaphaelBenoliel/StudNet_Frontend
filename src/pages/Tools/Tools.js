/* eslint max-len: ["error", { "code": 400 }] */
/* eslint-disable */
import React from 'react';
import ChatGpt from '../../icons/chatgpt.webp';
import Gool from '../../icons/gool.png';
import Zoom from '../../icons/zoom.webp';
import Jira from '../../icons/jira.png';
import GitHub from '../../icons/github.png';
import Qase from '../../icons/qase.png';
import StackOverFlow from '../../icons/stackoverflow.png';
import Translate from '../../icons/translate.png';
import Discord from '../../icons/Discord.png';
import Symbolab from '../../icons/favicon.png';
import Desmos from '../../icons/desmos_icon_square.png';
import Wikipedia from '../../icons/Wikipedia.png';


export default function Tools() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#0d1116' }}>
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ color: 'white' }}>General</h1>
      <br />
      <a href="https://openai.com/blog/chatgpt">
      <img src={ChatGpt} alt="ChatGpt" style={{ width: 200, height: 200, margin: 30 }} />
      </a>
      <a href="https://www.gool.co.il/">
      <img src={Gool} alt="Gool" style={{ width: 200, height: 200, margin: 30 }} />
      </a>
      <a href="https://translate.google.com/?hl=iw">
      <img src={Translate} alt="Translate" style={{ width: 200, height: 200, margin: 20 }} />
      </a>
      <a href="https://www.wikipedia.org/">
      <img src={Wikipedia} alt="Wikipedia" style={{ width: 200, height: 200, margin: 30 }} />
      </a>  
      <a href="https://zoom.us/">
      <img src={Zoom} alt="Zoom" style={{ width: 200, height: 200, margin: 30 }} />
      </a>
      <br />
      <br />
      <br />
      <br />
      <a href="https://www.atlassian.com/software/jira">
      <img src={Jira} alt="Jira" style={{ width: 200, height: 200, margin: 30 }} />
      </a>
    <a href="https://github.com/">
      <img src={GitHub} alt="GitHub" style={{ width: 200, height: 200, margin: 30 }} />
    </a>
    <a href="https://qase.io/">
      <img src={Qase} alt="Qase" style={{ width: 200, height: 200, margin: 30 }} />
    </a>
    <br />
    <br />
    <br />
    <br />
    <a href="https://stackoverflow.com/">
      <img src={StackOverFlow} alt="StackOverFlow" style={{ width: 200, height: 200, margin: 20 }} />
    </a>
    <a href="https://translate.google.com/?hl=iw">
      <img src={Translate} alt="Translate" style={{ width: 200, height: 200, margin: 20 }} />
    </a>
    <a href="https://discord.com/">
      <img src={Discord} alt="Discord" style={{ width: 200, height: 200, margin: 30 }} />
    </a>
    <br />
    <br />
    <br />
    <br />
    <a href="https://he.symbolab.com/">
      <img src={Symbolab} alt="Symbolab" style={{ width: 200, height: 200, margin: 20 }} />
    </a>
    <a href="https://www.desmos.com/">
      <img src={Desmos} alt="Desmos" style={{ width: 200, height: 200, margin: 20 }} />
    </a>
    <a href="https://www.wikipedia.org/">
      <img src={Wikipedia} alt="Wikipedia" style={{ width: 200, height: 200, margin: 30 }} />
    </a>    
    </div>
 );
}