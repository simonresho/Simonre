import React from 'react'; 
import {FacebookFilled , InstagramFilled, GithubFilled} from '@ant-design/icons';



function Contactus() {
    return(
        <div>
                        
        <section className="py-4 bg-info">
        <div className="container">
            <div className="row">
                <div className="col-md-4 my-auto">
                    <h4>Contact Us</h4>
                </div>
                <div className="col-md-8 my-auto">
                    <h6 className="float-end">
                        Home / Contact Us
                    </h6>
                </div>
            </div>
        </div>
    </section>

        <section className="section">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div clasName="col-md-6">
                                <h6>Contact Form</h6>
                                <hr />
                                <div className="from-group">
                                    <label className="mb-1">Full Name</label>
                                    <input type="text" className="form-control"placeholder="Enter Full Name" />
                                </div>

                                <div className="from-group">
                                    <label className="mb-1">Phone Number</label>
                                    <input type="text" className="form-control"placeholder="Enter Full Number" />
                                </div>

                                <div className="from-group">
                                    <label className="mb-1">Email Adress</label>
                                    <input type="text" className="form-control"placeholder="Enter Full Email" />
                                </div>

                                <div className="from-group">
                                    <label className="mb-1">Message</label>
                                    <textarea rows="3" className="form-control" placeholder="Type a Message" ></textarea>
                                </div>

                                <div className="form-group py-3">
                                    <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                </div>
                            </div>
                            <hr />    

                                <div className="col-md-12 text-center">
                                <a href="https://www.facebook.com/simon.re.3762" target="_blank" rel="noreferrer" style={{margin:"10px"}}><FacebookFilled  style={{color:'#8A8A8A' ,fontSize:30 ,}} /></a> 
                                <a href="https://www.instagram.com/simonre123" target="_blank" rel="noreferrer" style={{margin:"10px"}}><InstagramFilled style={{color:'#8A8A8A' ,fontSize:30}}/></a>
                                <a href="https://github.com/simonresho" target="_blank" rel="noreferrer" style={{margin:"10px"}}><GithubFilled  style={{color:'#8A8A8A' , fontSize:30}} /></a>
                                </div>
                        </div>                      
                    </div>
                </div>
            </div >
        </section>


        </div>
    );
}
export default Contactus;