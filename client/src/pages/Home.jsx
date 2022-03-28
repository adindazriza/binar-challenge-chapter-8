import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Image,
  VStack
} from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Box bg="white" p={100} rounded="md">
            <Text>
                <Button colorScheme="purple" isFullWidth as="a" href="/login" >
                LOGIN
                </Button>
                <Button mt="3" colorScheme="gray" isFullWidth as="a" href="/register" >
                REGISTER
                </Button>
            </Text>
            </Box>
        </Flex>
    )
}
