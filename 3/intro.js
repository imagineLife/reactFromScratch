<!DOCTYPE html>
<html>
<head>
	<title>Part 1, Basic React</title>
	<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
	<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
	<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
	<div id="app"></div>

	<script type="text/babel">
		
		function FriendsList(props){
			return(
				<ul>
					{props.friendsList.map((friendName) => (
						<li key={friendName}>
							<span>{friendName}</span>
							<button onClick={() => props.onRemovePerson(friendName)}>Remove</button>
						</li>	
					))}
				</ul>
			)
		}

		class App extends React.Component{
			constructor(props){
				super(props)
			
				this.state = {
					people: ['curly', 'larry','moe'],
					inputval: '',
				}

				this.handleRemovePerson = this.handleRemovePerson.bind(this)
				this.updateInputval = this.updateInputval.bind(this)
				this.handleAddPerson = this.handleAddPerson.bind(this)
				this.removeAllPeople = this.removeAllPeople.bind(this)

			}


			handleAddPerson(){
				this.setState((prevState) => {
					return{
						people: prevState.people.concat([prevState.inputval]),
						inputval: ''
					}
				})
			}

			handleRemovePerson(removingPerson){
				this.setState((currentState) => {
					return {
						people: currentState.people.filter((curPerson) => curPerson !== removingPerson)
					}
				})
			}

			updateInputval(e){
				let thisval = e.target.value;

				this.setState(() => ({
					inputval: thisval
				}))
			}

			removeAllPeople(){
				this.setState(() => ({
					people: []
				}))
			}
			render(){

				return(
					<div> 
						<input
							type='text'
							placeholder='new person'
							value={this.state.inputval}
							onChange={this.updateInputval}
						/>
						<button onClick={this.handleAddPerson}>Add Person</button>
						<button onClick={this.removeAllPeople}>Remove All People</button>
						<FriendsList 
							friendsList={this.state.people}
							onRemovePerson={this.handleRemovePerson}
						/>
					</div>
				)
			}
		}

		ReactDOM.render( <App />, document.getElementById('app'))

	</script>
</body>
</html>

<!--
GOAL of this: 
GOAL BREAKDOWN:

-->
