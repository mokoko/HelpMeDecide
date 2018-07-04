// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { AsdasdaBaseService } from "./base/asdasda.base.service";
import { Asdasda } from '../domain/my-contacts_db/asdasda';

/**
 * YOU CAN OVERRIDE HERE asdasdaBaseService
 */

@Injectable()
export class AsdasdaService extends AsdasdaBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}