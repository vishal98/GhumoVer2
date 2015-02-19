<!DOCTYPE html>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> 

<html lang="en" class="no-js" data-framework="angularjs"><!--<![endif]-->

<head>
<%--<link href="http://da8rvscb20cgy.cloudfront.net/gimmegzip/style.css" type="text/css" rel="stylesheet" media="screen, projection"/>--%>
<%--<link href="http://da8rvscb20cgy.cloudfront.net/gimmegzip/compCss.css" type="text/css" rel="stylesheet" media="screen, projection"/>--%>
<%--<script src="http://da8rvscb20cgy.cloudfront.net/gimmegzip/miniEx.js" defer> </script>--%>

<link rel="stylesheet" href="css/font-awesome.min.css">
<link href="http://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css">


  <link rel="stylesheet" type="text/css" href="css/app.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.csss" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/df-tab-menu.css" media="screen" />
    
    <!-- Main Style -->
    <link id="main-style" rel="stylesheet" href="css/updates.cs">
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="'css/font-awesome.css">

 
    
    <!-- Responsive Styles -->
    <link rel="stylesheet" href="css/responsive.css">
<style type="text/css">

@media screen {
	div#preloader {
		position: absolute;
		left: -9999px;
		top:  -9999px;
		}
	div#preloader img {
		display: block;
		}
	}
@media print {
	div#preloader, 
	div#preloader img {
		visibility: hidden;
		display: none;
		}
	}
    /*
 *  Usage:
 *
 *    <div class="sk-spinner sk-spinner-rotating-plane"></div>
 *
 */
.sk-spinner-wave.sk-spinner {
  margin: 0 auto;
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 10px; }
.sk-spinner-wave div {
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
          animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }
.sk-spinner-wave .sk-rect2 {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.sk-spinner-wave .sk-rect3 {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.sk-spinner-wave .sk-rect4 {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.sk-spinner-wave .sk-rect5 {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }
@-webkit-keyframes sk-waveStretchDelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4); }
  20% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1); } }
@keyframes sk-waveStretchDelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4); }
  20% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1); } }
  </style>


<img src="img/img1.jpg" width="1" height="1" style="visibility: hidden;
		display: none;"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Welcome to GimmeWings</title>	 
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="google-site-verification" content="FMocSzehmkucEzhSo1_Crik3qBDuoFtqCcXVmEVwx_k" />
		 
		 <meta name="fragment" content="!">
	 	<r:require module="angular"/>
		<r:layoutResources />
		
	


</head>
<body>
 

   
	<body style="padding-top: 0%">
	 	<div id="preloader">
	<img src="img/img1.jpg" width="1" height="1" />

</div>
	  <div class="container-fluid1" ng-app="phonecatApp">
	 
	    <div  ui-view class="view-frame"></div>
	  </div>
	   <div class="sk-spinner sk-spinner-wave" id ="spinKit">
      <div class="sk-rect1"></div>
      <div class="sk-rect2"></div>
      <div class="sk-rect3"></div>
      <div class="sk-rect4"></div>
      <div class="sk-rect5"></div>
    </div>
	  <r:layoutResources />
	</body>
</html>