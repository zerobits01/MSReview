import React from 'react';
import { AlignTop } from 'react-bootstrap-icons';
import Select from 'react-select';
import Rate from '../../components/rating/Rating';
import './create.css'
const aquaticCreatures = [
  { label: 'Us', value: 'Us' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Legacies', value: 'legacies' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];

const Create=()=>{
    return(
          <div className='divis' >
            <center>
           
                <div className="justify-content-center">
                       
                   <div className=' col-md-12 ' >
                      
                            
                        <div className="col-sm-5 " bg-black  style={{color: "rgba(226,134,14)"}}>
                            <Select
                            options={aquaticCreatures}
                                required /> 
                           
                        </div><br/>
                             
                        <div className="col-sm-5" >
                             <input className="form-control" placeholder="Critic's Title" required /><br/>
                        </div>
                    
                         
                   </div>
                        <div className="col-sm-9 bg-black">
                             <textarea className="form-control" id="contact-comments" name="comments" placeholder="write your critic :)" rows="7" culomn="10"></textarea> <br/>
                        </div>
                        <div className="col-sm">
                             <Rate/>
                         </div>
                        <button type='submit' className="btn btn-shima"> Create</button>   
                </div>
                
            </center>
            
        </div>
    )
}


export default Create;