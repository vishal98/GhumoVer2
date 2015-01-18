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
	
	
	String details
	



}
