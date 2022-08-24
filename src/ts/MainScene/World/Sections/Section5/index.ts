import * as THREE from 'three';
import * as ORE from 'ore-three';

import { Section, ViewingState } from '../Section';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Objects } from './Objects';
import { TextRing } from './TextRing';

export class Section5 extends Section {

	private objects?: Objects;
	private textring: TextRing;

	constructor( manager: THREE.LoadingManager, parentUniforms: ORE.Uniforms ) {

		super( manager, 'section_5', parentUniforms );

		// params

		this.elm = document.querySelector( '.section5' ) as HTMLElement;

		this.bakuMaterialType = 'normal';
		this.ppParam.bloomBrightness = 1.0;
		this.cameraRange.set( 0.0, 0.0 );

		/*-------------------------------
			Lights
		-------------------------------*/

		this.light2Data = {
			position: new THREE.Vector3( 5.0, - 10.7, 20 ),
			targetPosition: new THREE.Vector3( - 1.7, - 6.7, 12 ),
			intensity: 1,
		};

		/*-------------------------------
			TextRing
		-------------------------------*/

		this.textring = new TextRing( this.commonUniforms );

	}

	protected onLoadedGLTF( gltf: GLTF ): void {

		let scene = gltf.scene;

		this.add( scene );

		// baku

		let baku = this.getObjectByName( 'Baku' ) as THREE.Object3D;

		// textring

		baku.add( this.textring );

	}

	public update( deltaTime: number ): void {

		this.bakuTransform.rotation.multiply( new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0.0, 0.0, 1.0 ), deltaTime * 0.1 ) );

	}

	public switchViewingState( viewing: ViewingState ): void {

		super.switchViewingState( viewing );

		this.textring.switchVisibility( this.sectionVisibility );

	}

}
