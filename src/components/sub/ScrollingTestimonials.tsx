import { testimonials } from '../constants/testimonial'

const ScrollingTestimonials: React.FC = () => {
  return (
    <div className="w-full h-auto overflow-hidden space-y-4 border-[#64748b] rounded-3xl py-4">
      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="flex space-x-8 animate-marquee">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 mb-8">
              <img src={`${testimonial.image}`} className="w-16" alt="testimonial" />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="flex space-x-8 animate-marquee-reverse">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 rounded-3xl mb-8">
              <img src={`${testimonial.image}`} className="w-16" alt="testimonial" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingTestimonials
