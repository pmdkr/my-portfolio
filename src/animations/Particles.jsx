import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Import loadFull for full functionality

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        // Load the full tsparticles library
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent", // Set background to transparent
                    },
                },
                particles: {
                    number: {
                        value: 100, // Number of particles
                    },
                    color: {
                        value: "#ffffff", // Particle color
                    },
                    shape: {
                        type: "circle", // Particle shape
                    },
                    size: {
                        value: 3, // Particle size
                    },
                    move: {
                        enable: true,
                        speed: 1, // Particle movement speed
                    },
                    links: {
                        enable: true,
                        color: "#ffffff", // Link color between particles
                        opacity: 0.5, // Link opacity
                        distance: 150, // Distance between linked particles
                    },
                    opacity: {
                        value: 0.5, // Particle opacity
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse", // Repulse particles on hover
                        },
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;