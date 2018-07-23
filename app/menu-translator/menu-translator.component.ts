import { Component, ElementRef, ViewChild } from '@angular/core';
import * as camera from 'nativescript-camera';
import * as imageSourceModule from 'tns-core-modules/image-source';

import { TranslationService } from '@menu-translator/shared/menu-translator/translation.service';

@Component({
    templateUrl: './menu-translator.component.html',
    styleUrls: ['./menu-translator.component.scss']
})
export class MenuTranslatorComponent {
    public text: string;

    constructor(private translationService: TranslationService) {
        if (!camera.isAvailable()) {
            // error: no camera
        }

        camera.requestPermissions();
    }

    public translate(): void {

        camera.takePicture({ keepAspectRatio: true, width: 1000, saveToGallery: false }).then(imageAsset => {

            imageSourceModule.fromAsset(imageAsset).then(imageSource => {
                let imageBase64 = imageSource.toBase64String('jpg', 90);
                this.translationService.translateImage(imageBase64).subscribe(results => {
                    this.text = results;
                });
            });
        });
    }
}
