dataSource {
	pooled = true
	driverClassName = "com.mysql.jdbc.Driver"
	dialect = "org.hibernate.dialect.MySQL5InnoDBDialect"
}
hibernate {
	cache.use_second_level_cache = true
	cache.use_query_cache = false
//    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory' // Hibernate 3
	cache.region.factory_class = 'org.hibernate.cache.ehcache.EhCacheRegionFactory' // Hibernate 4
	singleSession = true // configure OSIV singleSession mode
	hibernate.show_sql=true
}



// environment specific settings
environments {
	development {
		dataSource {
				dbCreate = "update"
				url = "jdbc:mysql://localhost/test"
				username = "root"
				password = "admin"
	}
	}
	test {
		dataSource {
			dbCreate = "update"
			url = "jdbc:h2:mem:testDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE"
		}
	}
	production {
		dataSource {
		
				username = "fusion"
				password = "plp247619"
				pooled = true
				dbCreate = "create"
				driverClassName = "com.mysql.jdbc.Driver"
				url = "jdbc:mysql://aa1bzishuiat2fj.c3m5mgrxcx6j.ap-southeast-1.rds.amazonaws.com:3306/ebdb?user=fusion&password=plp247619"
				dialect = org.hibernate.dialect.MySQL5InnoDBDialect
				properties {
				 validationQuery = "SELECT 1"
				 testOnBorrow = true
				 testOnReturn = true
				 testWhileIdle = true
				 timeBetweenEvictionRunsMillis = 1800000
				 numTestsPerEvictionRun = 3
				 minEvictableIdleTimeMillis = 1800000
				 }
			   
		}
	}
}
