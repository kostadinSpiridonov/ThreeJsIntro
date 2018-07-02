import { RenderService } from "../services/render.service";
import { InteractionsService } from "../services/interactions.service";
import { ObjectsInteractionsService } from "../services/objects.interactions.service";

export class Space {

    constructor(camera, scene, debugCamera, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.debugCamera = debugCamera;
        this.renderer = renderer;
        this.renderService = new RenderService(this.renderer, this.scene, this.camera);
        this.interactionsService = new InteractionsService(this.camera, this.renderer, this.scene)
        this.objectInteractionsService = new ObjectsInteractionsService(this.scene);

        this.init();
    }

    init() {
        this.registerEvents();
        this.renderService.run();

        this.scene.add(this.camera);
        this.scene.add(new THREE.CameraHelper(this.debugCamera));
    }

    registerEvents() {
        window.addEventListener('resize', this.onWindowResize, false);
        this.interactionsService.onDragEnd = this.onObjectDragEnd.bind(this);
        this.interactionsService.onDragStart = this.onObjectDragStart.bind(this);
        this.renderService.onRender = this.onRender.bind(this);
    }

    onObjectDragEnd(event) {
        this.objectInteractionsService.onObjectDragEnd(event.object);
    }

    onObjectDragStart(evebt) {

    }

    addObject(object) {
        this.scene.add(object.getMesh());
        this.interactionsService.trackSpaceObjects();
    }

    onWindowResize() {
        this.space.camera.aspect = window.innerWidth / window.innerHeight;
        this.space.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onRender() {
        this.interactionsService.updateControls();
    }
}