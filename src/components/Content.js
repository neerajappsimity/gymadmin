import React, { Component } from 'react'

class Content extends Component {
    render(){
        return (
            <div id="page-wrapper">
            <div className="container-fluid">
                <div className="row bg-title">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Dashboard</h4> </div>
                    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <a  target="_blank" className="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Upgrade to Pro</a>
                        <ol className="breadcrumb">
                            <li><a href="#">Dashboard</a></li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Total Visit</h3>
                            <ul className="list-inline two-part">
                                <li>
                                    <div id="sparklinedash"></div>
                                </li>
                                <li className="text-right"><i className="ti-arrow-up text-success"></i> <span className="counter text-success">659</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Total Page Views</h3>
                            <ul className="list-inline two-part">
                                <li>
                                    <div id="sparklinedash2"></div>
                                </li>
                                <li className="text-right"><i className="ti-arrow-up text-purple"></i> <span className="counter text-purple">869</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Unique Visitor</h3>
                            <ul className="list-inline two-part">
                                <li>
                                    <div id="sparklinedash3"></div>
                                </li>
                                <li className="text-right"><i className="ti-arrow-up text-info"></i> <span className="counter text-info">911</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="white-box">
                            <h3 className="box-title">Products Yearly Sales</h3>
                            <ul className="list-inline text-right">
                                <li>
                                    <h5><i className="fa fa-circle m-r-5 text-info"></i>Mac</h5> </li>
                                <li>
                                    <h5><i className="fa fa-circle m-r-5 text-inverse"></i>Windows</h5> </li>
                            </ul>
                            <div id="ct-visits"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <div className="white-box">
                            <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                                <select className="form-control pull-right row b-none">
                                    <option>March 2017</option>
                                    <option>April 2017</option>
                                    <option>May 2017</option>
                                    <option>June 2017</option>
                                    <option>July 2017</option>
                                </select>
                            </div>
                            <h3 className="box-title">Recent sales</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>NAME</th>
                                            <th>STATUS</th>
                                            <th>DATE</th>
                                            <th>PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td className="txt-oflo">Elite admin</td>
                                            <td>SALE</td>
                                            <td className="txt-oflo">April 18, 2017</td>
                                            <td><span className="text-success">$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td className="txt-oflo">Real Homes WP Theme</td>
                                            <td>EXTENDED</td>
                                            <td className="txt-oflo">April 19, 2017</td>
                                            <td><span className="text-info">$1250</span></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td className="txt-oflo">Ample Admin</td>
                                            <td>EXTENDED</td>
                                            <td className="txt-oflo">April 19, 2017</td>
                                            <td><span className="text-info">$1250</span></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td className="txt-oflo">Medical Pro WP Theme</td>
                                            <td>TAX</td>
                                            <td className="txt-oflo">April 20, 2017</td>
                                            <td><span className="text-danger">-$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td className="txt-oflo">Hosting press html</td>
                                            <td>SALE</td>
                                            <td className="txt-oflo">April 21, 2017</td>
                                            <td><span className="text-success">$24</span></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td className="txt-oflo">Digital Agency PSD</td>
                                            <td>SALE</td>
                                            <td className="txt-oflo">April 23, 2017</td>
                                            <td><span className="text-danger">-$14</span></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td className="txt-oflo">Helping Hands WP Theme</td>
                                            <td>MEMBER</td>
                                            <td className="txt-oflo">April 22, 2017</td>
                                            <td><span className="text-success">$64</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-8 col-sm-12">
                        <div className="white-box">
                            <h3 className="box-title">Recent Comments</h3>
                            <div className="comment-center p-t-10">
                                <div className="comment-body">
                                    <div className="user-img"> 
                                    {/* <img src="../plugins/images/users/pawandeep.jpg" alt="user" className="img-circle"> */}
                                    </div>
                                    <div className="mail-contnet">
                                        <h5>Pavan kumar</h5><span className="time">10:20 AM   20  may 2016</span>
                                        <br/><span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span> <a href="javacript:void(0)" className="btn btn btn-rounded btn-default btn-outline m-r-5"><i className="ti-check text-success m-r-5"></i>Approve</a><a href="javacript:void(0)" className="btn-rounded btn btn-default btn-outline"><i className="ti-close text-danger m-r-5"></i> Reject</a>
                                    </div>
                                </div>
                                <div className="comment-body">
                                    <div className="user-img"> 
                                    {/* <img src="../plugins/images/users/sonu.jpg" alt="user" className="img-circle"> */}
                                    </div>
                                    <div className="mail-contnet">
                                        <h5>Sonu Nigam</h5><span className="time">10:20 AM   20  may 2016</span>
                                        <br/><span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span>
                                    </div>
                                </div>
                                <div className="comment-body b-none">
                                    <div className="user-img"> 
                                    {/* <img src="../plugins/images/users/arijit.jpg" alt="user" className="img-circle"> */}
                                    </div>
                                    <div className="mail-contnet">
                                        <h5>Arijit singh</h5><span className="time">10:20 AM   20  may 2016</span>
                                        <br/><span className="mail-desc">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. Aenean commodo dui pellentesque molestie feugiat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="panel">
                            <div className="sk-chat-widgets">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        CHAT LISTING
                                    </div>
                                    <div className="panel-body">
                                        <ul className="chatonline">
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center"> 2017 &copy; Ample Admin brought to you by wrappixel.com </footer>
        </div>
        )
    }
}

export default Content;