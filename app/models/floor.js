export class Floor {
    constructor() {
        this.geometry = new THREE.PlaneGeometry(1400, 900, 32);

        this.material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.mesh.rotation.x = (Math.PI / 90) * 46;
    }

    getMesh() {
        return this.mesh;
    }
}