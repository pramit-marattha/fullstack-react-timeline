import React from 'react'
import {Timeline,themes, createTheme} from '@merc/react-timeline';
import Allproject from "./Allproject";

const customTheme = createTheme(themes.default, {
    "timeline": {
      "backgroundColor": "#0C1734",
      "fontSize": "5rem",
      // "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n  Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
      'fontFamily': 'Finger Paint, cursive',
      "a": {
        "color": "yellow"
      }
    },
    "timelineTrack": {
      "left": "50%",
      "width": "3px",
      "height": "100%",
      "backgroundColor": "#C6C5E7",
      "content": "''",
      "background": "linear-gradient(to bottom,  #d85bcf 0%,#f0799d 100%);"
    },
    "marker": {
      "backgroundColor": "#C6C5E7",
      "border": "2px solid #fff",
      "borderRadius": "50%",
      "width": "16px",
      "height": "16px",
      "zIndex": 100,
      "left": "1px"
    },
    "card": {
      "borderRadius": "4px",
      "backgroundColor": "#1B2944",
      "color": "#fff",
      "padding": "10px",
      "boxShadow": "0 4px 6px 0 hsla(0, 0%, 0%, 0.9)",
      "width": "100%",
      "maxWidth": "560px",
      "a": {
        "color": "#EC24B5"
      }
    },
    "button": {
      "fontSize": "14px",
      "backgroundColor": "#08BE95",
      "borderRadius": "4px",
      "padding": "4px",
      "color": "#fff",
      "margin": "10px 5px 5px 0",
      "border": "none",
      "cursor": "pointer"
    },
    "urlButton": {
      "fontSize": "14px",
      "backgroundColor": "rebeccapurple",
      "borderRadius": "4px",
      "padding": "6px",
      "margin": "10px 5px 5px 0",
      "border": "none",
      "color": "#fff"
    },
    "date": {
      "backgroundColor": "#9221C2",
      "padding": "6px",
      "color": "#fff",
      "borderRadius": "4px",
      "fontWeight": 500,
      "fontSize": ".85rem"
    },
    "imageAtom": {
      "objectFit": "cover",
      "overflow": "hidden",
      "width": "100%",
      "maxHeight": "400px"
    },
    "imageCredit": {
      "marginTop": "10px",
      "fontSize": "0.85rem"
    },
    "imageText": {
      "marginBottom": "10px",
      "fontSize": "1rem"
    },
    "youTubeText": {
      "marginBottom": "10px",
      "fontSize": "1rem"
    },
    "events": {
      "padding": "10px"
    },
    "event": {
      "marginBottom": "20px"
    },
    "textAtom": {}
  });

export default function Timelinecomp() {
  return (
    <>
    <h1 className="heading__style">Fullstack Projects with react and backend with various stacks</h1>
    <div className="image__stretch">
    {/* <img className="image__top" src="https://user-images.githubusercontent.com/37651620/95001409-7b5ad000-05e9-11eb-80ae-21a41ac9afef.png" alt="poster"/> */}
    </div>
    <Timeline theme={customTheme}>
     <Allproject/>
    </Timeline>
    </>
  );
}