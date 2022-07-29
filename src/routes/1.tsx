import { useEffect, useRef } from "react";
import Layout from "../components/layout";
import Matter from "matter-js";

const run = (canvas: HTMLCanvasElement) => {
  // module aliases
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  var render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: 401,
      height: 400,
      background: "transparent",
      wireframes: false,
    },
  });

  // create two boxes and a ground
  var sun = Bodies.circle(250, 0, 80, {
    mass: 30000,
    render: { fillStyle: "darkorange" },
  });
  var mount = Bodies.polygon(200, 500, 3, 400 / Math.sqrt(3), {
    isStatic: true,
    angle: -Math.PI / 6,
    render: { fillStyle: "#003e6e" },
  });
  var mount2 = Bodies.polygon(300, 400, 3, 400 / Math.sqrt(3), {
    isStatic: true,
    angle: -Math.PI / 6,
    render: { fillStyle: "#006dc0" },
  });
  var ground = Bodies.rectangle(200, 400, 400, 10, {
    isStatic: true,
    render: { fillStyle: "#26a62f" },
  });
  var car = Bodies.trapezoid(60, 390, 30, 10, 0.2, {
    render: { fillStyle: "#e3e3e3" },
  });

  // add all of the bodies to the world
  Composite.add(engine.world, [sun, mount, mount2, ground, car]);

  // run the renderer
  Render.run(render);

  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);
};

const DayOne: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    ref.current && run(ref.current);
  }, []);

  return (
    <Layout>
      <canvas className="m-auto border border-gray-500" ref={ref} />
    </Layout>
  );
};

export default DayOne;
