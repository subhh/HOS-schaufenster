plugin.tx_find {
   settings {
        map {
	        A_B =1
	        C_D =2
        }
	connections.default.options {
    	 	host = localhost
     		port = 8983
     		path = /solr/HOS
   	}
   	detailfacets = creatorName_facet,title,resourceType,publicationYear,abstract,seriesInformation,rights,url 
	facets {
        	<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/ts/facets.ts">
   	}
	queryFields {
		<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/ts/queryfields.ts">
	}
   }
   view {
        partialRootPaths {
            20 = fileadmin/templates/Partials
        }
	templateRootPaths {
            20 = fileadmin/templates/Templates

        }
    }    
}

plugin.tx_hosfindfacetviews.settings.orcid.oauth.accesstoken=2b23b44c-1590-414c-bdb3-37a36b5e5c23

config.tx_realurl_enable = 1
config.absRefPrefix = /

plugin.tx_scriptmerger {
   javascript {
     compress.enable = 0
     minify.enable = 0
     merge.enable = 1
     parseBody =1
    }
    css {
       merge.enable = 1
       compress.enable = 0
       addContentInDocument = 0
    }
}

