package ghumover2



import grails.converters.JSON

class GhumoController {

    def index() { }
	
	def showDetail() {
	//	def json	=EventVersion.withCriteria {
		//	def now = new Date()
			//between('startDate', now, now+7)
			//like('eventPlace', '%plp%') as JSON
		//}
		String plp="plp"
		def c = EventVersion.createCriteria()
		def now = new Date()
		def json = c.list {
			like("eventPlace",plp )
			and {
				between("startDate", now-80, now+180)
			
			}
			maxResults(10)
		
		} as JSON
		
		//println("show placeName ::" +params.placeName)
	//	def json = 	.findAllByName(params.placeName) as JSON
	//	Destination.findByAName();
		println("show Phone  :":json)
		
		
		
		
		
		render json

	}
	
	def showAgentsDetails(){
	def eventVersion	=EventVersion.withCriteria {
			def now = new Date()
			between('releaseDate', now+7, now)
			like('eventPlace', '%plp%')
		}
	}
}
