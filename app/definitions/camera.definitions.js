export class CameraDefinitions {
    static getBaseCamera() {
        var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.z = 1000;
        camera.position.x = -80;
        camera.position.y = 250;
        return camera;
    }

    static getDebugCamera() {
        return new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    }
}