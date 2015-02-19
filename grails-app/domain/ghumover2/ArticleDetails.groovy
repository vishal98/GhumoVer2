package ghumover2

class ArticleDetails {
	int		 articleDetailsId
	int 	 ownerId
	int      sequence
	String 	 title
	String  post

	
	Article article

    static constraints = {
			
    }
	static hasMany = [image:Image]
	static mapping = {
		post type: 'text'
		sort sequence:"asc"
	  }
	
}
