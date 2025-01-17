import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92t9pt9", 
        "template_izosbx3", 
        e.target, 
        "XtxQdt_Fqj-9enO7S" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");

          setFormData({
            fullName: "",
            email: "",
            mobileNumber: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div
      className="mx-auto p-2"
      style={{
        background: `linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(59, 130, 246, 0.3))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex flex-col mx-auto w-3/4 mt-16 h-auto rounded-md space-y-5 pb-10"
        style={{
          backgroundColor: "#358ff31a",
        }}
      >
        <div className="py-20 mx-auto">
          <h3
            className="md:text-5xl font-bold text-white text-3xl"
            style={{ fontFamily: "Cursive" }}
          >
            Contact Us
          </h3>
        </div>
        <div className="w-3/4 mx-auto">
          <form onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  name="fullName"
                  label="Full Name"
                  variant="standard"
                  fullWidth
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  name="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  name="mobileNumber"
                  label="Mobile Number"
                  multiline
                  rows={2}
                  variant="standard"
                  fullWidth
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="standard"
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item sm={6}>
                <Button
                  type="submit"
                  className="bg-[#3b82f680] hover:bg-blue-500 text-white"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
