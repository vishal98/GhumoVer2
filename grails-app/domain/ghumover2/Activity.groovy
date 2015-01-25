package ghumover2

class Activity {

    static mapping = {
    id generator: 'increment',name: 'activityId'
	childs lazy: false
	
}
	
	static hasMany = [review: Review,iternary:Iternary]
	
	String activityId;
	String activityTypeCode
	String placeId
	String difficultyLevel
	String activityKeyWord
	String activityPicUrlId
	String activityRating
	int days
	String activityOverview
	String activityComments
	String priceRange
	Review review
	Iternary iternary
	
	//String activityId
	

	

}
