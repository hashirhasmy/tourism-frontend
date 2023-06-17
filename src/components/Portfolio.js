import './Portfolio.css';
function Portfolio() {
    return (

        <div className="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div class="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="img/destination1.png">
                            <img className="img-fluid" src="img/destination1.png" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">GO.LK</div>
                                <div className="project-name">$650</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="img/destination2.png">
                            <img className="img-fluid" src="img/destination2.png" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">GO.LK</div>
                                <div className="project-name">$650</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="img/destination3.png">
                            <img className="img-fluid" src="img/destination3.png" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">GO.LK</div>
                                <div className="project-name">$650</div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>





    );
}

export default Portfolio;