package ghumover2

import grails.rest.Resource;




class Article {

	int 	articleId
	String 	type
	String 	title
	
	int 	authorId
	Date 	createdAt
	Date 	updatedAt
	String 	allowComments
	String 	articleUrl
	int		videoId
	String 	author
	String  details
	String appidFb
	Image image
	static hasMany=[articleDetails: ArticleDetails]
	
	 static mapping = {

		details type: "text"
		articleDetails sort :"sequence"
    }
    static constraints = {
		
		
    }
}
