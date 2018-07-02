import { BaseModel } from "./base-model";

export class Cube extends BaseModel {
    constructor(size) {
        super();
        this.geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
        this.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.isDragable = true;
    }

    getMesh() {
        return this.mesh;
    }
}