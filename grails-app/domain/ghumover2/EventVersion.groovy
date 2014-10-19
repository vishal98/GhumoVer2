package ghumover2

class EventVersion {
	Long EventVertionId
	Long EventId
	String EventType
	String EventLevel
	String Country
	Long GeoCode //Geographical Code
	String eventPlace
	Date StartDate
	Date EndDate
	String Status //check the event is active or inactive 
	Long MaxSeats // check max no of seats avilable
	String CreateUserID //create userID
	Date CreateDate
	String UpdateUserID //update UserID
	Date UpdateDate
	String defaultFlag 
	String guideId
	
	
    static constraints = {
    }
}
