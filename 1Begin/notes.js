/*** What is React? ***/
/*
React is a library for building user interfaces.
*/

/*** What Makes React so Special? ***/
/*

1.Composition
2.Unidirectional Dataflow
3.Explicit Mutations
4.Just Javascript

1.Compositional model
	A page with a bunch of components
	-like AngularJS directives
	-like jQ widgets
	
	React is Able to COMPOSE these components TOGETHER

	Q --> How does a big app get made?
	A --> By making a bunch of small apps

	Example of composed components
	<Container>
		<NavBar />
		<Header />
		<DatePicker>
			<Calendar />
		</DatePicker>
	</Container>

	COMPONENTS
		- have STATE (data), either managed or gotten from parent
		- have STYLE, what the UI looks like

2. Composition
	A look at twitter. Twitter UI can be broken down into components
		sidebar
			tweet activity
			US Trends

	Highly re-usable components

	EX. 3 functions, plain JS vs react
		
		VANILLA JS (13 lines)
		function getProfilePic(){
			return url 
		}
		
		function getProfileLink(){
			return url 
		}
		
		function getAvatarInfo(username){
			return {
				pic: getProfilePic(username),
				link: getProfileLink(username)
			}
		}

		getAvatarInfo('ME!')

		REACT (29 lines)
		function ProfilePic(props){
			
			return (
				<img src={`https://photo.fb.com${props.username}`} />
			)

		}

		function ProfileLink(props){
			
			return (
				<a href={`https://photo.fb.com${props.username}`}>
					{props.username}
				</a>
			)

		}

		function Avatar(props){
			
			return (
				<div>
					<ProfilePic username={props.username} />
					<ProfileLink username={props.username} />
				</div>
			)

		}

		<Avatar username="Jake" />

		Compositions can be similar between JS and React

3. Unidirectional Data-Flow
	COMPARISON 1: jQuery

	Event Handler ---> Update DOM
	Event Handler ---> Update DOM
	Sometimes, the arrows can cross

	vs REACT
	Event handlers --> STATE --> UI

	THink about 1. state of component
		UI is just a function of the state
		React renders the UI from the state

4. Explicit mutations
	this.setState({
		handle: 'Jake',
		authed: true
	})

	We say
		'Hey React, heres the new state of this component'
	React says
		'LOOKS like this was the PREVIOUS state, heres your NEW state, lets change what needs to and update the UI'


5. JUST JAVASCRIPT
	imports
	functions
	arrays
	returning results
	exporting default things

	ANGULAR, on the other hand, HAS lots of proprietary $APIs. $http, $controller, $yada-yada-yada









*/