export class SceneDefinitions {
    static getBaseScene() {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);
        scene.add(new THREE.AmbientLight(0x505050));

        return scene;
    }
}