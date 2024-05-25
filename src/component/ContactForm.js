import React, { useState } from "react";
import { MdClose } from "react-icons/md";
// import "../footer.css";

const ContactForm = ({showForm, setShowForm}) => {

  const initialFormState = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    companyEmail: '',
    company: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    console.log(formData);
    setFormData(initialFormState); // Reset the form fields
  };



  return (
    <div>
      <div className="footer-contact-section sm:py-20 lg:py-10 lg:px-20 sm:px-5">
        <div className="lg:grid lg:grid-cols-12 gap-[5%] sm:flex sm:flex-col-reverse">
          {/* <div className="lg:col-span-6 md:col-span-6 sm:col-span-12">
              <div className="map lg:w-full sm:w-[100%] h-[300px] lg:mt-10 sm:mt-5">
                <div className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.94898951084804!2d77.31535415943979!3d28.58201447114941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8cb2844875948653%3A0x31a70beb6225a223!2sMaxify%20Web%20Solutions%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1716287100411!5m2!1sen!2sin"
                    width="100%"
                    height={350}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="contenct mt-14">
                <h5 className="text-lg font-[600]">Company Address</h5>
                <div className="mt-5 ml-5">
                  <ul className="text-base text-gray-600">
                    <li>
                      <strong>Maxify web solution pvt. ltd</strong>
                      <br />
                      The Viste Centre
                      <br />
                      Office No - F-02
                      <br />
                      Block- D, Sector 2, Red FM Road
                      <br />
                      Noida, Uttar Pradesh 201301
                      <br />
                      Telephone:<a href="tel:+91">+442084322870</a>
                      <br />
                      E-mail:
                      <a href="mailto:info@mindtreeitsolutions.com">
                        info@mindtreeitsolutions.com
                      </a>
                      <a href="mailto:mail@companyname.com">
                        <br />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          <div className="lg:col-span-12 md:col-span-12 sm:col-span-12">
            <div className="mb-5 flex justify-between">
              <div>
                <h3 className="heading-h3">Time to break the ice?</h3>
                <p className="para">We would love to hear from you.</p>
              </div>
              <div className="text-3xl font-[700] cursor-pointer" onClick={()=>setShowForm(!showForm)}>
                <MdClose />
              </div>
            </div>

            <div className="footer-contact-form">
              <div className="flex justify-between gap-[5%]">
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  id=""
                />
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  id=""
                />
              </div>

              <div className="flex justify-between gap-[5%]">
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  id=""
                />
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Company Email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  id=""
                />
              </div>

              <div>
                <input
                  className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  id=""
                />
              </div>

              <textarea
                className="w-full rounded-md py-0 bg-gray-200 placeholder-black text-md"
                name="message"
                value={formData.message}
                onChange={handleChange}
                id=""
                placeholder="Message"
                cols="30"
                rows="5"
              ></textarea>
              <button onClick={handleClick}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
