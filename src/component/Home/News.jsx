import React, { Component } from 'react';
import './News.css'


class News extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className='titel'>Breaking News</h2>
            <div className='leftBox row'>
                <div className="piktur col-3">
                <img src="https://www.thesun.co.uk/wp-content/uploads/2019/05/NINTCHDBPICT0004883859594-e1557509845366.jpg" />
                </div>
                <div className="content col-9">
                <h1>Breaking News</h1>
                <p>Kota metropolis terpadat di Jepang itu menorehkan skor 92,0 dari 100 poin. 
                    Singapura berada di posisi kedua dengan 91,5 poin dan kota metropolitan Jepang lainnya, Osaka ada di posisi ketiga dengan 90,9 poin.
                    Tidak ada kejutan besar di posisi teratas itu, kota-kota ini juga menjadi tiga teratas dalam dua peringkat SCI sebelumnya, 
                    pada 2015 dan 2017. Kota-kota di Eropa yakni Amsterdam, Kopenhagen masuk ke peringkat 10 besar, 
                    masing-masing di nomor empat dan nomor delapan.</p>
                    <a href="">Read More >></a>
                </div>
            </div>
            <div className='leftBox row'>
                <div className="content col-9">
                <h1>Breaking News</h1>
                <p>Kota metropolis terpadat di Jepang itu menorehkan skor 92,0 dari 100 poin. 
                    Singapura berada di posisi kedua dengan 91,5 poin dan kota metropolitan Jepang lainnya, Osaka ada di posisi ketiga dengan 90,9 poin.
                    Tidak ada kejutan besar di posisi teratas itu, kota-kota ini juga menjadi tiga teratas dalam dua peringkat SCI sebelumnya, 
                    pada 2015 dan 2017. Kota-kota di Eropa yakni Amsterdam, Kopenhagen masuk ke peringkat 10 besar, 
                    masing-masing di nomor empat dan nomor delapan.</p>
                    <a href="">Read More >></a>
                </div>
                <div className="piktur col-3">
                    <img src="https://wallpapercave.com/wp/wp2775249.jpg" />
                </div>
            </div>
            {/* <div className="adah">
                <div className="circle"></div>
                <h1>Breaking News</h1>
                <p>Kota metropolis terpadat di Jepang itu menorehkan skor 92,0 dari 100 poin. 
                    Singapura berada di posisi kedua dengan 91,5 poin dan kota metropolitan Jepang lainnya, Osaka ada di posisi ketiga dengan 90,9 poin.
                    Tidak ada kejutan besar di posisi teratas itu, kota-kota ini juga menjadi tiga teratas dalam dua peringkat SCI sebelumnya, 
                    pada 2015 dan 2017. Kota-kota di Eropa yakni Amsterdam, Kopenhagen masuk ke peringkat 10 besar, 
                    masing-masing di nomor empat dan nomor delapan.</p>
            </div> */}
            </div>
        );
    }
}

export default News;