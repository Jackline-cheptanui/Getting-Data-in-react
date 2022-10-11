
import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Email: {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default App;


// import React,{Component} from 'react';

// class App extends Component() {

//   constructor(props){

//        super(props);
//        this.state= {
//         items:[],
//        isLoaded:false,
//     }
//   }

//   //apis using mounting methods

//   componetDidMount(){
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//      .then(res => res.json())
//      .then(json => {
//           this.setState({
//           isLoaded:true,
//           items:json,

//       })

//     });
//   }
//   render(){

//     //ACCESIING THE ITEMS

//     var { isLoaded , items} = this.state;

//     if(!isLoaded) {
//       return <div>Loading...</div>;
//     }
//     else{

    
//   return (
//     <div className="App">

//    <ul>
//     {items.map(item => (
//       <li key={item.id}>
//         Nmae:{item.name} | Email:{item.email}
//       </li>

//     ))};
//    </ul>
   
//     </div>
  
//   );
//   }
// }
// }

// export default App;
