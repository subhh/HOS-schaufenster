1 {
            id = OpenAccess
            hiddenheader = 1
            field = rightsOA
            type = Threestateswitch
            link = ?tx_find_find[facet][OpenAccess][%s]=1&tx_find_find[controller]=Search
            csspath = typo3conf/ext/hosfindfacetviews/Resources/Public/CSS/toggle-switch.css 
            toast = Publikationen vom Typ: „%s“
            query=(rightsOA:%s)
            values {
                   Open=Open Access
                   All=Open Access,zugriffsbeschränkt
                   Close=zugriffsbeschränkt
            }
            labels {
                   Open = Open Access
                   All = Alle Dokumente
                   Close = Restricted Access 
            }
}
            
2 {
                id=collection
                displayDefault = 25
                query = (collection:"%s")
                field = collection
                type = List
                bigicon = fileadmin/assets/collections/%s_big.png
           }

3 {
                   id = year
                   type = Histogram
                   field = publicationYear
                   fetchMaximum=1000
                   barWidth=10
                }

4 {
            id = heatmap
            type = Heatmap
            field = geoLocationPoint
            bigMap = 1  
            dsvgo = 1
            sortOrder = index
            tileprovider  {
	           type = wms
	           endpoint = https://geodienste.hamburg.de/
	           service  = HH_WMS_DISK60 
	           //service = HH_WMS_Cache_Stadtplan
	           //layers = stadtplan
	           layers  = 1
	           //layers = ALKIS_Basiskarte_farbig
	           //crs = EPSG4326
	           crs = EPSG:3857
                   attribution = Map tiles by Landesbetrieb für Geoinformation und Vermessung
		   size = @1.5x
		   maxzoom =14
		   minzoom=11
            }

            //tileprovider = https://stamen-tiles-c.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}@2x.png
            fetchMaximum = 1000
        }
       
5        {
             id = publisher
             displayDefault = 10
             query = (publisher_facet:"%s")
             field = publisher_facet
                 type = Pie
                pieType = doughnut
                maxValues = 25
                pieHeight = 100  
}
6 {
                type = Wordcloud
                cloudHeight = 100
                maxValues = 69
                fontFamily = Roboto Condensed   
             id = Schlagworte
             displayDefault = 12
             hidden=0
             query = (subject:"%s")
             field = subject
}
7 {
             id = ddc
             displayDefault = 12
             hidden = 0
             type=DDC
                query = (subject_ddc:"%s")
             field = subject_ddc
}
8  {
             id = creatorname
             displayDefault = 7
             query = (creatorName_facet:"%s")
             field = creatorName_facet
             type = List
              autocomplete = 0
 }
9 {
            id = resourcetype
            field = resourceType
            type = List
            displayDefault = 7
            hidden=0
            query = (resourceType:"%s")
      }
10 {
            id=language
            field = language
            hidden = 0
            displayDefault = 7
            query=(language:%s)
 }