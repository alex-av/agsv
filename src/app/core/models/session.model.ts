export class ModelSession {

    isLogIn: boolean | null = null;
    access_token: string | null = null;
    refresh_token: string | null = null;
    expires_in: number | null = null;


    constructor( session: any | null ){
        // console.log(session);
        if( session ){
            this.isLogIn = false;
            this.access_token = session['access_token'];
            this.refresh_token = session['refresh_token'];
            this.expires_in = session['expires_in'];
        }
        
    }

}