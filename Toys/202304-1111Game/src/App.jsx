import * as THREE from "three";
import REACT from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { SanContext } from "./Three/San";
import { ReadGame } from "./Three/ReadGame";

import { State } from "./Render/State";
import { Intro } from "./Render/Intro";
import { OverlayBottom, OverlayTop } from "./Render/Overlay";

function App() {
  const [refresh, setRefresh] = REACT.useState(0);
  const [showIntro, setShow] = REACT.useState(true);

  const dataRef = REACT.useRef();
  const controllerRef = REACT.useRef();
  const canvasRef = REACT.useRef();

  const san = REACT.useContext(SanContext);

  REACT.useEffect(() => {
    console.log("Initializing App");
    san.init(canvasRef.current);
    san.scene.background = new THREE.Color(0x333333);
    fetch("OPO.graph.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dataRef.current = data;
        controllerRef.current = ReadGame(data, san.asyncAdd());

        // const t = new Traversal(data, ColorArray, setState)
        san.updator.add((d) => {
          controllerRef.current.update();
        });

        setRefresh(refresh + 1);
      });

    const control = new OrbitControls(san.camera, san.canvas);
    control.autoRotate = true;
    control.autoRotateSpeed = 0.5;
    san.updator.add((d) => {
      control.update(d);
    });

    return () => {
      console.log("Disposing App");
      control.dispose();
      san.dispose();
    };
  }, []);

  let activeList = [];
  let nextList = [];
  let add = () => {
    console.log("Loading");
  };

  let hover = () => {};
  let pop = () => {};
  if (controllerRef.current) {
    const controller = controllerRef.current;
    activeList = controller.getActive();
    nextList = controller.getNext();

    add = (idx) => {
      // console.log("App adding", idx)
      controller.add(idx);
      setRefresh(refresh + 1);
    };

    hover = (idx) => {
      // console.log("Setting head", idx)
      controller.setHead(idx);
    };

    pop = () => {
      console.log("poping");
      controller.pop();
      setRefresh(refresh + 1);
    };
  }

  return (
    <>
      <canvas ref={canvasRef} />
      <OverlayTop />
      <OverlayBottom />
      <div className="container">
        <div className="controller overflow-auto">
          <div className="text-center n-select">—— Stack ——</div>
          <hr />
          <div className="overflow-auto h-10">
            {activeList.map((item, i) => (
              <State s={item.ste} idx={item.idx} key={i} hover={hover} />
            ))}
          </div>
        </div>
        <div className="manual">
          <div>
            <hr />
            <div className="text-center">
              <button className="btm p-5 br-20 n-select" onClick={pop}>
                Pop
              </button>
            </div>
            <hr />
            <div className="text-center n-select">—— Push ——</div>
            <hr />
            {nextList.map((item, i) => (
              <State
                s={item.ste}
                idx={item.idx}
                key={i}
                click={add}
                hover={hover}
              />
            ))}
          </div>
          <hr />
          <div className="text-center">
            <button
              className="btm br-20 p-5"
              onClick={() => {
                setShow(!showIntro);
              }}
            >
              Info
            </button>
          </div>
        </div>
      </div>
      <div className="intro overflow-auto" hidden={!showIntro}>
        <Intro />
        <div className="text-center mt-2">
          <button
            className="btm br-20 p-1"
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
