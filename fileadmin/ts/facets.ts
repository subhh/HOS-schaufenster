oa {
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
            
collection {
                    id=collection
                    displayDefault = 25
                    query = (collection:"%s")
                    field = collection
                }

year {
                   id = year
                   type = Histogram
                   field = publicationYear
                   fetchMaximum=1000
                   barWidth=10
                }

heatmap {
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
       
publicant {
             id = publisher
             displayDefault = 10
             query = (publisher_facet:"%s")
             field = publisher_facet
                 type = Pie
                pieType = doughnut
                maxValues = 25
                pieHeight = 100  
}
cloud {
                type = Wordcloud
                cloudHeight = 100
                maxValues = 69
                fontFamily = Roboto Condensed   
             id = Schlagworte
             displayDefault = 23
             hidden=0
             query = (subject:"%s")
             field = subject
}
ddc {
             id = ddc
             displayDefault = 12
             hidden = 0
             type=DDC
                query = (subject_ddc:"%s")
             field = subject_ddc
}
creater  {
             id = Author
             displayDefault = 7
             query = (creatorName_facet:"%s")
             field = creatorName_facet
             prepend = 👤	
	     type = List
	     autocomplete = 0			
      }
 restype {
            id = type
            field = resourceType
            type = ResourcetypeList
            displayDefault = 12
            hidden=0
            map  {
              Dissertation =  bel-zertifikat
              Report =  bel-buch
              Article =  bel-artikel
              Working_Paper =  bel-artikel
              Proceedings_Part =  bel-artikel
              Periodical_Part =  bel-artikel
              Preprint =  bel-schreiben
              Book =  bel-buch
              Book_Part =  bel-artikel
              Research_Paper = bel-artikel
              Conference_Object =  bel-leer
              Master_Thesis =  bel-zertifikat
              Bachelor_Thesis =  bel-zertifikat
              Other =  bel-leer
              Habilitation =  bel-zertifikat
              Course_Material =  bel-schreiben
              Lecture =  bel-mkombo07
              Study_Thesis =  bel-zertifikat
              Proceedings =  bel-buch
              Journal =  bel-zeit
              Dataset =  bel-tabelle
              Festschrift =  bel-torte
              Poster =  bel-foto
              Presentation =  bel-pcfilm
              Interactive_Resource =  bel-papier
              Learning_Object =  bel-papier
              Technical_Report =  bel-buch
              Journal_Issue =  bel-zeit
              Thesis =  bel-zertifikat
            }
            query = (resourceType:"%s")
      }
 lang {
            id=language
            field = language
            hidden = 0
            displayDefault = 20
            query=(language:%s)
 }