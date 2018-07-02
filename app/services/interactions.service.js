export class InteractionsService {

    constructor(camera, renderer, scene) {
        this.camera = camera;
        this.renderer = renderer;
        this.scene = scene;
        this.onDragStart = null;
        this.onDragEnd = null;

        this.baseInteractions = this.initBaseInteractions();
        this.objectsInteractions = this.initObjectsInteractions();
    }

    initBaseInteractions() {
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

    initObjectsInteractions() {
        var objects = this.scene.children.filter(x => x.isDragable);
        if (!objects || objects.length == 0) {
            return null;
        }

        var dragControls = new THREE.DragControls(
            objects,
            this.camera,
            this.renderer.domElement);

        dragControls.addEventListener(
            'dragstart',
            (event) => {
                this.baseInteractions.enabled = false;
                if (this.onDragStart) {
                    this.onDragStart(event);
                }
            }
        );

        dragControls.addEventListener(
            'dragend',
            (event) => {
                this.baseInteractions.enabled = true;
                if (this.onDragEnd) {
                    this.onDragEnd(event);
                }
            }
        );

        return dragControls;
    }

    trackSpaceObjects() {
        this.initObjectsInteractions();
    }

    updateControls() {
        this.baseInteractions.update();
    }
}