package ghumover2

class Activity {

    static mapping = {
    id generator: 'increment',name: 'activityId'
	childs lazy: false
	
}
	
static hasMany = [review: Review,iternary:Iternary]
	
	String activityId;
	String activityTypeCode //trek
	String Name
	String placeId     //
	String difficultyLevel  //easy
	String activityKeyWord   //campMamali
	String activityPicUrlId  //
	int days   //
	String activityOverview  //
	String priceRange   //
	//Review review    ///
	String activityRating  //3
	//Iternary iternary
	
	//String activityId
	

	

}
