// eslint-disable-next-line no-unused-vars
import React from 'react';
import divorce from '../../assets/divorce.jpg'
function Card() {
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-2xl rounded-3xl mt-6">
                <figure>
                    <img
                        className="rounded-2xl"
                        src={divorce}
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-2xl"><b>Divorce Case</b></h1>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end bg-black w-2/4 rounded-full ml-20">
                        <button className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;