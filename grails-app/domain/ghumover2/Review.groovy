package ghumover2

class Review {

    static constraints = {
    }
	
  String userId
  String reviewId
  String review
  String rating
  String reviewType //user/event
  Activity activity
  
  static belongsTo = [activity:Activity]
}
