import * as THREE from 'three';
import * as ORE from 'ore-three';

import { Section } from '../Section';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Objects } from './Objects';

export class Section5 extends Section {

	private objects?: Objects;

	constructor( manager: THREE.LoadingManager, parentUniforms: ORE.Uniforms ) {

		super( manager, 'section_5', parentUniforms );

		// params

		this.elm = document.querySelector( '.section5' ) as HTMLElement;

		this.bakuMaterialType = 'normal';
		this.ppParam.bloomBrightness = 1.0;
		this.cameraRange.set( 0.0, 0.0 );

	}

	protected onLoadedGLTF( gltf: GLTF ): void {

		let scene = gltf.scene;

		this.add( scene );

		/*-------------------------------
			Objects
		-------------------------------*/

		// this.objects = new Objects( scene.getObjectByName( 'Objects' ) as THREE.Object3D, this.commonUniforms );

	}

	public update( deltaTime: number ): void {

		this.bakuTransform.rotation.multiply( new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0.0, 0.0, 1.0 ), deltaTime * 0.1 ) );

	}

}