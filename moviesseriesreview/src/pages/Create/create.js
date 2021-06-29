import React, { useState } from 'react';
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


const Create = () => {

    const [state, setState] = useState({ select: null, title: '', critic: '', rate: 0 });
    const { select } = state;

    const rateCallBack = (rate_temp) => {
        setState(prevState => {
            return { ...prevState, rate: rate_temp };
        });
    }

    const handleCritic = () => {
        if (state.title.length == 0 || state.select == null || state.critic.length == 0 || state.rate === 0) {
            alert("please fill out all fields")
        } else {




            console.log(state)
        }

    }


    const handleTitle = (event) => {
        setState(prevState => {
            return { ...prevState, title: event.target.value }
        });

    };


    const handleCriticBox = event => {
        setState(prevState => {
            return { ...prevState, critic: event.target.value }
        });

    };

    const handleChange = selectedOption => {
        setState(prevState => {
            return { ...prevState, select: selectedOption }
        });
        console.log(`Option selected:`, selectedOption);
    };


    return (
        <div className='divis bg-div' >
            <center>

                <div className="justify-content-center">

                    <div className=' col-md-12 ' >


                        <div className="col-sm-6 bg-black" style={{ color: "rgba(226,134,14)", width: "100%" }}>
                            <Select
                                options={aquaticCreatures}
                                value={select}
                                onChange={handleChange}
                                required id='selectid'
                            />

                        </div>
                        <br />

                        <div className="col-sm-5" >
                            <input className="form-control" onChange={handleTitle} required placeholder="Critic's Title" id='titleid' />
                        </div>
                        <br />


                    </div>
                    <div className="col-sm-9 bg-black">
                        <textarea className="form-control" id="criticid" onChange={handleCriticBox} name="comments" placeholder="write your critic :)" rows="7" culomn="10"></textarea> <br />
                    </div>
                    <div className="col-sm">
                        <Rate rateCB={rateCallBack} />
                    </div>
                    <button type='submit' onClick={handleCritic} className="btn btn-shima"  > create </button>
                </div>

            </center>

        </div>
    )
}


export default Create;