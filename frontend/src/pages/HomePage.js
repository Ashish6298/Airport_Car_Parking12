function HomePage() {
    return (
        <div className="App py-10">
            <div id="app" className="generic">
                <div>
                    <div className="content">
                        <us-page-home inline-template>
                            
                                <section id="benefits">
                                    <div className="container">
                                        <h5>What Can You Save with AirportParkingReservations.com?</h5>

                                        <ul className="row">
                                            <li className="col-12 col-lg-4 p-3">
                                                <img src={require("./assets/check.png")} alt="Tick" width="50" height="50" />
                                                <div>
                                                    <h6>Save Money</h6>
                                                    <p>Save up to 70% off on our site compared to the cost of on-airport
                                                        parking.</p>
                                                </div>
                                            </li>
                                            <li className="col-12 col-lg-4 p-3">
                                                <img src={require("./assets/check.png")} alt="Tick" width="50" height="50" />
                                                <div>
                                                    <h6>Save Time</h6>
                                                    <p>
                                                        It's easy to compare parking at all major airports.<br />
                                                        Booking a reservation is quick & simple!
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="col-12 col-lg-4 p-3">
                                                <img src={require("./assets/check.png")} alt="Tick" width="50" height="50" />
                                                <div>
                                                    <h6>Save Stress</h6>
                                                    <p>
                                                        Guarantee your parking spot by booking in advance. Can't make it?
                                                        Cancellations are free.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            {/* </section> */}
                        </us-page-home>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default HomePage;