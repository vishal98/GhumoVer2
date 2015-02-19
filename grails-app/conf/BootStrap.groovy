import ghumover2.Article;
import ghumover2.Image;

import java.sql.Timestamp;
import java.util.Date;

import grails.converters.JSON


class BootStrap {

	
    def init = { servletContext ->
		JSON.registerObjectMarshaller(Article) {
			def output = [:]
			output['articleId'] = it.articleId
			output['title'] = it.title
			output['articleUrl'] = it.articleUrl
			output['author'] = it.author
			//output['createdAt'] = dateFormatter.format(it.createdAt)
			output['details'] = it.details
			output['appidFb'] = it.appidFb
			output['image'] =  it.image.imagePath

			return output
		
		}
		
	
	/*	JSON.registerObjectMarshaller(Image) {
			def output = [:]
			output['imageName'] = it.imageName
			output['imagePath'] = it.imagePath
		

			return output
		
		}*/ 

    }
    def destroy = {
    }
	
	
}
