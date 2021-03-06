class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
	
	
		"/phones/phones.json" {
			controller = "phones"
		}
		
		"/phones/${phoneId}.json" {
			controller = "phones"
			action = "showPhone"
		}
		
		"/phones/name/${phoneName}.json" {
			controller = "phones"
			action = "showPhoneByName"
		}
		
		"/detail/$name/event/$event?" {
		controller = "ghumo"
		action = "showEvents"
	
	}
		"/user/name/$name/email/$email/message/$msg"{
			controller = "ghumo"
			action = "addMessage"
	}
		
		"/blogList/$msg?"{
			controller = "blog"
			action = "getBlogs"
	}
		
		"/id/$id/blog/$name?"{
			controller = "blog"
			action = "getBlogDetails"
	}
		
		
		
		
	}
}
