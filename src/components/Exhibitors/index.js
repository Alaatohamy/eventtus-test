import React, { Component } from 'react';
import './exhibitor_style.css';

export default class Exhibitors extends Component {
    componentWillMount(){
        this.props.getExhibitors();
    }
    
    // componentWillRiciveProps(nextProps){
    //     nextProps = this.props.exhibihtors;
    // }

    render(){
        console.log("in Component" ,this.props);
         const { exhibihtors, loading, error, deleteExhibitor } = this.props;
        if(loading){
            return (
                <p>Loading Notifications..</p>
            )
        }else if(error){
            return (
                <p>Sorry, something went Wrong</p>
            )
        }else{
            return (
                <section className="exhibihtors">
                    {  
                        exhibihtors.map((exhibitor) =>{
                            return(
                                <ul className="clearfix">
                                 <li className="icone">{exhibitor.categoryname}</li>
                                 <li>{exhibitor.caption}</li>
                                 <li>{exhibitor.id}</li>
                                 <li className="delete-icone"><button onClick={() =>{deleteExhibitor(exhibitor.id)} }><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>
                                </ul>
                            )
                        })
                    }
                </section>
            )
        } 
    }
}