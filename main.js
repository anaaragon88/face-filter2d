import { loadGLTF, loadTexture } from "./libs/loader.js"
const THREE = window.MINDAR.FACE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async () => {
    const mindarThree = new window.MINDAR.FACE.MindARThree({
      container: document.body,

    });
    const { renderer, scene, camera } = mindarThree;

    /*
        const geometry = new THREE.SphereGeometry(0.1, 32, 16);
        const material = new THREE.MeshBasicMaterial({ color: "red", transparent: true, opacity: 0.5 });
        const sphere = new THREE.Mesh(geometry, material);
    
        const anchor = mindarThree.addAnchor(159);
        anchor.group.add(sphere);
        */

    /*
        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);
    
        const glasses = await loadGLTF('./assets/lentes.gltf');
        glasses.scene.scale.set(6, 6, 6);
    
        const anchor = mindarThree.addAnchor(1);
        anchor.group.add(glasses.scene);
*/


    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const faceMesh = mindarThree.addFaceMesh();
    const texture = await loadTexture('./assets/Face_Mask_Template.png');

    faceMesh.material.map = texture;
    faceMesh.material.transparent = true;

    faceMesh.material.needsUpdate = true;
    scene.add(faceMesh);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
