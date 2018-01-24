import React, { Component } from 'react';

export default class Exhibitors extends Component {

    componentWillMount(){
        this.props.getExhibitors();
        console.log("in Component" ,this.props);
    }

    render(){
         const { exhibihtors, loading, error } = this.props;
        if(loading){
            return (
                <p>Loading Notifications..</p>
            )
        }else if(error){
            return (
                <div>
                    <p>Sorry, something went Wrong</p>
                    <p>{error}</p>
                </div>
            )
        }else{
            return (
                <section>
                    <h1>hello</h1>
                    <button><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </section>

                // {
                //     exhibihtors.map((exhibitor) =>{
                //         return(
                //             <ul>
                //                 <li>exhibitor.categoryname</li>
                //                 <li>exhibitor.caption</li>
                //                 <li><button><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
                //             </ul>
                //         )
                //     })
                // }    
            )
        } 
    }
}