package ghumover2

import javax.persistence.criteria.Fetch;

import org.hibernate.FetchMode;

import grails.converters.JSON

class BlogController {

    def index() { }
	
		def getBlogs (){
			def article=new Article()
			def articleList=article.list() 
			println articleList
			if(articleList!=null){
				render articleList as JSON
			}
			
		
		
	
			
		}
		
		
		
		def getBlogDetails (){
			def c = Article.createCriteria()
			c.fetchMode("articleDetails", FetchMode.EAGER)
			 def articleDet	=c.list {
				like('articleId', params.id.toInteger())
			
		
		}	
			 
			 JSON.use('deep')
		
			render articleDet as JSON
}

}