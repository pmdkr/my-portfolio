import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <section className="max-w-3xl mx-auto p-6 bg-base-200 shadow-xl rounded-2xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-primary">Get in Touch</h2>

                <form className="space-y-4">
                    <div className="form-control">
                        <label className="label text-base-content">Name</label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label text-base-content">Email</label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label text-base-content">Message</label>
                        <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-24"></textarea>
                    </div>

                    <button className="btn btn-primary w-full">Send Message</button>
                </form>

                <div className="flex justify-center gap-4 mt-6">
                    <a href="#" className="text-xl text-primary hover:text-secondary transition">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-xl text-primary hover:text-secondary transition">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-xl text-primary hover:text-secondary transition">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:your@email.com" className="text-xl text-primary hover:text-secondary transition">
                        <FaEnvelope />
                    </a>
                </div>
            </section>
        </div>

    )
}
export default Contact;
