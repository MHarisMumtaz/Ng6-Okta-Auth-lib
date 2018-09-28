export class OIDCConfig {
	tokenManager = {
		storage : "localStorage"
	}
	clientId	 : string;
	issuer	 	 : string;
	redirectUri  : string;
	scope        : string;
	url			 : string;
}