export class DragService {

    constructor(camera, renderer, objects) {
        this.camera = camera;
        this.renderer = renderer;
        this.objects = objects.map(a => Object.assign({}, a));;

        this.controls = this.getControls();
        this.dragControls = this.getDragControls();
    }

    addTrackableObject(object) {
        this.objects.push(object.getMesh());
        this.getDragControls();
    }

    getDragControls() {
        if (!this.objects || this.objects.length == 0) {
            return null;
        }

        var dragControls = new THREE.DragControls(this.objects, this.camera, this.renderer.domElement);

        dragControls.addEventListener(
            'dragstart',
            () => {
                this.controls.enabled = false;
            }
        );

        dragControls.addEventListener(
            'dragend',
            () => {
                this.controls.enabled = true;
            }
        );

        return dragControls;
    }

    getControls() {
        var controls = new THREE.TrackballControls(this.camera);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        return controls;
    }
}