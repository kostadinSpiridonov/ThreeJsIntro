export class RenderService {

    constructor(renderer, scene, camera) {
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.onRender = null;
    }

    run() {
        this.appendRendererToHtml();
        this.startRendering();
    }

    appendRendererToHtml() {
        var htmlContainer = document.createElement('div');
        document.body.appendChild(htmlContainer);
        htmlContainer.appendChild(this.renderer.domElement);
    }

    startRendering() {
        requestAnimationFrame(() => {
            this.startRendering();
        });

        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
        if (this.onRender) {
            this.onRender();
        }
    }
}