import SplitText from "../animations/SplitText";

const Home = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="m-auto">
                        <img
                            src="https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format"
                            alt="Animated Image"
                            className="rounded-full border-4 border-white shadow-lg w-56 h-56 object-cover"
                        />
                    </div>
                    <SplitText
                        text="Hello, there!"
                        className="text-5xl font-semibold text-center"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <p className="py-6 text-4xl">
                        Hi,I am Pramod Lohra, Software developer from India
                    </p>
                    <button className="btn btn-primary">Connect with me</button>

                </div>
            </div>
        </div>
    );
};

export default Home;