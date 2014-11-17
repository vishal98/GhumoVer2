package ghumover2







class ActivityDetails {

    static constraints = {
    }

	
	static marshalling={
		
		JSON{
			named{
				shouldOutputIdentifier false
        shouldOutputVersion false
        shouldOutputClass false
		ignore 'placeId,day,details,difficultyLevel,iternaryId,overview,physicalDemand,picUrl,placeName,priceRange,rating'
			}
			
		}
    }
	String activityName
	String placeId
	String difficultyLevel
    String placeName   

	String activityKeyWord
	String picUrl
	String rating
	String iternaryId
    int days
	String overview
	String details
	String comments
	String priceRange
	String physicalDemand
}
