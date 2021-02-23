import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link, Router,withRouter } from 'react-router-dom';
import './App.css';

class Home extends Component{
    render(){
        return(
            <div class="backgroundimg">
                <div class="main">
                    <h1>메인페이지</h1>
                    <div class="content">
                    <p onClick={asdasd}>제발되라</p>&nbsp;
                    <a href="http://localhost:3000/First">First로 옮겨갈버튼</a>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}
function asdasd(){
    alert('꺄륵');
}

export default Home;