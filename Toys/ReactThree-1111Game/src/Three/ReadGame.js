import * as THREE from "three";
import LineColorVertexGlsl from "../LineColor/LineColorVertex.glsl";
import LineColorFragmentGlsl from "../LineColor/LineColorFragment.glsl";
import { Controller } from "./Controller";

function ReadGame(data, syncAdd) {
  const node_count = data.length;
  // const edge_count = 0

  const PositionArray = new Float32Array(node_count * 3);
  const ColorArray = new Float32Array(node_count * 4);
  const index = [];
  const reader = new THREE.Vector3();
  const colorWriter = new THREE.Vector4();
  const a = 0.13;

  for (let i = 0; i < node_count; ++i) {
    const i3 = i * 3;
    const i4 = i * 4;
    const curr = data[i];

    reader.fromArray(curr.pos);
    reader.toArray(PositionArray, i3);

    if (curr.dtm == 0) {
      colorWriter.set(0.5, 0.7, 0.5, a);
    } else {
      if (curr.win == 0) {
        colorWriter.set(0, 0, 1, a);
      } else {
        colorWriter.set(1, 0, 0, a);
      }
    }

    colorWriter.toArray(ColorArray, i4);

    const edges = curr.nxt;
    for (let edge = 0; edge < edges.length; ++edge) {
      index.push(i);
      index.push(edges[edge]);
    }
  }

  const Geometry = new THREE.BufferGeometry();
  Geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(PositionArray, 3)
  );
  const ColorAttribute = new THREE.BufferAttribute(ColorArray, 4);
  Geometry.setAttribute("color", ColorAttribute);
  Geometry.setIndex(index);

  // const Material = new THREE.LineBasicMaterial({color: 'red', transparent: true, opacity: 0.3})
  const Material = new THREE.ShaderMaterial({
    vertexShader: LineColorVertexGlsl,
    fragmentShader: LineColorFragmentGlsl,
    transparent: true,
  });

  const PointPositionArray = new Float32Array([0, 0, 0]);
  const PointPositionAttribute = new THREE.BufferAttribute(
    PointPositionArray,
    3
  );
  const PointGeometry = new THREE.BufferGeometry();
  PointGeometry.setAttribute("position", PointPositionAttribute);
  const PointMaterial = new THREE.PointsMaterial({
    color: 0xff0000,
    size: 0.1,
  });
  const Point = new THREE.Points(PointGeometry, PointMaterial);

  const Obj = new THREE.LineSegments(Geometry, Material);

  const group = new THREE.Group();
  group.add(Obj);
  group.add(Point);
  group.scale.multiplyScalar(10);

  syncAdd(group);

  return new Controller(
    data,
    ColorAttribute,
    PointPositionAttribute,
    PointMaterial
  );
}

export { ReadGame };
