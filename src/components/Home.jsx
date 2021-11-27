import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet>
            <title>
                Quiz App - Home
            </title>
        </Helmet>
        <div className="home d-flex">
            <section style={{textAlign: 'center'}}>
                <div style={{marginTop:"80px"}}>
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-quiz-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="bg-img" />
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <lbi>
                            <Link to="/play/instructions" class="cssbuttons-io-button play-button" style={{fontWeight:"800"}}>
                                PLAY
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z">
                                        </path>
                                        <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                        </path>
                                    </svg>
                                </div>
                            </Link>
                        </lbi>
                    </ul>
                    <div className="auth-container">
                        <Link className="auth-buttons" id="auth-login" to="/login">                                                 
                            <span>Login</span>
                            <div class="liquid"></div>
                        </Link>
                        <Link className="auth-buttons" id="auth-register" to="/register">
                            <span>Sign Up</span>
                            <div class="liquid"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </Fragment>
    )

export default Home;
