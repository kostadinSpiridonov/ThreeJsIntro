export class CameraDefinitions {
    static getBaseCamera() {
        var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.z = 1000;

        return camera;
    }
}