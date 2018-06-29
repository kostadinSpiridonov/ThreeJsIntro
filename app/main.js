import { Cube } from './models/cube.js';
import { SpaceRenderer } from './models/space-renderer.js';
import { Space } from './models/space.js';
import { CameraDefinitions } from './definitions/camera-definitions.js';
import { LightDefinitions } from './definitions/light-definitions.js';
import { SceneDefinitions } from './definitions/scene-definitions.js';

export class Main {
    init() {
        var defaultCamera = CameraDefinitions.getBaseCamera();
        var defaultScene = SceneDefinitions.getBaseScene();
        var defaultLight = LightDefinitions.getBaseLight();

        this.space = new Space(defaultCamera, defaultScene, defaultLight);
        this.spaceRenderer = new SpaceRenderer(this.space);
        this.spaceRenderer.run();

        this.initialSpace();
    }

    initialSpace() {
        var object = new Cube({
            width: 100,
            height: 100,
            depth: 100
        });

        this.space.addObject(object);
    }
}