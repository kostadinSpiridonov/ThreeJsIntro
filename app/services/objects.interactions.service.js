export class ObjectsInteractionsService {

    constructor(scene) {
        this.scene = scene;
    }

    onObjectDragEnd(object) {
        this.overTheFloorCheck(object);
    }

    overTheFloorCheck(object) {
        var floor = this.scene.getObjectByName("floor");
        if (!this.isMovementAllowed(object, floor)) {
            object.position.y = floor.position.y + (object.geometry.parameters.height / 2);

        }
    }

    isMovementAllowed(object, floor) {
        return (object.position.y > floor.position.y + (object.geometry.parameters.height / 2));
    }
}