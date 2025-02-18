import React from 'react'
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {

        const testimonials = [
            {
                text: "The best smoothies in town! Fresh ingredients and amazing flavor combinations. My daily morning stop!",
                name: "Imran Khan",
                role: "Regular Customer",
                img: "https://yashk2211.github.io/Portfolio/assets/img/testimonials/imran.jpg"
            },
            {
                text: "I love their commitment to using fresh, natural ingredients. The Green Goddess is my favorite!",
                name: "Adil Khan",
                role: "Fitness Enthusiast",
                img: "https://media.licdn.com/dms/image/v2/C4D03AQHyEOnKHIVseg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1656854104200?e=1745452800&v=beta&t=LD5Z69JJnqHuTJ1CpCAclxMbnA2K8zWaIl3HikWHJag"
            },
            {
                text: "The acai bowls are incredible! Perfect post-workout fuel and the staff is always friendly",
                name: "Shabbar Khan",
                role: "Yoga Instructor",
                img: "https://yashk2211.github.io/Portfolio/assets/img/testimonials/shabbar.jpg"
            },
            {
                text: "Absolutely love their fresh juices! So refreshing and natural.",
                name: "Ayesha Patel",
                role: "Health Blogger",
                img: "https://randomuser.me/api/portraits/women/68.jpg"
            },
            {
                text: "Best smoothie bar ever! The taste is unbeatable.",
                name: "Ravi Sharma",
                role: "Food Critic",
                img: "https://randomuser.me/api/portraits/men/45.jpg"
            }
        ];
    
        // Slider settings
        const settings = {
            dots: true,         // Navigation dots show honge
            infinite: true,     // Infinite loop me chalega
            speed: 800,         // Slide transition speed (ms)
            slidesToShow: 2,    // Ek time pe kitne testimonials dikhane hain
            slidesToScroll: 1,  // Ek baar me kitne slide move honge
            autoplay: true,     // Auto-slide enable
            autoplaySpeed: 3000, // 3 seconds me slide change hoga
            arrows: false,      // Left-Right arrows hide karne ke liye
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, // Mobile me ek testimonial dikhaye
                    }
                }
            ]
        };

  return (
    <>
        <section data-aos="fade-up" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our Customers Say
                </h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg mx-2">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">{testimonial.text}</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-3">
                                    <img className="w-full h-full object-cover" src={testimonial.img} alt={testimonial.name} />
                                </div>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section> 
    </>
  )
}

export default Sliders
