package ghumover2

import java.sql.Timestamp;

class Image {

	
	String imageName
	String imageCode
	String imageSeq
	String imagePath	
	Timestamp lastUpdatedDate
	Timestamp creationDate
	String updatedBy
	String createdBy
	
	static hasMany = [articleDetails:ArticleDetails]
    static constraints = {
    }
	static belongsTo = [ArticleDetails]
}
