/**
 * 实现模型的保存，通过序列化，储存为一个json文件
 * 模型的导出，以及材质的导出到同级目录下
 */
//加载babylon
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import * as fs from "fs";

/**
 * 保存结构
 * nodes：场景中存在的节点
 * materials：场景中对应的材质
 * TODO textures： 场景中的质感待开发
 */
interface SceneProperties {
  nodes: NodeProperties[];
  materials: MaterialProperties[];
  textures: TextureProperties[];
}
/**
 * 公共的属性
 */
interface BaseProperties {
  id: string;
  name: string;
  uniqueId: number;
  class: string;
}
/**
 * 场景节点的格式化
 */
interface NodeProperties extends BaseProperties {
  parent: string;
  isVisible: boolean;
  position: BABYLON.Vector3;
  rotation: BABYLON.Vector3;
  scaling: BABYLON.Vector3;
}

interface MaterialProperties extends BaseProperties {
  position: BABYLON.Vector3;
  rotation: BABYLON.Vector3;
  scaling: BABYLON.Vector3;
}
interface TextureProperties {
  //TODO 属性确定
  id: string;
}

//TODO 通过解析场景属性获取对应的信息并保存
export function saveScene(scene: BABYLON.Scene): void {
  console.log(scene);

  const sceneProperties: SceneProperties = {
    nodes: [],
    materials: [],
    textures: []
  };
  fs.writeFileSync("scene.json", JSON.stringify(sceneProperties));
}
