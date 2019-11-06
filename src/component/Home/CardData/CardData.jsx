import React, { Component } from 'react';
import './CardData.css'

class CardData extends Component {
    render() {
        return (
            <div className='container'>
                <div className="kontainer">
                    <div className="kotak">
                        <div className="img-bx">
                            <img src="https://www.luxuryacademy.co.uk/wp-content/uploads/2016/10/84f08dfe63581f25ff8f2f79b09a0cfd.jpg" alt=""/>
                        </div>
                        <div className="konten">
                            <h3>Post Title One</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardData;