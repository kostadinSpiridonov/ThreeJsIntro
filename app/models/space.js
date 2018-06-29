export class Space {

    constructor(camera, scene, light) {
        this.camera = camera;
        this.scene = scene;
        this.light = light;
        this.objects = [];
        this.onObjectAdd = null;

        this.scene.add(this.light);
    }

    addObject(object) {
        this.objects.push(object);
        this.scene.add(object.getMesh());

        if (this.onObjectAdd) {
            this.onObjectAdd(object);
        }
    }

    getObjects() {
        return this.objects;
    }
}