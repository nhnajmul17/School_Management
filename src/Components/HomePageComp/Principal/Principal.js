import React from 'react';
import "./Principal.css";


const Principal = () => {
    return (
        <div class='hero-content flex-col lg:flex-row'>

            <div class="hero h-56 backgroundimg" >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">WE are the Student from gondar School</p>
                    </div>
                </div>
            </div>


            <div class="hero p-10">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm h-60 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">From Principal</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Principal;