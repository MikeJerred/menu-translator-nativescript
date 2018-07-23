import { Injectable } from '@angular/core';
import { Environment } from '@menu-translator/shared/environments/environment';

@Injectable()
export class MobileEnvironment extends Environment {
    production = true;
    googleCloudVisionAPIKey = '';
}