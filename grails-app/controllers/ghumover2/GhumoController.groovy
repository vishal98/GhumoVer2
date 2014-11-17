package ghumover2






import grails.converters.JSON


class GhumoController {

    def index() { }
	
	def showDetail() {
	
		
		String plp="plp"
				println("show Phone  :":params.name)
		def c = EventVersion.createCriteria()
		def now = new Date()
		def json = c.list {
			like("eventPlace",plp )
			and {
				between("startDate", now-80, now+180)
			
			}
			maxResults(10)
		
		} as JSON
		
	
		println("show Phone  :":json)
		
		
		
		
		
		render json

	}
	
	
	def showEvents() {
	
			 
		println("show Phone  :"+params.event + "show name  :"+params.name )
			String plp="plp"
			def c = ActivityDetails.createCriteria()
			def now = new Date()
			ActivityDetails[] det = c.list {
				like("placeName",params.name)
				like("activityName",params.event)
				
				maxResults(10)
			
			}
		
	//	JSON.use('named'){
			render det as JSON
	//	}
			
		
			println("show Phone  :"+det)
			
			
			
	
		}
		
	
	def showAgentsDetails(){
	def eventVersion	=EventVersion.withCriteria {
			def now = new Date()
			between('releaseDate', now+7, now)
			like('eventPlace', '%plp%')
		}
	}
}
