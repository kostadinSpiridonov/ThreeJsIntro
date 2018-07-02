import { Cube } from './models/cube.js';
import { Space } from './models/space.js';
import { Floor } from './models/floor.js';
import { CameraDefinitions } from './definitions/camera.definitions.js';
import { LightDefinitions } from './definitions/light.definitions.js';
import { SceneDefinitions } from './definitions/scene.definitions.js';
import { RendererDefinitions } from './definitions/renderer.definitions';

export class Main {
    init() {
        var camera = CameraDefinitions.getBaseCamera();
        var debugCamera = CameraDefinitions.getDebugCamera();
        var scene = SceneDefinitions.getBaseScene();
        var renderer = RendererDefinitions.getBaseRenderer();

        this.space = new Space(camera, scene, debugCamera, renderer);

        this.initialSpace();
    }

    initialSpace() {
        var object = new Cube({
            width: 100,
            height: 100,
            depth: 100
        });
        object.mesh.isDragable = true;

        this.space.addObject(object);

        var floor = new Floor();
        floor.mesh.name = 'floor';
        this.space.addObject(floor);

    }
}