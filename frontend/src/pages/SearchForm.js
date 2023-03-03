import { useState } from "react";
const SearchForm = () =>{
        const [departureAirport,setDepartureAirport] = useState("");
        const [checkin,setCheckin] = useState('');
        const [checkout,setCheckout] = useState('');
        const [errors,seterrors] =useState( {
            departureAirport:false,
            checkin:false,
            checkout:false
        })
    
        const DepartureAirportHandler = (e) => {
            //event.target.value
            const {value} = e.target;    
                setDepartureAirport(value);
                if(e.target){
                    seterrors({...errors,departureAirport:false})
                }
            }
        const checkinHandler = (e) => {
            //event.target.value
            const {value} = e.target;
            setCheckin(value);
            if(e.target){
                seterrors({...errors,checkin:false})
            }
    
        }
        const checkoutHandler = (e) => {
            //event.target.value
            const {value} = e.target;
            setCheckout(value);
            if(e.target){
                seterrors({...errors,checkout:false})
            }
    
        }
    
        const submitHandler = (e) => {
            console.log(departureAirport)
            console.log(checkin)
            console.log(checkout)
            //event.target.value
            e.preventDefault();
            if (departureAirport && checkin && checkout){
                alert("Form has been submitted");
            }else{
                seterrors({
                    departureAirport:!departureAirport,
                    checkin:!checkin,
                    checkout:!checkout
                });
            }
            
        }
    return(
        <div>
            <form action="/results.html" method="post" autoComplete="off" noValidate="">
                                        <div className="options row m-0"><label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
                                                <div className="heading mb-1">Departure Airport</div>
                                                <div className="placeholder placeholder-airport">
                                                    <input type="text" onChange={DepartureAirportHandler} 
                                                    value={departureAirport}  
                                                    placeholder="Departure Airport" 
                                                    className="placeholder placeholder-airport" />
                                                    {(errors.departureAirport?<div><br/><div  style={{border:1,backgroundColor:"#da70d6"}}><h4><em>Invalid Departure Airport</em></h4></div></div>:null)}
                                                </div> <i
                                                    className="fas fa-map-marker-alt input-icon"></i>
                                            </label>
                                            <div className="col p-0 row m-0 mb-2 dates"><label
                                                    className="col-sm-6 p-0 pr-sm-3 date_input">
                                                    <div className="heading mb-1">Parking Check-In</div>
                                                    <div className="placeholder">
                                                        <input name="checkin" type="date" onChange={checkinHandler} placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:'100%'}}/>
                                                        {(errors.checkin?<div><br/><div  style={{border:1,backgroundColor:"#da70d6"}}><h4><em>Invalid check-in date</em></h4></div></div>:null)}
                                                    </div> 
                                                </label> <label className="col-sm-6 p-0 pl-sm-0 date_input">
                                                    <div className="heading mb-1">Parking Check-Out</div>
                                                        <input name="Check-Out" type="date" onChange={checkoutHandler} placeholder="Parking Check-Out" className="placeholder placeholder-airport" style={{width:"100%"}}/>
                                                        {(errors.checkout?<div><br/><div  style={{border:1,backgroundColor:"#da70d6"}}><h4><em>Invalid check-out date</em></h4></div></div>:null)}
                                                </label></div>
                                            <div className="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
                                                <div className="d-none d-xl-block heading mb-1 invisible">Submit</div>
                                                <button type="submit" onClick={submitHandler} className="btn btn-secondary btn-big btn-block p-2"><span>SEARCH</span></button>
                                            </div>
                                        </div>
                                    </form>
        </div>
    );
}
export default SearchForm;