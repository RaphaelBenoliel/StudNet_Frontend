/* eslint max-len: ["error", { "code": 400 }] */
/* eslint-disable */
import React from 'react';
import ChatGpt from '../../icons/gptnew.png';
import Gool from '../../icons/gool.png';
import Zoom from '../../icons/zoom.webp';
import Jira from '../../icons/jira.png';
import GitHub from '../../icons/github.png';
import Qase from '../../icons/qase.png';
import StackOverFlow from '../../icons/stackoverflow.png';
import Translate from '../../icons/trans.png';
import Discord from '../../icons/Discord.png';
import Symbolab from '../../icons/favicon.png';
import Desmos from '../../icons/desmos_icon_square.png';
import Wikipedia from '../../icons/Wikipedia.png';
import Rapid from '../../icons/rapid.jpeg';
import CircleCi from '../../icons/circleci.png';
import Render from '../../icons/render.png';
import Compilers from '../../icons/compilers.png';
import Scholar from '../../icons/scholar.png';

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
      <img src={ChatGpt} alt="ChatGpt" title="Chatbot GPT (Generative Pre-trained Transformer) is a language model developed by OpenAI. It is designed to generate human-like responses in conversational contexts. GPT-based models, such as ChatGPT, utilize deep learning techniques to understand and generate human-like text based on the input received." style={{ width: 100, height: 100, margin: 30 }} />
      </a>
      <a href="https://www.gool.co.il/">
      <img src={Gool} alt="Gool" style={{ width: 100, height: 100, margin: 30 }} />
      </a>
      <a href="https://translate.google.com/?hl=iw">
      <img src={Translate} alt="Translate" style={{ width: 100, height: 100, margin: 20 }} />
      </a>
      <a href="https://www.wikipedia.org/">
      <img src={Wikipedia} alt="Wikipedia" style={{ width: 100, height: 100, margin: 30 }} />
      </a>  
      <a href="https://scholar.google.com/">
      <img src={Scholar} alt="Scholar" style={{ width: 150, height: 100, margin: 30 }} />
      </a>
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ color: 'white' }}>Math</h1>
      <br />
      <a href="https://he.symbolab.com/">
      <img src={Symbolab} alt="Symbolab" style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.desmos.com/">
      <img src={Desmos} alt="Desmos" style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.rapidtables.com/calc/math/binary-calculator.html">
      <img src={Rapid} alt="Rapid" style={{ width: 150, height: 100, margin: 30 }} />
    </a>   
    <br />
    <br />
    <br />
    <br />
    <h1 style={{ color: 'white' }}>Software</h1>
    <br />
    <a href="https://stackoverflow.com/">
      <img src={StackOverFlow} alt="StackOverFlow" style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.atlassian.com/software/jira">
      <img src={Jira} alt="Jira" style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    <a href="https://qase.io/">
      <img src={Qase} alt="Qase" style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    <a href="https://github.com/">
      <img src={GitHub} alt="GitHub" style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    <a href="https://circleci.com/">
      <img src={CircleCi} alt="Circlrci" style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://render.com/">
      <img src={Render} alt="Render" style={{ width: 120, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.codingninjas.com/codestudio/online-compiler">
      <img src={Compilers} alt="Compilers" style={{ width: 170, height: 100, margin: 30 }} />
    </a>    
    <br />
    <br />
    <br />
    <br />
    <h1 style={{ color: 'white' }}>Tools for online learning in groups</h1>
    <br />
    <a href="https://zoom.us/">
      <img src={Zoom} alt="Zoom" style={{ width: 100, height: 100, margin: 30 }} />
      </a>
    <a href="https://discord.com/">
      <img src={Discord} alt="Discord" style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    </div>
 );
}