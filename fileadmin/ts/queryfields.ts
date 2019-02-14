all {
    id = all
    noescape = 1
    type = Text
    hidden=0
    query={!type=edismax qf='creatorName^2.0 title^1.5 fulltext^0.8 subject abstract alternativeTitle contributorName identifier otherTitle publisher resourceType seriesInformation subtitle tableOfContents translatedTitle'}(%s*)
    autocomplete = 1
}
title {
    id = titles
    noescape = 1
    type = Text
    query=(title:%s*)
    autocomplete = 1
    autocompleteDictionary=title
}
authors {
    id = authors
    noescape = 1
    type = Text
    query=(creatorName:%s*)
    autocomplete = 1
    autocompleteDictionary=creatorName
}
subjects {
    id = subjects
    noescape = 1
    type = Text
    query=(subject:%s*)
    autocomplete = 1
    autocompleteDictionary=subject
      }
publishers {
    id = publishers
    noescape = 1
    type = Text
    query=(publisher:%s*)
    autocomplete = 1
    autocompleteDictionary=publisher
      }
fulltext {
    id = fulltext
    noescape = 1
    type = Text
    query=(fulltext:%s*)
    autocomplete = 1
    autocompleteDictionary=fulltext
}
