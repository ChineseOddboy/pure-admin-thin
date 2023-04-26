import * as BABYLON from "@babylonjs/core/Legacy/legacy";
export class Playground {
  engine: BABYLON.Engine;
  scene: BABYLON.Scene;

  constructor(readonly canvas: HTMLCanvasElement) {
    this.engine = new BABYLON.Engine(canvas);
    window.addEventListener("resize", () => {
      this.engine.resize();
    });
    this.scene = createScene(this.engine, this.canvas);
  }

  debug(debugOn = true) {
    if (debugOn) {
      this.scene.debugLayer.show({ overlay: true });
    } else {
      this.scene.debugLayer.hide();
    }
  }

  run() {
    this.debug(true);
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }
  addSoheres(name: string, editobj: object, scene: BABYLON.Scene) {
    addSohere(name, editobj, scene);
    this.scene.render();
  }
}

const createScene = function (
  engine: BABYLON.Engine,
  canvas: HTMLCanvasElement
) {
  // this is the default code from the playground:

  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new BABYLON.Scene(engine);

  // This creates and positions a free camera (non-mesh)
  const camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene
  );

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'sphere' shape.
  const sphere = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 2, segments: 32 },
    scene
  );

  // Move the sphere upward 1/2 its height
  sphere.position.y = 1;

  // Our built-in 'ground' shape.
  const ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene
  );

  sphere.parent = ground;

  return scene;
};

const addSohere = function (
  name: string,
  editobj: object,
  scene: BABYLON.Scene
) {
  const sphere = BABYLON.MeshBuilder.CreateSphere(name, editobj, scene);
  sphere.position.y = 1;
};
