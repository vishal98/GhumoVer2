//import ghumover2.Iternary

	

class Activity {

    static mapping = {
    id generator: 'increment',name: 'activityId'
	childs lazy: false
	
}
	static hasOne = [iternary:Iternary]
	
	
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
	String reviewId
	Iternary iternary
	
	//String activityId
	

	

}
