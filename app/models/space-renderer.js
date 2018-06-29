import { Space } from './space.js';
import { DragService } from './../services/drag.service.js'

export class SpaceRenderer {

    constructor(space) {
        this.renderer = this.getRenderer();
        this.space = space;
        this.dragService = new DragService(this.space.camera, this.renderer, this.space.getObjects());
        this.registerEvents();
    }

    registerEvents() {
        window.addEventListener('resize', this.onWindowResize, false);
        this.space.onObjectAdd = this.onObjectAdded.bind(this);
    }

    onObjectAdded(object) {
        this.dragService.addTrackableObject(object);
    }

    run() {
        this.appendRendererToHtml();
        this.startRendering();
    }

    startRendering() {
        requestAnimationFrame(() => {
            this.startRendering();
        });

        this.render();
    }

    render() {
        this.renderer.render(this.space.scene, this.space.camera);
    }

    appendRendererToHtml() {
        var htmlContainer = document.createElement('div');
        document.body.appendChild(htmlContainer);
        htmlContainer.appendChild(this.renderer.domElement);
    }

    onWindowResize() {
        this.space.camera.aspect = window.innerWidth / window.innerHeight;
        this.space.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    getRenderer() {
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;

        return renderer;
    }
}