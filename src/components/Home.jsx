const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <img
                            src="path/to/your/profile-image.jpg"
                            alt="Profile"
                            className="rounded-full w-48 h-48 mx-auto"
                        />
                        <h1 className="mb-5 text-5xl font-bold">Pramod Lohra</h1>
                        <p className="mb-5">Welcome to my portfolio! I'm a passionate developer with a love for creating amazing web experiences.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Home;