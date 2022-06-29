window.config = {
  routerBasename: '/',
  enableGoogleCloudAdapter: false,
  // This is an array, but we'll only use the first entry for now
  oidc: [
	  {
		// ~ REQUIRED
		// Authorization Server URL
		authority: 'https://dev-api.smec-group.com',
		metadataUrl: 'https://dev-api.smec-group.com/oauth2/token?grant_type=client_credentials',
		client_id:
		  '-',
		client_secret: '-',
		client_authentication: 'client_secret_basic',
		redirect_uri: '/callback',
		response_type: 'access_token token',
		scope:
		  '', // email profile openid
		// ~ OPTIONAL
		post_logout_redirect_uri: '/logout-redirect.html',
		automaticSilentRenew: true
	  }
  ],
  // whiteLabelling: {},
  extensions: [],
  modes: [],
  showStudyList: false,
  // filterQueryParam: false,
  dataSources: [
	{
	  friendlyName: 'dcmjs DICOMWeb Server',
	  namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
	  sourceName: 'dicomweb',
	  configuration: {
		name: 'GCP',
		wadoUriRoot:
		  'https://dev-api.gic-indonesia.com/pacs/{branchCode}/dicomWeb',
		qidoRoot:
		  'https://dev-api.gic-indonesia.com/pacs/{branchCode}/dicomWeb',
		wadoRoot:
		  'https://dev-api.gic-indonesia.com/pacs/{branchCode}/dicomWeb',
		qidoSupportsIncludeField: true,
		imageRendering: 'wadors',
		thumbnailRendering: 'wadors',
		enableStudyLazyLoad: true,
		supportsFuzzyMatching: false,
		supportsWildcard: true,
		staticWado: true,
		singlepart: 'bulkdata,video,pdf',
	  },
	},
	{
	  friendlyName: 'dicom json',
	  namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
	  sourceName: 'dicomjson',
	  configuration: {
		name: 'json',
	  },
	},
	{
	  friendlyName: 'dicom local',
	  namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
	  sourceName: 'dicomlocal',
	  configuration: {},
	},
  ],
  defaultDataSourceName: 'dicomweb',
};
