import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import useToast from "../../components/Toasters/toasthook";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useToast();
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue(
    "rgb(130, 11, 138)",
    "rgb(209, 250, 255)"
  );
  const placeholdercolor = useColorModeValue("teal.500", "teal.300");
  const placeholderbordercolor = useColorModeValue("gray.500", "gray.300");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!formData.name || !formData.email || !formData.message) {
      showToast("info", "Please fill all the fields!");
      return;
    }

    try {
      showToast("loading", "Sending your message...");

      // Send message to the backend
      const response = await fetch("https://sangamportfolio.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "adityanegi748@gmail.com", // Recipient email
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
        showToast("success", "Message sent successfully!");
      } else {
        console.error("Failed to send email");
        showToast("error", "Failed to send your message.");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("error", "Internal server error.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box name="contact" h="60vh" px="4" textAlign="center">
      <Navbar displayText={routes?.find((route) => window.location.href.includes(route.path))?.navbarDisplayName || "Contact"} />
      <Box mx="auto" maxW="xl">
        {/* Heading */}
        <Text
          color={textColorPrimary}
          fontSize="4xl"
          mt="30px"
          fontWeight="bold"
          borderBottom="4px"
          borderColor="#00FFCA"
          display="inline-block"
        >
          Contact
        </Text>
        {/* Description */}
        <Text color={textColorPrimary} py="2">
          Submit the form below or send me an email at{" "}
          <Text as="span" fontWeight="bold">
            adityanegi748@gmail.com
          </Text>
        </Text>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            mb="4"
            px="2"
            rounded="md"
            variant="filled"
            _placeholder={{ opacity: 1, color: placeholdercolor }}
            focusBorderColor={placeholderbordercolor}
            focusBorderWidth="2"
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            mb="4"
            px="2"
            rounded="md"
            variant="filled"
            _placeholder={{ opacity: 1, color: placeholdercolor }}
            focusBorderColor={placeholderbordercolor}
            focusBorderWidth="2"
          />
          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            mb="4"
            px="2"
            rounded="md"
            variant="filled"
            _placeholder={{ opacity: 1, color: placeholdercolor }}
            focusBorderColor={placeholderbordercolor}
            focusBorderWidth="2"
            rows="5"
          ></Textarea>
          <Button
            type="submit"
            px="6"
            py="1"
            mb="2"
            rounded="full"
            fontWeight="semibold"
            bgGradient="linear(to-r, #23c483, #1a8d73)"
            _hover={{
              bgGradient: "linear(to-r, #23c483, #1a8d73)",
              shadow: "md",
              color: "white",
              transform: "translateY(-3px)",
            }}
            _active={{ transform: "translateY(-1px)" }}
          >
            Send Message
            <IoSendSharp ml="4" />
          </Button>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <Text color="green.500" mt="2">
            Message submitted successfully!
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Contact;
