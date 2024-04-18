// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Flex, Text, Button, VStack, Heading, Input, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaRobot, FaSearch } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bgColor} color={color} minH="100vh">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading size="lg">Chatbot Curriculum Viewer</Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Flex>
      <VStack spacing={8} p={8}>
        <Flex width="100%" alignItems="center">
          <Input placeholder="Search curriculum topics..." size="lg" mr={2} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" px={8}>
            Search
          </Button>
        </Flex>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Heading fontSize="xl">Introduction to Chatbots</Heading>
          <Text mt={4}>Learn the basics of chatbot development, including design principles, user interaction, and platform integration.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Heading fontSize="xl">Understanding Natural Language Processing</Heading>
          <Text mt={4}>Dive into Natural Language Processing (NLP) to enhance your chatbot's understanding and response capabilities.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Heading fontSize="xl">Advanced Chatbot Features</Heading>
          <Text mt={4}>Explore advanced features such as context handling, session management, and proactive messaging.</Text>
        </Box>
      </VStack>
      <Flex justifyContent="center" p={4}>
        <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid">
          Learn More
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
