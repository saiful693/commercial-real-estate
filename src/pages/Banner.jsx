
const Banner = () => {
    return (
        <div className="carousel rounded-lg mt-10  w-full">
            <div style={{backgroundImage: 'url(https://i.ibb.co/VHY1Sbb/slider1.jpg)'}} id="slide1" className="carousel-item bg-cover relative h-[300px] md:h-[400px] lg:h-[650px]  w-full">
               <div className="flex justify-center items-center w-full">
                   <div>
                   <h5 className="text-xl lg:text-2xl font-bold text-white">DISCOVER THE</h5>
                    <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">Benchmark of excellence</h1>
                    <div className="border-l">
                        <h5 className="lg:text-xl font-bold text-white">Benaa Office buildings</h5>
                    </div>
                   </div>
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/y8P2Z4r/slider2.jpg)'}} id="slide2" className="carousel-item bg-cover relative h-[300px] md:h-[400px] lg:h-[650px]   w-full">
                <div className="flex justify-center items-center w-full">
                   <div>
                   <h5 className="text-xl lg:text-2xl font-bold text-white">THE PERFECT PORTRAYAL OF</h5>
                    <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">Architectural Supremacy</h1>
                    <div className="border-l">
                        <h5 className="text-xl font-bold text-white">Benaa warehouses</h5>
                    </div>
                   </div>
               </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/4mrg9gb/slider3.jpg)'}} id="slide3" className="carousel-item relative h-[300px] md:h-[400px] lg:h-[650px]  w-full">
                <div className="flex justify-center items-center w-full">
                   <div>
                   <h5 className="text-lg lg:text-2xl font-bold text-white">Explore</h5>
                    <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">Exclusivity with benaa</h1>
                    <div className="border-l">
                        <h5 className="text-xl font-bold text-white">Benaa retail spaces </h5>
                    </div>
                   </div>
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div style={{backgroundImage: 'url(https://navanarealestate.com/frontend/assets/img/slider/slider_9.webp)'}} id="slide4" className="carousel-item relative h-[300px] md:h-[400px] lg:h-[650px]  w-full ">
                <div className="flex justify-center items-center w-full">
                   <div>
                   <h5 className="text-lg lg:text-2xl font-bold text-white">WITNESS </h5>
                    <h1 className="text-xl lg:text-5xl font-bold text-white uppercase">Spectacular architecture</h1>
                    <div className="border-l">
                        <h5 className="text-xl font-bold text-white">Benaa industrial facilties</h5>
                    </div>
                   </div>
               </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>



    );
};

export default Banner;